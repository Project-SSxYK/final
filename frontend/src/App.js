import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import axios from 'axios';
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./contexts/ThemeContext";

// Lazy load components for performance
const LandingPage = lazy(() => import("./components/landing/LandingPage"));
const ContactPage = lazy(() => import("./components/landing/ContactPage"));
const DomeHouse = lazy(() => import("./components/landing/Models/DomeHouse"));
const SleepingPod = lazy(() => import("./components/landing/Models/SleepingPod"));
const V007Cabin = lazy(() => import("./components/landing/Models/V007Cabin"));
const V009Cabin = lazy(() => import("./components/landing/Models/V009Cabin"));
const CCabin = lazy(() => import("./components/landing/Models/CCabin"));
const V008Cabin = lazy(() => import("./components/landing/Models/V008Cabin"));
const NotFoundPage = lazy(() => import("./components/landing/NotFoundPage"));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
      <span className="text-amber-500 font-premium-serif tracking-widest uppercase text-xs animate-pulse">VAIGA</span>
    </div>
  </div>
);

// Visit Tracker Component to detect page changes
const VisitTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const notifyVisit = async () => {
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/notify-visit`, {
          page: window.location.pathname,
          browser: navigator.userAgent
        });
      } catch (error) {
        // Silently fail in production
      }
    };
    notifyVisit();
  }, [location]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <VisitTracker />
        <div className="App">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/dome-house" element={<DomeHouse />} />
              <Route path="/sleeping-pod" element={<SleepingPod />} />
              <Route path="/v007-cabin" element={<V007Cabin />} />
              <Route path="/v009-cabin" element={<V009Cabin />} />
              <Route path="/c-cabin" element={<CCabin />} />
              <Route path="/v008-cabin" element={<V008Cabin />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
