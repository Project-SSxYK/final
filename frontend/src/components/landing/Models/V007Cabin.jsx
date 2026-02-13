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
    Cpu,
    Battery,
    Smartphone,
    Droplet,
    Box,
    Anchor,
    Construction,
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

const V007Cabin = () => {
    const { isDark } = useTheme();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <Box className="w-8 h-8" />,
            title: "Premium FRP Body",
            description: "Advanced Fibre Reinforced Polymer composite for extreme durability and weather resistance."
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Sturdy GI Frame",
            description: "Galvanized Mild Steel structural frame ensuring long-term stability and rust protection."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Water & Fire Resistant",
            description: "Engineered structural build designed to withstand harsh elements and ensure safety."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Smart Infrastructure",
            description: "Concealed PVC-insulated copper wiring with pre-installed sockets and AC provisions."
        },
        {
            icon: <Maximize className="w-8 h-8" />,
            title: "Intelligent Layout",
            description: "30ft length featuring a bedroom, living/kitchen area, and a luxury attached washroom."
        },
        {
            icon: <Construction className="w-8 h-8" />,
            title: "Six-Corner Support",
            description: "Advanced structural support system with six legs for superior stability on any terrain."
        }
    ];

    const specs = [
        { label: "Length", value: "30 Feet" },
        { label: "Width", value: "9.5 Feet" },
        { label: "Height", value: "9.5 Feet" },
        { label: "Glass", value: "8mm Toughened" },
        { label: "Flooring", value: "Fibre Cement" },
        { label: "Support", value: "6-Leg System" }
    ];

    const interiorFeatures = [
        { icon: <Thermometer />, label: "PUF Insulation" },
        { icon: <Wand2 />, label: "Duco Finish" },
        { icon: <Zap />, label: "AC Provision x2" },
        { icon: <Lightbulb />, label: "Decorative Ceiling" }
    ];

    const washroomFeatures = [
        { icon: <Battery />, label: "Vanity Mirror" },
        { icon: <Box />, label: "Storage Box" },
        { icon: <Droplet />, label: "One-Piece WC" },
        { icon: <Wind />, label: "Exhaust System" }
    ];

    const showCaseImages = [
        { src: "/Models/v007.jpeg", label: "Hero Exterior" },
        { src: "/Models/v007-int.jpeg", label: "Main Living Space" },
        { src: "/Models/v007-int-1.jpeg", label: "Bedroom Comfort" },
        { src: "/Models/v007-int2.jpeg", label: "Technical Layout" },
        { src: "/Models/interior-make-v007.png", label: "Premium Finish" },
        { src: "/Models/inteior-make-2.png", label: "Smart Details" },
        { src: "/Models/interior-make-out.png", label: "Panoramic View" }
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
                        className="w-full h-full object-cover brightness-[0.75]"
                    >
                        <source src="/Videos/v007-drone.mp4" type="video/mp4" />
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
                            <span className="bg-amber-500 text-black px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse-slow">
                                Customizable
                            </span>
                        </div>
                        <h1 className="text-xl md:text-3xl font-bold text-amber-500 mb-2 font-premium-serif tracking-widest uppercase">
                            V007 Capsule Cabin
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-premium-serif tracking-tight">
                            The Flagship Sanctuary
                        </h2>
                        <p className="text-xl text-white/90 mb-8 font-light max-w-lg leading-relaxed">
                            A premium 30ft luxury cabin balancing durability with high-end aesthetic planning. <span className="text-amber-500 font-bold underline decoration-amber-500/30 underline-offset-4">Fully customizable interiors and layouts</span> to match your unique vision.
                        </p>
                        <Link to="/contact">
                            <button
                                onClick={() => trackEnquiryIntent('V007 Cabin')}
                                className="bg-amber-500 hover:bg-amber-600 text-black font-bold h-14 px-10 rounded-xl text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.4)] mt-4 flex items-center gap-3 group"
                            >
                                Enquire Now
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Showcase Section */}
            <section className={`pt-12 pb-4 ${isDark ? 'bg-[#050505]' : 'bg-gray-50'}`}>
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex items-center justify-start gap-4 mb-10">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                            <Home className="text-amber-500 w-5 h-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-amber-500 font-premium-serif tracking-tight leading-none">
                            V007 Showcase
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
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
                                    <p className="text-amber-50 font-bold text-[10px] md:text-xs drop-shadow-lg uppercase tracking-wider">{item.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Section */}
            <section className={`pt-4 pb-20 px-6 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Left Column */}
                        <div className="lg:col-span-7 space-y-16">

                            {/* Size Specifications */}
                            <div>
                                <h3 className={`text-2xl font-premium-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Core Specifications</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {specs.map((spec, i) => (
                                        <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'} transition-all hover:border-amber-500/50 group`}>
                                            <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{spec.label}</p>
                                            <p className={`text-xl font-bold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>{spec.value}</p>
                                        </div>
                                    ))}
                                    <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'}`}>
                                        <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Wiring</p>
                                        <p className={`text-xl font-bold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>PVC Concealed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Architectural Infrastructure</h3>
                                </div>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 p-8 rounded-[2.5rem] border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}>
                                    {features.map((f, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
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

                            {/* Washroom Details */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                                        <Droplets className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Luxury Washroom Features</h3>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {washroomFeatures.map((item, i) => (
                                        <div key={i} className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 hover:border-amber-500/50 ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-white border-gray-100 shadow-sm'}`}>
                                            <div className="text-amber-500 mb-3">{item.icon}</div>
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-center">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:col-span-5 space-y-8 mt-12 lg:mt-0">

                            {/* Layout & Applications */}
                            <div className={`p-8 md:p-10 rounded-[3rem] border h-full ${isDark ? 'bg-gray-900/50 border-gray-800 shadow-2xl' : 'bg-white border-gray-100 shadow-xl'}`}>
                                <h3 className={`text-2xl font-premium-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ideal Applications</h3>
                                <div className="space-y-4 mb-16">
                                    {[
                                        "Luxury homestays & glamping",
                                        "Boutique resort guest units",
                                        "Remote luxury accommodation",
                                        "Premium site office solutions",
                                        "Private backyard sanctuaries"
                                    ].map((app, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className={`w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150 ${isDark ? 'bg-amber-500' : 'bg-amber-600'}`} />
                                            <p className={`text-base ${isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'}`}>{app}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-16 pt-10 border-t border-gray-800/50">
                                    <h3 className={`text-xl font-premium-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Internal Provisioning</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {interiorFeatures.map((item, i) => (
                                            <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border border-transparent transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:scale-[1.02] ${isDark ? 'bg-gray-800/40 text-gray-400 hover:bg-gray-800/60' : 'bg-gray-50 text-gray-600 hover:bg-white'}`}>
                                                {React.cloneElement(item.icon, { size: 16, className: "text-amber-500" })}
                                                <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`mt-6 p-5 rounded-2xl border ${isDark ? 'bg-amber-500/5 border-amber-500/20' : 'bg-amber-50 border-amber-200'}`}>
                                        <p className={`text-xs leading-relaxed ${isDark ? 'text-amber-200/70' : 'text-amber-800'}`}>
                                            <span className="font-bold">Installation:</span> Requires foundation support, single-phase power, water line, and septic management.
                                        </p>
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
                        topColor="#FFD700"
                        bottomColor="#FAA916"
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
                    <h2 className="text-5xl md:text-7xl font-premium-serif font-bold mb-8">Elevate your standards.</h2>
                    <p className="text-2xl text-gray-400 mb-10">Commission your V007 masterpiece today.</p>
                    <Link to="/contact">
                        <button
                            onClick={() => trackEnquiryIntent('V007 Cabin')}
                            className="bg-amber-500 text-black font-bold h-16 px-12 rounded-full text-xl hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl shadow-amber-500/20 flex items-center gap-4 mx-auto group"
                        >
                            Enquire Now
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </button>
                    </Link>
                </div>
            </section>

            <Footer accentColor="amber" />

            {/* Full Screen Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-white hover:text-amber-500 transition-colors"
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

export default V007Cabin;
