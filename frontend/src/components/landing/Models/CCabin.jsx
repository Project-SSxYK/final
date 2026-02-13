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
import LightPillar from '../../ui/LightPillar';
import axios from 'axios';

const trackEnquiryIntent = async (modelName) => {
    try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/notify-enquiry?model_name=${encodeURIComponent(modelName)}`);
    } catch (err) {
        // Fail silently
    }
};

const CCabin = () => {
    const { isDark } = useTheme();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Fire & Waterproof",
            description: "Advanced FRP exterior protection designed to withstand extreme elements and ensure safety."
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Galvanized Frame",
            description: "Reinforced galvanized mild steel pipe frame for superior structural stability."
        },
        {
            icon: <Thermometer className="w-8 h-8" />,
            title: "Polyurethane Insulation",
            description: "High-density insulation core for optimal temperature regulation and energy efficiency."
        },
        {
            icon: <Droplets className="w-8 h-8" />,
            title: "Integrated Module",
            description: "Prefabricated integrated bathroom module for seamless on-site utility connection."
        },
        {
            icon: <Maximize className="w-8 h-8" />,
            title: "Low-E Glass",
            description: "Double-layer Low-E tempered glass system for maximum thermal insulation."
        },
        {
            icon: <Construction className="w-8 h-8" />,
            title: "Modular Technology",
            description: "Advanced prefabricated assembly technology ensuring quality and fast deployment."
        }
    ];

    const specs = [
        { label: "Exterior", value: "FRP Shell" },
        { label: "Frame", value: "Galvanized Steel" },
        { label: "Insulation", value: "Multi-Layer" },
        { label: "Windows", value: "Low-E Tempered" },
        { label: "Assembly", value: "Modular Prefab" },
        { label: "Support", value: "Four-Point/Steel" }
    ];

    const utilityFeatures = [
        { icon: <Plug />, label: "Concealed Copper" },
        { icon: <Zap />, label: "AC & Lights Ready" },
        { icon: <Waves />, label: "Water & Grid Sync" },
        { icon: <Trash2 />, label: "Sewage Ready" }
    ];

    const environmentalBenefits = [
        { icon: <Clock />, text: "Installation within hours of delivery" },
        { icon: <Maximize />, text: "Dismantlable and fully relocatable" },
        { icon: <Droplets />, text: "Eco-friendly modular production" },
        { icon: <Home />, text: "Suitable for difficult terrains" },
        { icon: <ShieldCheck />, text: "Minimal construction site waste" }
    ];

    const showCaseImages = [
        { src: "/Models/double-c-cabin.jpeg", label: "Exterior View" },
        { src: "/Models/c-cabin-interior.jpeg", label: "Luxury Interior" },
        { src: "/Models/c-cabin-interior-1.jpeg", label: "Living Space" },
        { src: "/Models/c-cabin-interior-2.jpeg", label: "Modern Layout" }
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
                        className="w-full h-full object-cover brightness-[0.8]"
                    >
                        <source src="/Videos/c-cabin-upper-drone-shot.mp4" type="video/mp4" />
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
                            <span className="bg-violet-500 text-white px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-[0_0_20px_rgba(168,85,247,0.4)] animate-pulse-slow">
                                Customizable
                            </span>
                        </div>
                        <h1 className="text-xl md:text-3xl font-bold text-white mb-2 font-premium-serif tracking-widest uppercase text-violet-500">
                            C Cabin Series
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-premium-serif tracking-tight">
                            Portable Luxury Reimagined
                        </h2>
                        <p className="text-xl text-white/90 mb-8 font-light max-w-lg leading-relaxed">
                            Versatile prefabricated accommodation designed for durability, fast deployment, and high comfort. <span className="text-violet-500 font-bold underline decoration-violet-500/30 underline-offset-4">Engineered for both temporary and permanent</span> modular projects.
                        </p>
                        <Link to="/contact">
                            <button
                                onClick={() => trackEnquiryIntent('C Cabin')}
                                className="bg-violet-500 hover:bg-violet-600 text-white font-bold h-12 md:h-14 px-8 md:px-10 rounded-xl text-md md:text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(139,92,246,0.4)] mt-2 flex items-center gap-3 group border-none"
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
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-500/10 border border-violet-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                            <Home className="text-violet-500 w-5 h-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-violet-500 font-premium-serif tracking-tight leading-none">
                            C Cabin Showcase
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
                                    <p className="text-violet-50 font-bold text-[10px] md:text-xs drop-shadow-lg uppercase tracking-wider">{item.label}</p>
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

                            {/* Structural Specifications */}
                            <div>
                                <h3 className={`text-2xl font-premium-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Structural Specifications</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {specs.map((spec, i) => (
                                        <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'} transition-all hover:border-violet-500/50 group`}>
                                            <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{spec.label}</p>
                                            <p className={`text-xl font-bold ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>{spec.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Core Features Grid */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500 border border-violet-500/20">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Core Features</h3>
                                </div>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 p-8 rounded-[2.5rem] border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}>
                                    {features.map((f, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-500 shrink-0 mt-0.5">
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

                            {/* Use Cases */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500 border border-violet-500/20">
                                        <Maximize className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Versatile Use Cases</h3>
                                </div>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 p-8 rounded-[2.5rem] border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}>
                                    {[
                                        "Construction site accommodation",
                                        "Portable workforce housing",
                                        "Homestays and holiday cabins",
                                        "Emergency or disaster relief housing",
                                        "Temporary luxury field offices",
                                        "Eco-tourism remote units"
                                    ].map((use, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-500 shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                                            </div>
                                            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{use}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Integration & Mobility */}
                        <div className="lg:col-span-5 space-y-8 mt-12 lg:mt-0">

                            {/* Mobility & Installation Card */}
                            <div className={`p-8 md:p-10 rounded-[3rem] border h-full ${isDark ? 'bg-gray-900/50 border-gray-800 shadow-2xl' : 'bg-white border-gray-100 shadow-xl'}`}>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-500 border border-violet-500/20">
                                        <Construction className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Mobility & Deployment</h3>
                                </div>

                                <div className="space-y-8">
                                    {environmentalBenefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-5 group">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isDark ? 'bg-violet-900/20 text-violet-400 group-hover:bg-violet-500 group-hover:text-white' : 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white'}`}>
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
                                        <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500">
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <h3 className={`text-xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Utility Integration</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {utilityFeatures.map((item, i) => (
                                            <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border border-transparent transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:scale-[1.02] ${isDark ? 'bg-gray-800/40 text-gray-400 hover:bg-gray-800/60' : 'bg-gray-50 text-gray-600 hover:bg-white'}`}>
                                                {React.cloneElement(item.icon, { size: 16, className: "text-violet-500" })}
                                                <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`mt-6 p-5 rounded-2xl border ${isDark ? 'bg-violet-500/5 border-violet-500/20' : 'bg-violet-50 border-violet-200'}`}>
                                        <p className={`text-xs leading-relaxed ${isDark ? 'text-violet-200/70' : 'text-violet-800'}`}>
                                            <span className="font-bold">Utility Ready:</span> Direct connectivity to municipal water, electrical grid, and sewage systems.
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
                        topColor="#A855F7"
                        bottomColor="#8B5CF6"
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
                    <h2 className="text-5xl md:text-7xl font-premium-serif font-bold mb-8">Deploy luxury anywhere.</h2>
                    <p className="text-2xl text-gray-400 mb-10">Start your C Cabin module project today.</p>
                    <Link to="/contact">
                        <button
                            onClick={() => trackEnquiryIntent('C Cabin')}
                            className="bg-violet-500 text-white font-bold h-16 px-12 rounded-full text-xl hover:bg-violet-400 transition-all transform hover:scale-105 shadow-2xl shadow-violet-500/20 flex items-center gap-4 mx-auto group"
                        >
                            Enquire Now
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </button>
                    </Link>
                </div>
            </section>

            <Footer accentColor="violet" />

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

export default CCabin;
