import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { Navbar, Footer } from "./LandingPage";

// Contact Item Component
// Contact Item Component
const ContactItem = ({ icon, title, value, link, type }) => {
    const { isDark } = useTheme();

    const colorMap = {
        email: {
            dark: 'text-sky-400 group-hover:border-sky-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] bg-sky-400/5',
            light: 'text-sky-600 group-hover:border-sky-500 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.2)] bg-sky-500/5',
            textHover: isDark ? 'group-hover:text-sky-400' : 'group-hover:text-sky-600'
        },
        whatsapp: {
            dark: 'text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] bg-emerald-400/5',
            light: 'text-emerald-600 group-hover:border-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] bg-emerald-500/5',
            textHover: isDark ? 'group-hover:text-emerald-400' : 'group-hover:text-emerald-600'
        },
        call: {
            dark: 'text-amber-400 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] bg-amber-400/5',
            light: 'text-amber-600 group-hover:border-amber-500 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] bg-amber-500/5',
            textHover: isDark ? 'group-hover:text-amber-400' : 'group-hover:text-amber-600'
        },
        visit: {
            dark: 'text-rose-400 group-hover:border-rose-400 group-hover:shadow-[0_0_15px_rgba(251,113,133,0.3)] bg-rose-400/5',
            light: 'text-rose-600 group-hover:border-rose-500 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)] bg-rose-500/5',
            textHover: isDark ? 'group-hover:text-rose-400' : 'group-hover:text-rose-600'
        }
    };

    const styles = colorMap[type] || colorMap.call;

    return (
        <a
            href={link}
            className={`flex flex-col items-center justify-center p-4 transition-all duration-300 group cursor-pointer w-full h-full border-b md:border-b-0 md:border-r ${isDark ? 'bg-gray-900/40 border-gray-800 hover:bg-gray-800/60' : 'bg-gray-50 border-gray-100 hover:bg-white'} last:border-r-0`}
        >
            <div className={`mb-3 w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-500 relative
                ${isDark
                    ? `bg-gray-800 border-gray-700 ${styles.dark.split(' bg-')[0]}`
                    : `bg-white border-gray-200 ${styles.light.split(' bg-')[0]}`
                }`}
            >
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? styles.dark.split(' bg-')[1] : styles.light.split(' bg-')[1]}`} />
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                    {icon}
                </div>
            </div>
            <h3 className={`text-base font-premium-serif font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'} ${styles.textHover}`}>
                {title}
            </h3>
            <p className={`text-[11px] md:text-xs text-center font-medium leading-tight max-w-[180px] transition-colors duration-300 ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-900'}`}>
                {value}
            </p>
        </a>
    );
};

export default function ContactPage() {
    const { isDark } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const contactMethods = [
        {
            icon: <Mail className="w-4 h-4" />,
            title: "Email Us",
            value: "vaigaprefab@gmail.com",
            link: "mailto:vaigaprefab@gmail.com",
            type: "email"
        },
        {
            icon: <MessageCircle className="w-4 h-4" />,
            title: "WhatsApp Us",
            value: "+91 7428 662 624",
            link: "https://wa.me/917428662624",
            type: "whatsapp"
        },
        {
            icon: <Phone className="w-4 h-4" />,
            title: "Call Us",
            value: (
                <div className="flex flex-col items-center gap-1">
                    <span>+91 74286 62624</span>
                    <span>+91 98719 72668</span>
                    <span>+91 92116 63446</span>
                    <span>+91 93191 87529</span>
                </div>
            ),
            link: "tel:+917428662624",
            type: "call"
        },
        {
            icon: <MapPin className="w-4 h-4" />,
            title: "Visit Us",
            value: "Plot No.254, Sakrawati Tahlaan Marg, Nangli Sakrawati, Near Delhi Government Dispensary, New Delhi - 110043",
            link: "https://www.google.com/maps/search/Plot+No.254,+Sakrawati+Tahlaan+Marg,+Nangli+Sakrawati,+New+Delhi+110043",
            type: "visit"
        }
    ];

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
            <Navbar />

            {/* Main Content Area */}
            <div className="flex flex-col pt-20">
                {/* Hero Section */}
                <div className={`relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                    {/* Themed Background Pattern */}
                    <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
                        <div className={`absolute top-0 left-0 w-full h-full ${isDark ? 'bg-[radial-gradient(circle_at_20%_30%,#333_0%,transparent_50%)]' : 'bg-[radial-gradient(circle_at_20%_30%,#ddd_0%,transparent_50%)]'}`} />
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 w-full max-w-7xl px-8 py-12 flex flex-col items-center gap-12">
                        {/* Top: Text & Models Grid */}
                        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
                            {/* Left Side: Text */}
                            <div className="flex-1 text-center md:text-left">
                                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-premium-serif leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    Get In <span className="text-amber-500">Touch</span>
                                </h1>
                                <p className={`text-base md:text-lg max-w-xl leading-relaxed font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Experience the future of modular living. Reach out and our friendly team will be happy to assist you in bringing your vision to life.
                                </p>
                            </div>

                            {/* Right Side: Models Grid */}
                            <div className="flex-1 w-full max-w-xl">
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { name: "V007 Cabin", src: "/Models/v007.jpeg" },
                                        { name: "Dome House", src: "/Models/dome-house.jpeg" },
                                        { name: "Dome Sleeping Pod", src: "/Models/sleeping-pod.jpeg" },
                                        { name: "C Cabin", src: "/Models/double-c-cabin.jpeg" }
                                    ].map((model, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-500/10 h-32 md:h-40 group"
                                        >
                                            <img
                                                src={model.src}
                                                alt={model.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute bottom-2 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <p className="text-white text-[10px] font-medium uppercase tracking-wider">{model.name}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom: Contact Grid integrated into Hero */}
                        <div className={`grid grid-cols-2 md:grid-cols-4 w-full rounded-2xl overflow-hidden border ${isDark ? 'border-gray-800 bg-gray-900/40' : 'border-gray-100 bg-white shadow-lg'}`}>
                            {contactMethods.map((method, index) => (
                                <ContactItem key={index} {...method} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
