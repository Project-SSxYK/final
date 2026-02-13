import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronRight, ChevronLeft, Check, Play, Pause, Facebook, Instagram, Linkedin, Youtube, MessageCircle, Droplets, Clock, Maximize, Thermometer, Zap, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useTheme } from "../../contexts/ThemeContext";
import { useMousePosition } from "../../hooks/useLiquidGlass";
import LiquidGlassModelCard from "./LiquidGlassModelCard";
import MakeCircularCarousel from "../ui/MakeCircularCarousel";
import LightPillar from '../ui/LightPillar';

import axios from 'axios';

const trackEnquiryIntent = async (modelName) => {
  try {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/notify-enquiry?model_name=${encodeURIComponent(modelName)}`);
  } catch (err) {
    // Fail silently
  }
};

// --- Hero Slideshow Data ---
const heroSlides = [
  {
    id: 1,
    type: 'video',
    src: '/Videos/v007-drone.mp4',
    title: 'Model V007',
    description: 'Luxury Living Elevated.',
  },
  {
    id: 2,
    type: 'video',
    src: '/Videos/v009-other-shot.mp4',
    title: 'Model V009',
    description: 'Futuristic Architecture in Harmony.',
  },
  {
    id: 3,
    type: 'video',
    src: '/Videos/c-cabin-upper-drone-shot.mp4',
    title: 'C Cabin Series',
    description: 'Compact Luxury, Infinite Possibilities.',
  },
];

const modelsList = [
  { name: "V007 Cabin", href: "/v007-cabin" },
  { name: "V008 Cabin", href: "/v008-cabin" },
  { name: "V009 Cabin", href: "/v009-cabin" },
  { name: "Sleeping Pod", href: "/sleeping-pod" },
  { name: "Dome House", href: "/dome-house" },
  { name: "C Double Cabin", href: "/c-cabin" },
];

// --- Navbar Component ---
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", isDropdown: true },
    { name: "Technology", href: "/#tech" },
    { name: "About Us", href: "/#about" },
  ];

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const shouldShowBg = !isHomePage || isScrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${shouldShowBg ? 'bg-black/80 backdrop-blur-md h-20' : 'bg-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo Section */}
        <a href="/" className="flex items-center group gap-3">
          <img
            src="/logo.png"
            alt="VAIGA Logo"
            className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_8px_rgba(250,169,22,0.3)] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-premium-serif font-black tracking-[0.2em] text-white leading-none">VAIGA</span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-amber-500 uppercase leading-none mt-1">CREATIVE</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.isDropdown ? (
              <div key={link.name} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  className="flex items-center gap-1 text-sm font-bold text-gray-100 hover:text-white transition-colors group"
                >
                  {link.name}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180 text-amber-500' : ''}`} />
                </button>

                <AnimatePresence>
                  {isProductsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      onMouseLeave={() => setIsProductsDropdownOpen(false)}
                      className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden py-2"
                    >
                      {modelsList.map((model) => (
                        <Link
                          key={model.name}
                          to={model.href}
                          className="block px-6 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-between group"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          {model.name}
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-500" />
                        </Link>
                      ))}
                      <div className="border-t border-white/5 mt-2 pt-2">
                        <a
                          href="/#models"
                          className="block px-6 py-3 text-xs font-bold text-amber-500 uppercase tracking-widest hover:text-amber-400 transition-colors"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          Explore All Models
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-gray-100 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          <Link to="/contact">
            <Button variant="default" className="rounded-full px-6 py-2 h-auto text-sm font-bold bg-orange-600 text-white hover:bg-orange-700 border-none transition-all shadow-lg hover:shadow-orange-500/30">
              Contact Us
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="z-50 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 h-screen flex flex-col items-center justify-center space-y-6 pt-20 md:hidden bg-black text-white z-40 overflow-y-auto"
            >
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col items-center w-full">
                  {link.isDropdown ? (
                    <div className="flex flex-col items-center w-full">
                      <button
                        onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                        className="text-2xl font-medium text-white flex items-center gap-2"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isProductsDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col items-center space-y-4 mt-4 overflow-hidden"
                          >
                            {modelsList.map((model) => (
                              <Link
                                key={model.name}
                                to={model.href}
                                className="text-lg text-gray-400 hover:text-white transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {model.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-2xl font-medium text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full px-12 pt-4">
                <Button className="rounded-full py-6 text-lg bg-orange-600 text-white hover:bg-orange-700 w-full">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// --- Landing Page Contact Section ---


// --- Hero Slideshow Component ---
const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollY } = useScroll();
  const { isDark } = useTheme();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-start justify-center bg-black">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {currentSlideData.type === 'video' ? (
            <video
              src={currentSlideData.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-75"
            />
          ) : (
            <img
              src={currentSlideData.src}
              alt={currentSlideData.title}
              className="w-full h-full object-cover brightness-75"
              fetchpriority="high"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <motion.div
        className="z-10 px-6 max-w-7xl mx-auto w-full relative"
        style={{ opacity }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-premium-serif font-bold tracking-tighter text-white mb-4 drop-shadow-lg">
              {currentSlideData.title}
            </h1>
            <p className="text-lg md:text-2xl font-normal text-white/90 max-w-2xl leading-relaxed">
              {currentSlideData.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="pt-10"
        >
          <Link to="/contact">
            <Button
              onClick={() => trackEnquiryIntent('General/Hero')}
              className="rounded-full px-12 py-7 text-lg font-bold tracking-wide uppercase bg-[#C5A028] hover:bg-[#D4AF37] text-white border-none shadow-[0_0_20px_rgba(197,160,40,0.3)] transition-all transform hover:scale-105"
            >
              Enquiry
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Right Slide Counter & Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex flex-col items-end gap-4">
        <div className="flex items-baseline gap-2 text-white font-mono">
          <span className="text-4xl font-light">0{currentSlide + 1}</span>
          <span className="text-xl text-gray-500">/ 0{heroSlides.length}</span>
        </div>

        {/* Progress Bar/Indicators */}
        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <div
              key={index}
              className={`h-1 transition-all duration-300 ${currentSlide === index ? 'w-12 bg-white' : 'w-4 bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};



// --- Model Showcase Component ---
const ModelShowcase = () => {
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useTheme();

  const demoModels = [
    {
      id: 1,
      name: "V007",
      tagline: "The Future of Space Capsule Living",
      description: "Our flagship V007 model combines sci-fi aesthetics with luxury comfort. Featuring panoramic views and smart glass technology.",
      image_url: "/Models/v007.jpeg",
      link: "/v007-cabin",
      is_new: false,
      specs: ["Panoramic View", "Smart Glass"]
    },
    {
      id: 2,
      name: "V008",
      tagline: "Elevated Living Experience",
      description: "A vertical masterpiece of modular engineering. The V008 offers dual-level luxury with an integrated sky deck, perfect for high-end hospitality and private sanctuaries.",
      image_url: "/Models/v008-.jpeg",
      link: "/v008-cabin",
      is_new: false,
      specs: ["Dual Level", "Sky Deck"]
    },
    {
      id: 3,
      name: "V009",
      tagline: "The Future of Remote Work",
      description: "Our professional-grade V009 satellite office is designed for peak productivity. Featuring ergonomic spatial design, enterprise-grade connectivity, and distraction-free acoustics.",
      image_url: "/Models/v009.jpeg",
      link: "/v009-cabin",
      is_new: false,
      specs: ["Fiber Ready", "Pro Acoustics"]
    },
    {
      id: 4,
      name: "Sleeping Pods",
      tagline: "The Ultimate Rest Experience",
      description: "Engineered for deep recovery and complete isolation. Our Sleeping Pods feature advanced acoustic dampening and customizable sleep environments for the ultimate rest.",
      image_url: "/Models/sleeping-pod.jpeg",
      link: "/sleeping-pod",
      is_new: false,
      specs: ["Soundproof", "Smart Lighting"]
    },
    {
      id: 5,
      name: "Dome House",
      tagline: "Panoramic. Geometric. Limitless.",
      description: "The Dome House series offers an unparalleled 360-degree living experience. Designed with geodesic precision, it provides an organic, spacious feel while remaining fully off-grid capable.",
      image_url: "/Models/1-dome-house.jpeg",
      link: "/dome-house",
      is_new: false,
      specs: ["360° Views", "Fast Install"]
    },
    {
      id: 6,
      name: "C Double Cabin",
      tagline: "Expanded Coastal Living",
      description: "A spacious double-unit configuration optimized for coastal environments. The C Double Cabin offers expansive living areas and reinforced weather resistance for seaside installations.",
      image_url: "/Models/double-c-cabin.jpeg",
      link: "/c-cabin",
      is_new: false,
      specs: ["Coastal Ready", "Double Unit"]
    }
  ];

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(`${backendUrl}/api/cabins`);
        setModels(response.data);
      } catch (error) {
        console.error("Failed to fetch cabins:", error);
        // Use demo models as fallback
        setModels(demoModels);
      } finally {
        setIsLoading(false);
      }
    };
    fetchModels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="models" className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-secondary/30'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className={`text-3xl md:text-5xl font-premium-serif font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Explore Our Capsules</h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'} max-w-2xl`}>Choose the configuration that fits your landscape. <span className="text-amber-500 font-bold">Every model is customizable</span> to your requirements.</p>
      </div>

      {isLoading ? (
        <div className="flex flex-col gap-16 px-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`w-full h-[600px] ${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-3xl animate-pulse`} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-12 px-6 max-w-7xl mx-auto">
          {models.map((model, index) => (
            <LiquidGlassModelCard key={model.id} model={model} isDark={isDark} index={index} />
          ))}
        </div>
      )}
    </section>
  );
};

const Features = () => {
  const { isDark } = useTheme();
  return (
    <section id="tech" className={`py-24 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-6xl font-premium-serif font-bold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Why Vaiga Creative Private Ltd?</h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'} max-w-3xl mx-auto mb-10`}>We redefine modular living through precision engineering, premium materials, and elite interior finishing that sets us apart from traditional construction.</p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`inline-flex items-center gap-4 px-8 py-4 rounded-full border-2 ${isDark ? 'bg-amber-500/5 border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.1)]' : 'bg-amber-50 border-amber-200'} mb-12`}
          >
            <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
            <p className={`text-lg md:text-xl font-bold italic ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
              “Manufactured complete, factory-installed, and delivered ready to use.”
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Feature - Luxury Interior & Electricals */}
          <div className={`md:col-span-2 ${isDark
            ? 'bg-gray-900 border-amber-500/30 shadow-[0_0_35px_rgba(245,158,11,0.15)]'
            : 'bg-[#F2F2F7] border-orange-300 shadow-[0_0_25px_rgba(249,115,22,0.3),0_0_50px_rgba(251,191,36,0.2)]'}
            rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden relative group border-2`}>
            <div className="relative z-10">
              <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-4 block">Infrastructure Excellence</span>
              <h3 className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Premium Build Quality</h3>
              <p className={`text-lg font-medium mb-8 ${isDark ? 'text-amber-500/80' : 'text-amber-600'}`}>Fully factory-integrated and ready for immediate deployment.</p>
              <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="flex items-start gap-2">
                  <Check className="text-emerald-500 w-5 h-5 shrink-0" />
                  <span>Vinyl Flooring / Fibre Cement Board</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-emerald-500 w-5 h-5 shrink-0" />
                  <span>1.5 Ton Voltas AC & Concealed Copper Lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-emerald-500 w-5 h-5 shrink-0" />
                  <span>Smart Auto-Movable Curtains</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-emerald-500 w-5 h-5 shrink-0" />
                  <span>Home Projector & Screen Wiring</span>
                </li>
              </ul>
              <div className={`mt-8 p-4 rounded-2xl ${isDark ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-100'} border inline-block`}>
                <p className="text-sm font-medium text-amber-600 italic">"All wiring is concealed PVC insulated copper for maximum safety."</p>
              </div>
            </div>
            <div className="mt-12 relative w-full h-[300px] rounded-2xl overflow-hidden shadow-inner group">
              <img
                src="/Models/main-features.png"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Premium Interior"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-8">
            {/* Washroom Card */}
            <div className={`${isDark
              ? 'bg-gray-800 border-amber-500/30 shadow-[0_0_35px_rgba(245,158,11,0.15)]'
              : 'bg-black border-orange-400 shadow-[0_0_25px_rgba(249,115,22,0.4),0_0_50px_rgba(251,191,36,0.3)]'}
              text-white rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden group h-full border-2`}>
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4">Washroom Interior</h3>
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-sm text-gray-300">Jaguar/Sara/Hindware Fittings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-sm text-gray-300">Wall Mounted WC & Vanity Box</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-sm text-gray-300">Exhaust Fan & Geyser Sockets</span>
                  </div>
                </div>
                <div className="mt-auto pt-6 opacity-30 group-hover:opacity-50 transition-opacity">
                  <Droplets size={48} className="text-emerald-400" />
                </div>
              </div>
              <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-emerald-900/10 to-transparent' : 'bg-gradient-to-br from-gray-900 to-transparent'} pointer-events-none`} />
            </div>

            {/* Installation Card */}
            <div className={`${isDark
              ? 'bg-gray-900 border-amber-500/30 shadow-[0_0_35px_rgba(245,158,11,0.15)]'
              : 'bg-white border-orange-300 shadow-[0_0_25px_rgba(249,115,22,0.2),0_0_40px_rgba(251,191,36,0.15)]'}
              rounded-[2.5rem] p-8 flex flex-col justify-center border-2 transition-all duration-500`}>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Rapid Deployment</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>30-40 days production time. Site installation ready in just 72 hours.</p>
              <div className="mt-4 flex items-center gap-2">
                <Clock className="text-amber-500 w-4 h-4" />
                <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Industry Leading Speed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: "Panoramic Glass",
              desc: "Double-layered tempered glass with rounded curvature for 180° views.",
              icon: <Maximize className="text-blue-500" />,
              glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] md:group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]",
              iconGlow: "shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            },
            {
              title: "Climate Proof",
              desc: "1.5T Voltas AC integrated with high-density thermal insulation.",
              icon: <Thermometer className="text-orange-500" />,
              glowColor: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] md:group-hover:shadow-[0_0_50px_rgba(249,115,22,0.3)]",
              iconGlow: "shadow-[0_0_15px_rgba(249,115,22,0.4)]"
            },
            {
              title: "Smart Living",
              desc: "Automated curtains, projector wiring, and intelligent power management.",
              icon: <Zap className="text-green-500" />,
              glowColor: "group-hover:shadow-[0_0_30_rgba(34,197,94,0.2)] md:group-hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]",
              iconGlow: "shadow-[0_0_15px_rgba(34,197,94,0.4)]"
            }
          ].map((feature, idx) => (
            <div key={idx} className={`p-10 rounded-[2.5rem] border ${isDark ? 'bg-gray-900/40 border-gray-800 hover:bg-gray-800/60' : 'bg-gray-50/50 border-gray-100 hover:bg-white'} transition-all duration-500 group relative ${feature.glowColor}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-transparent group-hover:border-inherit transition-all duration-300 ${isDark ? 'bg-gray-800' : 'bg-white'} ${feature.iconGlow}`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{feature.desc}</p>

              {/* Subtle background glow element for extra depth */}
              <div className={`absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl -z-10 ${idx === 0 ? 'bg-blue-500/5' : idx === 1 ? 'bg-orange-500/5' : 'bg-green-500/5'
                }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = ({ accentColor = "amber" }) => {
  const { isDark } = useTheme();

  const colorVariants = {
    amber: {
      text: "text-amber-500",
      hover: "hover:text-amber-400",
      border: "border-amber-500/20",
      bg: "bg-amber-500/5",
      glow: "shadow-[0_0_20px_rgba(245,158,11,0.1)]",
      support: "text-amber-500"
    },
    emerald: {
      text: "text-emerald-500",
      hover: "hover:text-emerald-400",
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/5",
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.1)]",
      support: "text-emerald-500"
    },
    rose: {
      text: "text-rose-500",
      hover: "hover:text-rose-400",
      border: "border-rose-500/20",
      bg: "bg-rose-500/5",
      glow: "shadow-[0_0_20px_rgba(244,63,94,0.1)]",
      support: "text-rose-500"
    },
    sky: {
      text: "text-sky-500",
      hover: "hover:text-sky-400",
      border: "border-sky-500/20",
      bg: "bg-sky-500/5",
      glow: "shadow-[0_0_20px_rgba(14,165,233,0.1)]",
      support: "text-sky-500"
    },
    violet: {
      text: "text-violet-500",
      hover: "hover:text-violet-400",
      border: "border-violet-500/20",
      bg: "bg-violet-500/5",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.1)]",
      support: "text-violet-500"
    },
    orange: {
      text: "text-orange-500",
      hover: "hover:text-orange-400",
      border: "border-orange-500/20",
      bg: "bg-orange-500/5",
      glow: "shadow-[0_0_20px_rgba(249,115,22,0.1)]",
      support: "text-orange-500"
    }
  };

  const theme = colorVariants[accentColor] || colorVariants.amber;

  return (
    <footer className={`border-t border-white/10 pt-20 pb-0 mt-0 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column - Left Side */}
          <div className="md:col-span-12 lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="VAIGA Logo"
                className="h-24 md:h-28 w-auto object-contain"
              />
              <div className="flex flex-col text-left">
                <span className={`text-2xl md:text-3xl font-premium-serif font-black tracking-[0.2em] ${theme.text} leading-none`}>VAIGA</span>
                <span className={`text-xs md:text-sm font-bold tracking-[0.4em] ${theme.text} uppercase leading-none mt-2`}>CREATIVE</span>
              </div>
            </div>

            <p className={`text-lg leading-relaxed max-w-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Want to disrupt the housing problem? We're talking next-level living spaces to make your customers' jaws drop. Ready to dominate?
            </p>

            <div className="pt-4">
              <p className={`text-sm mb-4 font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Follow us on:</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/vaigaprefab7" target="_blank" rel="noopener noreferrer" className={`hover:text-sky-500 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}><Facebook className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/vaigaprefab7" target="_blank" rel="noopener noreferrer" className={`hover:text-pink-500 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}><Instagram className="w-5 h-5" /></a>
                <a href="https://www.youtube.com/@VaigaCreative" target="_blank" rel="noopener noreferrer" className={`hover:text-red-600 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}><Youtube className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className={`hover:text-sky-500 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}><Linkedin className="w-5 h-5" /></a>
                <a href="https://wa.me/917428662624" target="_blank" rel="noopener noreferrer" className={`hover:text-green-500 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          {/* Links Section - Right Side */}
          <div className="md:col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className={`font-bold text-lg mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
              <ul className={`space-y-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><Link to="/" className={`${theme.hover} transition-colors`}>Home</Link></li>
                <li><a href="/#models" className={`${theme.hover} transition-colors`}>Models</a></li>
                <li><a href="/#tech" className={`${theme.hover} transition-colors`}>Technology</a></li>
                <li><a href="/#about" className={`${theme.hover} transition-colors`}>About Us</a></li>
                <li><Link to="/contact" className={`${theme.hover} transition-colors`}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className={`font-bold text-lg mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Products</h4>
              <ul className={`space-y-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {modelsList.map((model) => (
                  <li key={model.name}>
                    <Link to={model.href} className={`${theme.hover} transition-colors`}>
                      {model.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className={`font-bold text-lg mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Resources</h4>
              <ul className={`space-y-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className={`${theme.hover} transition-colors`}>News</a></li>
                <li><a href="#" className={`${theme.hover} transition-colors`}>FAQs</a></li>
              </ul>
            </div>

            {/* Email Section */}
            <div className="md:col-span-2 lg:col-span-1">
              <h4 className={`font-bold text-lg mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Inquiries</h4>
              <div className="space-y-4">
                <div className={`p-4 rounded-xl border ${isDark ? `${theme.bg} ${theme.border} ${theme.glow}` : 'bg-white border-gray-100 shadow-sm'} transition-all hover:bg-opacity-10 group`}>
                  <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${theme.text} opacity-70`}>Official Mail</p>
                  <a href="mailto:vaigaprefab@gmail.com" className={`flex items-center gap-2 ${theme.text} font-bold ${theme.hover} break-all transition-colors group`}>
                    <Mail className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-xs">vaigaprefab@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Office */}
            <div className="md:col-span-3 lg:col-span-5 border-t border-white/5 pt-8 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
              <div className="lg:col-span-3">
                <h4 className={`font-bold text-lg mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Head Office</h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-md`}>
                  Plot No.254, Sakrawati Tahlaan Marg, Nangli Sakrawati, Near Delhi Government Dispensary, New Delhi - 110043
                </p>
              </div>
              <div className="lg:col-span-2">
                <h4 className={`font-bold text-lg mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Support Lines</h4>
                <div className="grid grid-cols-2 gap-2">
                  <span className={`${theme.support} font-bold text-sm`}>+91 74286 62624</span>
                  <span className={`${theme.support} font-bold text-sm`}>+91 98719 72668</span>
                  <span className={`${theme.support} font-bold text-sm`}>+91 92116 63446</span>
                  <span className={`${theme.support} font-bold text-sm`}>+91 93191 87529</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} text-sm flex flex-col md:flex-row justify-between items-center ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          <p>© 2026 Vaiga Creative Private Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className={`${theme.hover} transition-colors`}>Privacy Policy</a>
            <a href="#" className={`${theme.hover} transition-colors`}>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const AboutSection = () => {
  const { isDark } = useTheme();
  return (
    <section id="about" className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <span className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-4 block">About Us</span>
          <h2 className={`text-4xl md:text-5xl font-premium-serif font-bold mb-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Pioneering the Future of Living.
          </h2>
          <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We are the first manufacturer in India established in 2023 by <span className="text-amber-500 font-bold drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">Vaiga Creative Pvt Ltd.</span> Located in Delhi, we have emerged as a renowned manufacturer of Capsule Houses, Dome Houses, Portable Cabins, Bunk Houses, and bespoke interior design solutions. We have built a reputation for providing excellent after-sales services, easy payment modes, and superior quality products at very competitive costs.
          </p>
          <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Our extensive product range includes Dome Houses, Capsule Houses, Security Cabins, Farm Houses, Sanitation Cabins, Site Accommodation Bunkhouses, and Modular Homes, apart from a range of container offices. Every product is subject to stringent quality checks to ensure durability and long service life.
          </p>
          <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Leveraging our manufacturing strength, we have the capability of customizing our products as per the specific requirements of our clients. We use high-quality raw materials and eco-friendly techniques, ensuring our products are a synonym of quality and safety.
          </p>
          <div className="mt-12 pl-8 border-l border-amber-500/40 relative group">
            <div className="absolute left-0 top-0 h-0 w-0.5 bg-amber-500 transition-all duration-700 group-hover:h-full" />
            <p className={`text-lg md:text-xl font-premium-serif italic leading-relaxed ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
              "Ensuring every innovation is fueled by clean technology and sustainable manufacturing practices for a flawless future."
            </p>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative h-[400px] w-full flex items-center justify-center overflow-visible">
          <MakeCircularCarousel
            images={[
              { src: "/Models/v007.jpeg", alt: "V007 Space Capsule" },
              { src: "/Models/double-c-cabin.jpeg", alt: "Double C Cabin" },
              { src: "/Models/v009.jpeg", alt: "V009 Luxury Pod" },
              { src: "/Models/1-dome-house.jpeg", alt: "Modern Dome House" },
              { src: "/Models/sleeping-pod.jpeg", alt: "Sleeping Pod" }
            ]}
            radius={window.innerWidth < 768 ? 160 : 220}
            itemWidth={window.innerWidth < 768 ? 140 : 190}
            itemHeight={window.innerWidth < 768 ? 190 : 250}
            perspective={1200}
            rotationSpeed={0.12}
          />
        </div>
      </div>
    </section>
  );
};


// --- Main Page Component ---
export default function LandingPage() {
  const { isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Small delay to ensure the DOM is painted and content is loaded
          const timer = setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
          return () => clearTimeout(timer);
        }
      }
    };

    // Check on mount and whenever the hash changes
    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, [location]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-white text-foreground'} selection:bg-black selection:text-white`}>
      <Navbar />
      <HeroSlideshow />

      <ModelShowcase />
      <Features />
      <AboutSection />
      <section className={`py-40 ${isDark ? 'bg-black' : 'bg-black'} text-white text-center px-6 relative overflow-hidden`}>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-premium-serif font-bold tracking-tight mb-8">Redefine how you live.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/#models">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-10 py-6 text-lg">
                Explore Models
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                onClick={() => trackEnquiryIntent('Expert Consultation')}
                variant="outline" className="border-gray-700 text-white hover:bg-gray-900 rounded-full px-10 py-6 text-lg bg-transparent"
              >
                Speak to an Expert
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
