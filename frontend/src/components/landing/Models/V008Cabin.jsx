import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ChevronLeft,
    Wind,
    Droplets,
    ShieldCheck,
    Zap,
    Maximize,
    Layers,
    Thermometer,
    Clock,
    Home,
    Sun,
    Lightbulb,
    Plug,
    Wand2,
    Trash2,
    Waves,
    X,
    Tv,
    Layout,
    Box,
    Monitor,
    Coffee,
    Settings,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';
import { Navbar, Footer } from '../LandingPage';
import axios from 'axios';
import LightPillar from '../../ui/LightPillar';

const trackEnquiryIntent = async (modelName) => {
    try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/notify-enquiry?model_name=${encodeURIComponent(modelName)}`);
    } catch (err) {
        // Fail silently
    }
};

const V008Cabin = () => {
    const { isDark } = useTheme();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Advanced Construction",
            description: "FRP exterior shell with galvanized GI structural frame for maximum stability."
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Premium Flooring",
            description: "High-quality Vinyl flooring set on a durable Fibre Cement Board base."
        },
        {
            icon: <Thermometer className="w-8 h-8" />,
            title: "Climate Control",
            description: "Equipped with a 1.5 Ton Voltas AC and full insulation for all-season comfort."
        },
        {
            icon: <Monitor className="w-8 h-8" />,
            title: "Home Cinema",
            description: "Integrated Home Projector and Screen system for a true luxury experience."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Smart Automation",
            description: "Automatic Movable Curtains and intelligent lighting for modern living."
        },
        {
            icon: <Wand2 className="w-8 h-8" />,
            title: "Premium Fittings",
            description: "Elite washroom fittings from Jaguar, Sara, or Hindware for a spa-like feel."
        }
    ];

    const specs = [
        { label: "Exterior", value: "FRP Shell" },
        { label: "Flooring", value: "Vinyl / Cement" },
        { label: "AC Unit", value: "1.5 Ton Voltas" },
        { label: "Entertainment", value: "Home Cinema" },
        { label: "Curtains", value: "Auto-Movable" },
        { label: "Structure", value: "GI Steel Frame" }
    ];

    const washroomInterior = [
        { label: "Sanitary", value: "Jaguar / Hindware" },
        { label: "WC Type", value: "Wall Mounted" },
        { label: "Amenities", value: "Vanity & Mirror" },
        { label: "Ventilation", value: "Exhaust Fan" },
        { label: "Utilities", value: "Geyser Socket" },
        { label: "Basin", value: "Designer Washbasin" }
    ];

    const utilities = [
        {
            title: "Electrical Prowess",
            icon: <Zap />,
            desc: "Provision for Charging, Wall Fan, Room Heater, and dedicated AC fittings."
        },
        {
            title: "Concealed Safety",
            icon: <ShieldCheck />,
            desc: "All wiring is concealed type using high-grade PVC insulated copper wire."
        },
        {
            title: "System Integration",
            icon: <Settings />, // Added Settings icon for better representation
            desc: "Integrated copper lines and electrical points pre-routed for immediate use."
        }
    ];

    const showCaseImages = [
        { src: "/Models/v008-.jpeg", label: "Exterior Perspective" },
        { src: "/Models/v008-bedroom.jpeg", label: "Master Bedroom" },
        { src: "/Models/double-c-cabin.jpeg", label: "Front Profile" },
        { src: "/Models/inteior-make-2.png", label: "Interior Concept" }
    ];

    // Theme Color (Premium Emerald/Jade)
    const themeClass = {
        text: isDark ? 'text-emerald-400' : 'text-emerald-600',
        bg: isDark ? 'bg-emerald-500/10' : 'bg-emerald-50',
        border: isDark ? 'border-emerald-500/20' : 'border-emerald-200',
        button: 'bg-emerald-500 hover:bg-emerald-600',
        shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
        glow: 'shadow-[0_0_15px_rgba(16,185,129,0.1)]'
    };

    return (
        <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-start overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Models/v008-.jpeg"
                        alt="V008 Hero"
                        className="w-full h-full object-cover brightness-[0.6]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl md:max-w-2xl"
                    >
                        <h1 className="text-xl md:text-2xl font-bold text-emerald-500 mb-2 font-premium-serif tracking-widest uppercase">
                            V008 Capsule Cabin
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-premium-serif tracking-tight leading-none">
                            Compact Luxury. <br />Efficiently Reimagined.
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-8 font-light max-w-md leading-relaxed">
                            A masterpiece of modular technology. The V008 delivers premium comfort in a space-efficient layout, engineered for <span className="text-emerald-400 font-bold underline decoration-emerald-500/30 underline-offset-4">modern hospitality and eco-tourism.</span>
                        </p>
                        <Link to="/contact">
                            <button
                                onClick={() => trackEnquiryIntent('V008 Cabin')}
                                className={`${themeClass.button} text-black font-bold h-12 md:h-14 px-8 md:px-10 rounded-xl text-md md:text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.4)] mt-2 flex items-center gap-3 group`}
                            >
                                Enquire Now
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Showcase Section */}
            <section className={`py-12 ${isDark ? 'bg-[#050505]' : 'bg-gray-50'}`}>
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex items-center justify-start gap-4 mb-10">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${themeClass.bg} border ${themeClass.border} ${themeClass.glow}`}>
                            <Box className="text-emerald-500 w-5 h-5" />
                        </div>
                        <h2 className={`text-2xl md:text-3xl font-bold text-emerald-500 font-premium-serif tracking-tight leading-none`}>
                            V008 Model Showcase
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {showCaseImages.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="relative rounded-2xl overflow-hidden aspect-[3/2] group cursor-pointer shadow-lg"
                                onClick={() => setSelectedImage(item.src)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70" />
                                <div className="absolute bottom-3 left-3">
                                    <p className="text-emerald-50 font-bold text-[10px] md:text-xs drop-shadow-lg uppercase tracking-wider">{item.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compact Dashboard Section */}
            <section className={`py-20 px-6 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Left Column: Specs and Advantages */}
                        <div className="lg:col-span-7 space-y-16">

                            {/* Technical Specifications */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-10 h-10 rounded-full ${themeClass.bg} flex items-center justify-center text-emerald-500 border ${themeClass.border}`}>
                                        <Layout className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Specifications</h3>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {specs.map((spec, i) => (
                                        <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'} transition-all hover:border-emerald-500/50 group`}>
                                            <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{spec.label}</p>
                                            <p className={`text-xl font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{spec.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Washroom Excellence */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-10 h-10 rounded-full ${themeClass.bg} flex items-center justify-center text-emerald-500 border ${themeClass.border}`}>
                                        <Droplets className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Interior & Washroom</h3>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {washroomInterior.map((spec, i) => (
                                        <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'} transition-all hover:border-emerald-500/50 group`}>
                                            <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{spec.label}</p>
                                            <p className={`text-sm font-bold ${isDark ? 'text-white/90' : 'text-gray-800'}`}>{spec.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Core Features Grid */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-10 h-10 rounded-full ${themeClass.bg} flex items-center justify-center text-emerald-500 border ${themeClass.border}`}>
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Features</h3>
                                </div>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 p-8 rounded-[2.5rem] border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}>
                                    {features.map((f, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className={`w-8 h-8 rounded-lg ${themeClass.bg} flex items-center justify-center text-emerald-500 shrink-0 mt-0.5`}>
                                                {f.icon}
                                            </div>
                                            <div>
                                                <p className={`text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{f.title}</p>
                                                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{f.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Applications */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-10 h-10 rounded-full ${themeClass.bg} flex items-center justify-center text-emerald-500 border ${themeClass.border}`}>
                                        <Home className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Ideal Applications</h3>
                                </div>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 p-8 rounded-[2.5rem] border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}>
                                    {[
                                        "Resort Guest Cabins",
                                        "Luxury Homestay Units",
                                        "Glamping Accommodations",
                                        "Private Retreat Cabins",
                                        "Boutique Hospitality Projects",
                                        "Eco-Tourism Mobile Units"
                                    ].map((app, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            </div>
                                            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{app}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Interior & Utilities */}
                        <div className="lg:col-span-5 space-y-8 mt-12 lg:mt-0">

                            {/* Interior Features Card */}
                            <div className={`p-8 md:p-10 rounded-[3rem] border h-full ${isDark ? 'bg-gray-900/50 border-gray-800 shadow-2xl' : 'bg-white border-gray-100 shadow-xl'}`}>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className={`w-12 h-12 rounded-2xl ${themeClass.bg} flex items-center justify-center text-emerald-500 border ${themeClass.border}`}>
                                        <Layout className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Luxury Content</h3>
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { icon: <Clock />, text: "Instant deployment & fast installation" },
                                        { icon: <Tv />, text: "Integrated Home Projector & Screen" },
                                        { icon: <Layout />, text: "Fully furnished with premium lounge chairs" },
                                        { icon: <Zap />, text: "Automatic Movable Curtain System" },
                                        { icon: <Droplets />, text: "Integrated water storage for washroom" },
                                        { icon: <Thermometer />, text: "High insulation multi-layer wall panels" },
                                        { icon: <Maximize />, text: "Expandable & relocatable modular design" }
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-5 group">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isDark ? 'bg-emerald-900/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white' : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'}`}>
                                                {React.cloneElement(benefit.icon, { size: 18 })}
                                            </div>
                                            <p className={`text-sm leading-tight pt-2.5 ${isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'} transition-colors`}>
                                                {benefit.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-16 pt-10 border-t border-gray-800/50">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`w-10 h-10 rounded-full ${themeClass.bg} flex items-center justify-center text-emerald-500`}>
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <h3 className={`text-xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Internal Setup</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { icon: <Monitor />, label: "Home Projector" },
                                            { icon: <Zap />, label: "Auto Curtains" },
                                            { icon: <Thermometer />, label: "1.5T Voltas AC" },
                                            { icon: <Maximize />, label: "Vinyl Flooring" }
                                        ].map((item, i) => (
                                            <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border border-transparent transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:scale-[1.02] ${isDark ? 'bg-gray-800/40 text-gray-400 hover:bg-gray-800/60' : 'bg-gray-50 text-gray-600 hover:bg-white'}`}>
                                                {React.cloneElement(item.icon, { size: 16, className: "text-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" })}
                                                <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`mt-6 p-5 rounded-2xl border ${isDark ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'}`}>
                                        <p className={`text-xs leading-relaxed ${isDark ? 'text-emerald-200/70' : 'text-emerald-800'}`}>
                                            <span className="font-bold">Elite Infrastructure:</span> All wiring is concealed high-grade PVC insulated copper. Includes specific ports for heaters, wall fans, and smart devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-emerald-950 text-white text-center px-6 relative overflow-hidden">
                {/* LightPillar Background Effect */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <LightPillar
                        topColor="#10B981"
                        bottomColor="#059669"
                        intensity={1.2}
                        rotationSpeed={0.3}
                        glowAmount={0.003}
                        pillarWidth={3.5}
                        pillarHeight={0.25}
                        noiseIntensity={0.5}
                        pillarRotation={-15}
                        interactive={false}
                        mixBlendMode="screen"
                        quality="medium"
                    />
                </div>
                <div className="absolute inset-0 opacity-10">
                    <Box className="w-[500px] h-[500px] absolute -right-20 -top-20 text-emerald-500" />
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-5xl md:text-7xl font-premium-serif font-bold mb-8">Compact. Luxury. Immediate.</h2>
                    <p className="text-2xl text-emerald-400/80 mb-10">Deploy your V008 luxury module today.</p>
                    <Link to="/contact">
                        <button
                            onClick={() => trackEnquiryIntent('V008 Cabin')}
                            className={`${themeClass.button} text-black font-bold h-16 px-12 rounded-full text-xl transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/20 flex items-center gap-4 mx-auto group`}
                        >
                            Enquire Now
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </button>
                    </Link>
                </div>
            </section>

            <Footer accentColor="emerald" />

            {/* Full Screen Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-white hover:text-emerald-500 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={40} />
                    </button>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        src={selectedImage}
                        alt="Full Screen View"
                        className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                    />
                </div>
            )}
        </div>
    );
};

export default V008Cabin;
