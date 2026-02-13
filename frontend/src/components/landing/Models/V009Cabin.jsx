import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ChevronLeft,
    ShieldCheck,
    Zap,
    Maximize,
    Layers,
    Thermometer,
    Home,
    Monitor,
    Mountain,
    Anchor as Waterfront,
    Trees,
    Eye,
    Cpu,
    Box,
    X,
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

const V009Cabin = () => {
    const { isDark } = useTheme();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <Eye className="w-8 h-8" />,
            title: "Panoramic Glass Façade",
            description: "Advanced glass integration for seamless outdoor connection."
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "Smart Infrastructure",
            description: "Integrated smart electrical and connectivity systems."
        },
        {
            icon: <Thermometer className="w-8 h-8" />,
            title: "High Insulation",
            description: "Superior thermal performance for all-season comfort."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Weather-Resistant",
            description: "Advanced materials for extreme durability."
        },
        {
            icon: <Maximize className="w-8 h-8" />,
            title: "Spatial Optimization",
            description: "Next-gen layout designed for luxury hospitality."
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Modular Fast-Build",
            description: "Prefabricated construction for quick deployment."
        }
    ];

    const specs = [
        { label: "Length", value: "28 Feet" },
        { label: "Width", value: "9.2 Feet" },
        { label: "Height", value: "9.5 Feet" },
        { label: "Glass", value: "Smart Glass" },
        { label: "Mobility", value: "Relocatable" }
    ];

    const showCaseImages = [
        { src: "/Models/v009.jpeg", label: "Hero Perspective" },
        { src: "/Models/v009-interior-living.jpeg", label: "Luxury Living" },
        { src: "/Models/v009-interior-bed.jpeg", label: "Master Bedroom" },
        { src: "/Models/v009-washroom.jpeg", label: "Smart Washroom" },
        { src: "/Models/v009-1.jpeg", label: "Side View" },
        { src: "/Models/v009-2.jpeg", label: "Front Facade" },
        { src: "/Models/v009-3.jpeg", label: "Angular Detail" },
        { src: "/Models/v009-4.jpeg", label: "Exterior Finish" }
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
                        className="w-full h-full object-cover brightness-[0.7]"
                    >
                        <source src="/Models/v009-other-shot.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-xl md:text-2xl font-bold text-rose-500 mb-2 font-premium-serif tracking-widest uppercase text-rose-500">
                            V009 Capsule Cabin
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-premium-serif tracking-tight leading-none">
                            Future of Luxury
                        </h2>
                        <p className="text-lg text-white/90 mb-8 font-light max-w-lg leading-relaxed">
                            A next-generation modular cabin featuring advanced exterior styling and smart glass integration.
                        </p>
                        <Link to="/contact">
                            <button
                                onClick={() => trackEnquiryIntent('V009 Cabin')}
                                className="bg-rose-500 hover:bg-rose-600 text-white font-bold h-10 px-8 rounded-lg text-sm transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(244,63,94,0.3)] mt-2 flex items-center gap-2 group"
                            >
                                Enquire Now
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Showcase Section */}
            <section className={`pt-12 pb-4 ${isDark ? 'bg-[#050505]' : 'bg-gray-50'}`}>
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex items-center justify-start gap-4 mb-8">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20">
                            <Box className="text-rose-500 w-4 h-4" />
                        </div>
                        <h2 className="text-xl font-bold text-rose-500 font-premium-serif tracking-tight">V009 Perspectives</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-8 gap-2">
                        {showCaseImages.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-lg border border-white/5"
                                onClick={() => setSelectedImage(item.src)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-2 left-2">
                                    <p className="text-rose-50 font-bold text-[9px] uppercase tracking-wider">{item.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Section */}
            <section className={`pt-4 pb-20 px-6 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column */}
                        <div className="lg:col-span-7 space-y-12">
                            {/* Specs */}
                            <div>
                                <h3 className={`text-2xl font-premium-serif font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Structural Specifications</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {specs.map((spec, i) => (
                                        <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100 shadow-sm'} transition-all hover:border-rose-500/50`}>
                                            <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-2 text-gray-500">{spec.label}</p>
                                            <p className={`text-xl md:text-2xl font-black ${isDark ? 'text-rose-400' : 'text-rose-600'}`}>{spec.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div>
                                <h3 className={`text-2xl font-premium-serif font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Features</h3>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-[2rem] border transition-all duration-500 ${isDark ? 'bg-gray-900/30 border-rose-500/30 shadow-[0_0_30px_rgba(244,63,94,0.15)]' : 'bg-white border-rose-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.05),0_0_20px_rgba(244,63,94,0.15)]'}`}>
                                    {features.map((f, i) => (
                                        <div key={i} className="flex gap-4 group">
                                            <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0 border border-rose-500/20 transition-transform duration-300 group-hover:scale-110">
                                                {React.cloneElement(f.icon, { className: "w-6 h-6" })}
                                            </div>
                                            <div>
                                                <p className="text-lg font-bold mb-1 group-hover:text-rose-500 transition-colors">{f.title}</p>
                                                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{f.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Terrains */}
                            <div>
                                <h3 className={`text-xl font-premium-serif font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Terrain Adaptability</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { icon: <Mountain />, label: "Mountains" },
                                        { icon: <Waterfront />, label: "Waterfront" },
                                        { icon: <Trees />, label: "Forests" }
                                    ].map((item, i) => (
                                        <div key={i} className={`flex flex-col items-center justify-center p-4 rounded-xl border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-white shadow-sm'}`}>
                                            <div className="text-rose-500 mb-2">{React.cloneElement(item.icon, { size: 20 })}</div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className={`p-8 rounded-[2.5rem] border h-full ${isDark ? 'bg-gray-900/50 border-gray-800 shadow-2xl' : 'bg-white border-gray-100 shadow-xl'}`}>
                                <h3 className={`text-xl font-premium-serif font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Applications</h3>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Premium Resort Suites",
                                        "Boutique Luxury Stays",
                                        "Smart Eco-Tourism Cabins",
                                        "Experience-Based Units"
                                    ].map((app, i) => (
                                        <div key={i} className="flex items-center gap-3 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                            <p className={`text-sm ${isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-600'}`}>{app}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-8 border-t border-gray-800/50">
                                    <h4 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Structural Build</h4>
                                    <ul className="space-y-4 mb-8">
                                        {["Factory Assembly", "Smart Infrastructure", "Energy Efficient"].map((t, i) => (
                                            <li key={i} className={`text-sm md:text-base font-medium flex items-center gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                <Zap className="w-5 h-5 text-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.4)]" /> {t}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.1)] ${isDark ? 'bg-rose-500/5 border-rose-500/20' : 'bg-rose-50 border-rose-100'}`}>
                                        <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-rose-200/80' : 'text-rose-800'}`}>
                                            Next-generation high-impact visual appeal for premium destinations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-black text-white text-center px-6 relative overflow-hidden">
                {/* LightPillar Background Effect */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <LightPillar
                        topColor="#F43F5E"
                        bottomColor="#E11D48"
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
                    <h2 className="text-4xl md:text-6xl font-premium-serif font-bold mb-6 leading-none">Redefine Luxury.</h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto">Experience the V009 high-impact architecture today.</p>
                    <Link to="/contact">
                        <button
                            onClick={() => trackEnquiryIntent('V009 Cabin')}
                            className="bg-rose-500 text-white font-bold h-14 px-10 rounded-full text-lg hover:bg-rose-400 transition-all transform hover:scale-105 shadow-2xl shadow-rose-500/20 flex items-center gap-4 mx-auto group"
                        >
                            Enquire Now
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </button>
                    </Link>
                </div>
            </section>

            <Footer accentColor="rose" />

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-6 right-6 text-white hover:text-rose-500 transition-colors"><X size={32} /></button>
                    <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src={selectedImage} className="max-w-full max-h-full object-contain rounded-xl" />
                </div>
            )}
        </div>
    );
};

export default V009Cabin;
