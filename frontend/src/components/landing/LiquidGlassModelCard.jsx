import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMousePosition } from '../../hooks/useLiquidGlass';

const LiquidGlassModelCard = ({ model, isDark, index }) => {
    const cardRef = useMousePosition();
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={cardRef}
            key={model.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`w-full rounded-[2.5rem] border-2 ${isDark
                    ? 'border-gray-800 bg-gray-900/50 hover:border-amber-500/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.2)]'
                    : 'border-white bg-white hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.3),0_0_50px_rgba(251,191,36,0.2)]'
                } overflow-hidden shadow-2xl flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group transition-all duration-500`}
        >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[400px] md:h-[500px] overflow-hidden relative">
                <img
                    src={model.image_url}
                    alt={model.name}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-90' : ''}`}
                />
                <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-black/10'} group-hover:bg-transparent transition-colors`} />
            </div>

            {/* Content Section */}
            <div className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center ${isEven ? 'items-start text-left' : 'items-start text-left md:items-end md:text-right'}`}>
                <div className="mb-4 w-full">
                    <div className={`flex items-center gap-4 mb-3 ${isEven ? '' : 'md:justify-end'}`}>
                        <span className="bg-amber-500/10 text-amber-500 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] animate-pulse-slow">
                            Customizable
                        </span>
                        <span className={`text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 ${isDark ? 'text-white' : 'text-black'}`}>
                            Series 0{index + 1}
                        </span>
                    </div>

                    <h3 className={`text-4xl md:text-6xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{model.name}</h3>
                    <p className={`text-lg font-bold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>{model.tagline}</p>
                </div>

                <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-lg`}>
                    {model.description}
                </p>

                <div className={`flex flex-wrap gap-3 mb-8 w-full ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                    {model.specs.map((spec, i) => (
                        <span
                            key={i}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-default
                                ${isDark
                                    ? 'bg-gray-800 text-gray-300 border-gray-700 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:text-white'
                                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(234,88,12,0.2)] hover:text-gray-900'
                                }`}
                        >
                            {spec}
                        </span>
                    ))}
                </div>

                <Link to={model.link || "#"} className={`flex items-center font-bold text-lg group/btn cursor-pointer ${isDark ? 'text-white' : 'text-gray-900'} transition-all duration-300 hover:translate-x-2`}>
                    View Configuration
                    <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                        <ChevronRight className="w-5 h-5" />
                    </span>
                </Link>
            </div>
        </motion.div>
    );
};

export default LiquidGlassModelCard;
