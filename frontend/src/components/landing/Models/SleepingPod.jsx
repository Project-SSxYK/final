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

const SleepingPod = () => {
    const { isDark } = useTheme();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Fully Modular",
            description: "Standardized prefabricated integrated design for rapid on-site assembly."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Durable Structure",
            description: "Stainless steel skeleton with high-grade aluminium veneer outer shell."
        },
        {
            icon: <Thermometer className="w-8 h-8" />,
            title: "Extreme Insulation",
            description: "100mm polyurethane core for superior thermal performance in any climate."
        },
        {
            icon: <Maximize className="w-8 h-8" />,
            title: "Terrain Adaptable",
            description: "Eco-friendly foundation system suitable for mountains, deserts, and forests."
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "Smart Integrated",
            description: "Complete smart home control systems for lighting, climate, and security."
        },
        {
            icon: <Sun className="w-8 h-8" />,
            title: "Energy Efficient",
            description: "Ultra-low energy consumption with solar power system compatibility."
        }
    ];

    const specs = [
        { label: "Length", value: "7.5 Ft" },
        { label: "Width", value: "4.5 Ft" },
        { label: "Height", value: "4.5 Ft" },
        { label: "Structure Life", value: "30+ Years" },
        { label: "Glass Type", value: "Low-E Tempered" },
        { label: "Support", value: "4-Point Base" }
    ];

    const lightingFeatures = [
        { icon: <Smartphone />, label: "Blue Ambient LED" },
        { icon: <Lightbulb />, label: "Mirror Ring Light" },
        { icon: <Zap />, label: "Smart Control Panel" },
        { icon: <Battery />, label: "Energy Efficient" }
    ];

    const utilities = [
        {
            title: "Water & Storage",
            icon: <Droplet />,
            desc: "Integrated water purification and storage systems for off-grid living."
        },
        {
            title: "Climate Control",
            icon: <Thermometer />,
            desc: "Advanced heating and insulation engineered for extreme environments."
        },
        {
            title: "Rapid Deployment",
            icon: <Clock />,
            desc: "Delivered fully finished; installation readiness within 2 hours."
        }
    ];

    return (
        <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-start overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Models/sleeping-pod-blue.jpeg"
                        alt="Sleeping Pod Hero"
                        className="w-full h-full object-cover brightness-[0.75]"
                    />
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-premium-serif tracking-tight">
                            Sleeping Pod Series
                        </h1>
                        <p className="text-xl text-white/90 mb-8 font-light max-w-lg leading-relaxed">
                            Movable prefabricated sanctuary designed for panoramic nature views and advanced recovery. <span className="text-amber-500 font-bold underline decoration-amber-500/30 underline-offset-4">Tailor every detail</span> to your hospitality or personal needs.
                        </p>
                        <Link to="/contact">
                            <button
                                onClick={() => trackEnquiryIntent('Sleeping Pod')}
                                className="bg-sky-500 hover:bg-sky-600 text-white font-bold h-14 px-10 rounded-xl text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(14,165,233,0.4)] mt-4 flex items-center gap-3 group"
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
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/20 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                            <Home className="text-sky-500 w-5 h-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-sky-500 font-premium-serif tracking-tight leading-none">
                            Technical Layout
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                        {[
                            { src: "/Models/sleeping-pod-blue.jpeg", label: "Smart Ambient" },
                            { src: "/Models/sleeping-pod-interior.jpeg", label: "Interior Comfort" },
                            { src: "/Models/sleeping-pod-4.jpeg", label: "Compact Design" },
                            { src: "/Models/sleeping-pod-green.jpeg", label: "Forest Ready" },
                            { src: "/Models/sleeping-pod-interior-1.png", label: "Panoramic View" },
                            { src: "/Models/red-interior.jpeg", label: "Premium Interior" },
                            { src: "/Models/sleeping-pods.jpeg", label: "Modular Units" },
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
                                    <p className="text-sky-50 font-bold text-[10px] md:text-xs drop-shadow-lg uppercase tracking-wider">{item.label}</p>
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
                                <h3 className={`text-2xl font-premium-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Size Specifications</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {specs.map((spec, i) => (
                                        <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'} transition-all hover:border-sky-500/50 group`}>
                                            <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{spec.label}</p>
                                            <p className={`text-xl font-bold ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>{spec.value}</p>
                                        </div>
                                    ))}
                                    <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'}`}>
                                        <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Electrical</p>
                                        <p className={`text-xl font-bold ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>BIS Certified</p>
                                    </div>
                                </div>
                            </div>

                            {/* Infrastructure & Setup */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500 border border-sky-500/20">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Integrated Systems</h3>
                                </div>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 p-8 rounded-[2.5rem] border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}>
                                    {utilities.map((u, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-500 shrink-0 mt-0.5">
                                                {u.icon}
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
                                    <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500 border border-sky-500/20">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Advantages</h3>
                                </div>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 p-8 rounded-[2.5rem] border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}>
                                    {[
                                        "Rapid installation (under 2 hours)",
                                        "Mobile and relocatable anytime",
                                        "Stainless steel skeleton frame",
                                        "Aluminium veneer outer shell",
                                        "Eco-friendly terrain adaptability",
                                        "Double-layer Low-E glass",
                                        "Smart control integration",
                                        "Prefabricated integrated bathroom"
                                    ].map((adv, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-500 shrink-0">
                                                <ShieldCheck className="w-3 h-3" />
                                            </div>
                                            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{adv}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:col-span-5 space-y-8 mt-12 lg:mt-0">

                            {/* Technical Benefits Card */}
                            <div className={`p-8 md:p-10 rounded-[3rem] border h-full ${isDark ? 'bg-gray-900/50 border-gray-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]' : 'bg-white border-gray-100 shadow-xl'}`}>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 border border-sky-500/20">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-2xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Architecture</h3>
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { icon: <Clock />, text: "Construction cycle: 30-60 days" },
                                        { icon: <Zap />, text: "Immediate installation readiness" },
                                        { icon: <Sun />, text: "Solar power system compatibility" },
                                        { icon: <Droplets />, text: "Water purification integration" },
                                        { icon: <Thermometer />, text: "100mm polyurethane insulation" },
                                        { icon: <Layers />, text: "Simple four-point support foundation" },
                                        { icon: <Maximize />, text: "Complete relocatability anytime" }
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-5 group">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isDark ? 'bg-sky-900/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-white' : 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white'}`}>
                                                {benefit.icon}
                                            </div>
                                            <p className={`text-sm leading-tight pt-2.5 ${isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'} transition-colors`}>
                                                {benefit.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-16 pt-10 border-t border-gray-800/50">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500">
                                            <Lightbulb className="w-5 h-5" />
                                        </div>
                                        <h3 className={`text-xl font-premium-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Lighting Systems</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {lightingFeatures.map((item, i) => (
                                            <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border border-transparent transition-all duration-300 hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:scale-[1.02] ${isDark ? 'bg-gray-800/40 text-gray-400 hover:bg-gray-800/60' : 'bg-gray-50 text-gray-600 hover:bg-white'}`}>
                                                {React.cloneElement(item.icon, { size: 16, className: "text-sky-500 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" })}
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
                <div className="absolute inset-0 z-0 opacity-40">
                    <LightPillar
                        topColor="#0EA5E9"
                        bottomColor="#38BDF8"
                        intensity={1.3}
                        rotationSpeed={0.5}
                        glowAmount={0.005}
                        pillarWidth={4.0}
                        pillarHeight={0.35}
                        noiseIntensity={0.4}
                        pillarRotation={20}
                        interactive={false}
                        mixBlendMode="screen"
                        quality="medium"
                    />
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-5xl md:text-7xl font-premium-serif font-bold mb-8">Secure your sanctuary.</h2>
                    <p className="text-2xl text-gray-400 mb-10">Experience the future of rest in any landscape.</p>
                    <Link to="/contact">
                        <button
                            onClick={() => trackEnquiryIntent('Sleeping Pod')}
                            className="bg-sky-500 text-white font-bold h-16 px-12 rounded-full text-xl hover:bg-sky-400 transition-all transform hover:scale-105 shadow-2xl shadow-sky-500/20 flex items-center gap-4 mx-auto group"
                        >
                            Enquire Now
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </button>
                    </Link>
                </div>
            </section>

            <Footer accentColor="sky" />

            {/* Full Screen Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-white hover:text-sky-500 transition-colors"
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

export default SleepingPod;
