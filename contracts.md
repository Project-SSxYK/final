# API Contracts

## Overview
This document outlines the API contracts for the NeoPod application, bridging the React frontend and FastAPI backend.

## Data Models

### Cabin Model
```json
{
  "id": "string (uuid)",
  "name": "string",
  "tagline": "string",
  "description": "string",
  "image_url": "string",
  "specs": ["string"],
  "price_starting_at": "number (optional)",
  "is_new": "boolean"
}
```

## Endpoints

### 1. Get All Cabins
- **Endpoint**: `GET /api/cabins`
- **Description**: Retrieves a list of all available cabin models.
- **Response**:
  ```json
  [
    {
      "id": "...",
      "name": "Pod One",
      "tagline": "The Essential Sanctuary",
      "description": "Compact, efficient...",
      "image_url": "...",
      "specs": ["250 sq ft", "Solar Ready"],
      "is_new": false
    },
    ...
  ]
  ```

### 2. Submit Interest (Waitlist/Contact)
- **Endpoint**: `POST /api/contact`
- **Description**: Saves user contact info/interest.
- **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "message": "string (optional)",
    "interested_model_id": "string (optional)"
  }
  ```
- **Response**:
  ```json
  {
    "id": "...",
    "status": "received",
    "timestamp": "..."
  }
  ```

## Integration Plan
1. **Backend**:
   - Create `Cabin` Pydantic model and MongoDB collection.
   - Create `init_db` script or endpoint to seed the 3 initial pods.
   - Implement `GET /api/cabins`.
2. **Frontend**:
   - Replace hardcoded `models` array in `LandingPage.jsx` with `useEffect` to fetch from `/api/cabins`.
   - Add `isLoading` state (skeleton or spinner).
