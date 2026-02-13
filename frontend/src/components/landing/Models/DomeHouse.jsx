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

const DomeHouse = () => {
    const { isDark } = useTheme();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Geodesic Structure",
            description: "Frameless geodesic dome structure for maximum strength and internal volume."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "FRP Molded Panels",
            description: "Advanced FRP fiberglass technology for superior durability and structural integrity."
        },
        {
            icon: <Wind className="w-8 h-8" />,
            title: "Cyclone Resistant",
            description: "Aerodynamic design engineered to withstand hurricane and high-velocity wind loads."
        },
        {
            icon: <Droplets className="w-8 h-8" />,
            title: "Rustproof & Waterproof",
            description: "100% corrosion resistant exterior, ideal for coastal and high-humidity environments."
        },
        {
            icon: <Maximize className="w-8 h-8" />,
            title: "Expandable Design",
            description: "Modular architecture allows for easy expansion or joining of multiple units."
        },
        {
            icon: <Wand2 className="w-8 h-8" />,
            title: "Gel-Coat Finish",
            description: "Low maintenance exterior gel coating with high UV resistance and gloss retention."
        }
    ];

    const specs = [
        { label: "Floor Area", value: "200 Sq Ft" },
        { label: "Diameter", value: "16 Ft" },
        { label: "Peak Height", value: "9.5 Ft" },
        { label: "Structure Life", value: "20+ Years" },
        { label: "Window Material", value: "Aluminium Alloy" },
        { label: "Insulation", value: "PU Foam Core" }
    ];

    const interiorFeatures = [
        { icon: <Lightbulb />, label: "False Ceiling Lighting" },
        { icon: <Zap />, label: "Smart Electrical Systems" },
        { icon: <Sun />, label: "Curtain Installation" },
        { icon: <Plug />, label: "Charging & Appliance Sockets" }
    ];

    const utilities = [
        {
            title: "Water Connection",
            icon: <Waves />,
            desc: "Standard 1/2 inch inlet with high-pressure plumbing pre-installed."
        },
        {
            title: "Electrical Connection",
            icon: <Zap />,
            desc: "Single-phase 220V/32A main power inlet with safety breakers."
        },
        {
            title: "Waste Management",
            icon: <Trash2 />,
            desc: "Integrated septic system compatibility with rear outlet ports."
        }
    ];

    return (
        <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-start overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover brightness-[0.85]"
                    >
                        <source src="/Videos/dome-aerial.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-orange-500 text-black px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-[0_0_20px_rgba(249,115,22,0.4)] animate-pulse-slow">
                                Customizable
                            </span>
                        </div>
                        <h1 className="text-xl md:text-3xl font-bold text-white mb-2 font-premium-serif tracking-widest uppercase">
                            Dome House Series
                        </h1>
                        <p className="text-xl text-white/90 mb-8 font-light max-w-lg leading-relaxed">
                            Geodesic engineering meets organic luxury. <span className="text-orange-500 font-bold underline decoration-orange-500/30 underline-offset-4">Bespoke layouts and finishes</span> tailored for your specific landscape.
                        </p>
                        <Link to="/contact">
                            <button
                                onClick={() => trackEnquiryIntent('Dome House')}
                                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold h-11 px-8 rounded-xl text-sm transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.4)] mt-4 flex items-center gap-3 group"
                            >
                                Enquire Now
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Interior Showcase - Scaled Down & Repositioned Above Specs */}
            <section className={`py-12 ${isDark ? 'bg-[#050505]' : 'bg-gray-50'}`}>
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex items-center justify-start gap-4 mb-10">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                            <Home className="text-orange-500 w-5 h-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 font-premium-serif tracking-tight leading-none">
                            Interior Showcase
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {[
                            { src: "/Models/dome-bedroom1.jpeg", label: "Upper View" },
                            { src: "/Models/dome-kitchen.jpeg", label: "Living & Dining" },
                            { src: "/Models/dome-living.jpeg", label: "Modern Living" },
                            { src: "/Models/dome-bed-room.jpeg", label: "Bedroom View" },
                            { src: "/Models/dome-exterior.jpeg", label: "Aerial Layout" },
                            { src: "/Models/dome-.jpeg", label: "Resort View" },
                        ].map((item, i) => (
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
                                    <p className="text-orange-50 font-bold text-[10px] md:text-xs drop-shadow-lg uppercase tracking-wider">{item.label}</p>
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

                            {/* Size Specifications */}
                            <div>
                                <h3 className={`text-2xl font-premium-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Size Specifications</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {specs.map((spec, i) => (
                                        <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'} transition-all hover:border-orange-500/50 group`}>
                                            <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{spec.label}</p>
                                            <p className={`text-xl font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>{spec.value}</p>
                                        </div>
                                    ))}
                                    <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'}`}>
                                        <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Origin</p>
                                        <p className={`text-xl font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>Made in India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Infrastructure & Setup */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
                                        <Waves className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Infrastructure & Setup</h3>
                                </div>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 p-8 rounded-[2.5rem] border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}>
                                    {utilities.map((u, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
                                                {React.cloneElement(u.icon, { size: 16 })}
                                            </div>
                                            <div>
                                                <p className={`text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{u.title}</p>
                                                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{u.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Advantages */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Advantages</h3>
                                </div>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 p-8 rounded-[2.5rem] border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}>
                                    {[
                                        "Fully modular prefabrication",
                                        "Rapid installation (under 2 hours)",
                                        "Eco-friendly terrain adaptability",
                                        "Mobile and relocatable structure",
                                        "FRP molded fiberglass panels",
                                        "Cyclone and hurricane resistant",
                                        "Rustproof and waterproof building",
                                        "Low maintenance exterior coating"
                                    ].map((adv, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                                                <ShieldCheck className="w-3 h-3" />
                                            </div>
                                            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{adv}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Technical Benefits & Lighting */}
                        <div className="lg:col-span-5 space-y-8 mt-12 lg:mt-0">

                            {/* Technical Benefits Card */}
                            <div className={`p-8 md:p-10 rounded-[3rem] border h-full ${isDark ? 'bg-gray-900/50 border-gray-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]' : 'bg-white border-gray-100 shadow-xl'}`}>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Benefits</h3>
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { icon: <Clock />, text: "Construction cycle: 30-60 days" },
                                        { icon: <Zap />, text: "Installation readiness within 2 hours" },
                                        { icon: <Sun />, text: "Compatible with solar power systems" },
                                        { icon: <Waves />, text: "Water purification integration" },
                                        { icon: <Thermometer />, text: "Extreme climate insulation" },
                                        { icon: <Layers />, text: "Simple four-point support foundation" },
                                        { icon: <Maximize />, text: "Relocatable anytime, anywhere" }
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-5 group">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isDark ? 'bg-orange-900/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white' : 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'}`}>
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
                                        <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                                            <Lightbulb className="w-5 h-5" />
                                        </div>
                                        <h3 className={`text-xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Interior Features</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {interiorFeatures.map((item, i) => (
                                            <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border border-transparent transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:scale-[1.02] ${isDark ? 'bg-gray-800/40 text-gray-400 hover:bg-gray-800/60' : 'bg-gray-50 text-gray-600 hover:bg-white'}`}>
                                                {React.cloneElement(item.icon, { size: 16, className: "text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" })}
                                                <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {/* Final CTA */}
            <section className="py-32 bg-black text-white text-center px-6 relative overflow-hidden">
                {/* LightPillar Background Effect */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <LightPillar
                        topColor="#FB923C"
                        bottomColor="#F97316"
                        intensity={1.5}
                        rotationSpeed={0.4}
                        glowAmount={0.004}
                        pillarWidth={3.8}
                        pillarHeight={0.3}
                        noiseIntensity={0.6}
                        pillarRotation={15}
                        interactive={false}
                        mixBlendMode="screen"
                        quality="medium"
                    />
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-5xl md:text-7xl font-premium-serif font-bold mb-8">Your sanctuary awaits.</h2>
                    <p className="text-2xl text-gray-400 mb-10">Start your geodesic living journey today.</p>
                    <Link to="/contact">
                        <button
                            onClick={() => trackEnquiryIntent('Dome House')}
                            className="bg-orange-500 text-white font-bold h-16 px-12 rounded-full text-xl hover:bg-orange-400 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20 flex items-center gap-4 mx-auto group"
                        >
                            Enquire Now
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </button>
                    </Link>
                </div>
            </section>

            <Footer accentColor="orange" />

            {/* Full Screen Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors"
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

export default DomeHouse;
