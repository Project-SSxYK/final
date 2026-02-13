import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
    const { isDark } = useTheme();

    return (
        <div className={`min-h-screen flex items-center justify-center px-6 ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
            <div className="text-center max-w-lg">
                <h1 className="text-8xl md:text-9xl font-premium-serif font-bold text-amber-500 mb-4 leading-none">
                    404
                </h1>
                <h2 className={`text-2xl md:text-3xl font-premium-serif font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Page Not Found
                </h2>
                <p className={`text-lg mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/">
                        <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold h-12 px-8 rounded-xl text-sm transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Go Home
                        </button>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className={`font-bold h-12 px-8 rounded-xl text-sm transition-all transform hover:scale-105 flex items-center gap-2 border ${isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
