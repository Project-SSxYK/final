from fastapi import FastAPI, APIRouter, HTTPException
from contextlib import asynccontextmanager
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get("MONGODB_URI") or os.environ.get("MONGO_URL") or "mongodb://localhost:27017"
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'neopod')]

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Auto-seed on startup if empty
    try:
        # Check connection first with a lightweight command
        await client.admin.command('ping')
        
        count = await db.cabins.count_documents({})
        if count == 0:
            logger.info("Seeding database with initial cabins...")
            await seed_cabins()
    except Exception as e:
        logger.warning(f"MongoDB connection failed or seeding error: {e}. Running without database connection.")
    
    yield
    
    # Shutdown logic
    # client.close() # Optional, motor handles it well but explicitly closing is cleaner if needed

# Create the main app
app = FastAPI(lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# --- SMTP Configuration ---
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "") # Admin should set these
SMTP_PASS = os.environ.get("SMTP_PASS", "")
ADMIN_EMAIL = "vaigaprefab@gmail.com"

async def send_notification_email(subject: str, body: str):
    if not SMTP_USER or not SMTP_PASS:
        logger.warning("SMTP credentials not set. Skipping email notification.")
        return
    
    try:
        msg = MIMEMultipart()
        msg['From'] = SMTP_USER
        msg['To'] = ADMIN_EMAIL
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))
        
        server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)
        server.quit()
        logger.info(f"Notification email sent: {subject}")
    except Exception as e:
        logger.error(f"Failed to send email notification: {e}")

# --- Models ---

class Cabin(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    tagline: str
    description: str
    image_url: str
    specs: List[str]
    is_new: bool = False
    price_starting_at: Optional[float] = None

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: Optional[str] = None
    interested_model: Optional[str] = None

class ContactResponse(BaseModel):
    id: str
    status: str
    timestamp: datetime

class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class VisitNotifyRequest(BaseModel):
    page: str
    browser: Optional[str] = None

# --- Routes ---

@api_router.get("/")
async def root():
    return {"message": "NeoPod API is running"}

# Visit Notification
@api_router.post("/notify-visit")
async def notify_visit(request: VisitNotifyRequest):
    subject = "New Website Visitor - VAIGA CREATIVE"
    body = f"A user just landed on: {request.page}\nTime: {datetime.now(timezone.utc)}\nBrowser: {request.browser}"
    await send_notification_email(subject, body)
    return {"status": "notified"}

# Enquiry Intent Notification (Button Click)
@api_router.post("/notify-enquiry")
async def notify_enquiry(model_name: str):
    subject = f"Enquiry Interest: {model_name} - VAIGA CREATIVE"
    body = f"A user just clicked 'Enquire Now' for {model_name}.\nTime: {datetime.now(timezone.utc)}"
    await send_notification_email(subject, body)
    return {"status": "notified"}

# Cabin Routes
@api_router.get("/cabins", response_model=List[Cabin])
async def get_cabins():
    cabins = await db.cabins.find().to_list(100)
    return [Cabin(**c) for c in cabins]

@api_router.post("/seed-cabins")
async def seed_cabins():
    # Helper to reset and seed data
    existing = await db.cabins.count_documents({})
    if existing > 0:
        return {"message": "Cabins already seeded"}
    
    seed_data = [
        {
            "id": str(uuid.uuid4()),
            "name": "Pod One",
            "tagline": "The Essential Sanctuary",
            "description": "Compact, efficient, and completely self-sustainable. Perfect for solo creators.",
            "image_url": "https://images.unsplash.com/photo-1668015642451-a3bb11afb441",
            "specs": ["250 sq ft", "Solar Ready", "1 Bed"],
            "is_new": False
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Pod Pro",
            "tagline": "Expanded Horizons",
            "description": "Designed for couples with extended living space and smart home integration.",
            "image_url": "https://images.unsplash.com/photo-1697807650304-907257330a3e",
            "specs": ["450 sq ft", "Full Kitchen", "Smart Glass"],
            "is_new": True
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Pod Max",
            "tagline": "Ultimate Luxury",
            "description": "A full-sized family retreat that fits anywhere nature calls.",
            "image_url": "https://images.unsplash.com/photo-1724931282671-2d3bcd6de8f2",
            "specs": ["800 sq ft", "2 Bed / 2 Bath", "Off-grid Battery"],
            "is_new": False
        }
    ]
    
    await db.cabins.insert_many(seed_data)
    return {"message": "Seeded 3 cabins"}

# Contact Route
@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(request: ContactRequest):
    contact_entry = request.model_dump()
    contact_entry["id"] = str(uuid.uuid4())
    contact_entry["timestamp"] = datetime.now(timezone.utc)
    
    await db.contacts.insert_one(contact_entry)
    
    # Notify admin about new contact form submission
    subject = f"NEW FORM ENQUIRY: {request.name}"
    body = f"Name: {request.name}\nEmail: {request.email}\nModel: {request.interested_model}\nMessage: {request.message}\nTime: {contact_entry['timestamp']}"
    await send_notification_email(subject, body)
    
    return ContactResponse(
        id=contact_entry["id"],
        status="received",
        timestamp=contact_entry["timestamp"]
    )

# Legacy Status Routes (keeping them for compatibility if needed)
@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.model_dump())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include router
app.include_router(api_router)

cors_origins = os.environ.get("CORS_ORIGINS", "http://localhost:3000,http://localhost:8000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=[origin.strip() for origin in cors_origins],
    allow_methods=["*"],
    allow_headers=["*"],
)

