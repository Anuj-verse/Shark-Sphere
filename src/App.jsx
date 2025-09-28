import React, { useState } from 'react';
import { Navigation } from './components/ui/Navigation';
import BackgroundVideo from "./components/ui/BackgroundVideo";
import { Hero } from './components/ui/Hero';
import SharkTrackingDashboard from './components/SharkTrackingDashboard';
import ContactUs from './components/ContactUs';

export default function App() {
    const [showDashboard, setShowDashboard] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const handleHome = () => {
        setShowDashboard(false);
        setShowContact(false);
    };

    const handleContact = () => {
        setShowDashboard(false);
        setShowContact(true);
    };

    // Show dashboard (map) view - no navigation
    if (showDashboard) {
        return (
            <div className="min-h-screen bg-gray-900 font-sans">
                <SharkTrackingDashboard onBack={handleHome} />
            </div>
        );
    }

    // Show contact page - with navigation
    if (showContact) {
        return (
            <div className="min-h-screen bg-gray-900 font-sans relative overflow-hidden">
                {/* Background Image/Video */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>

                <div className="relative z-10 flex flex-col min-h-screen">
                    <Navigation onHome={handleHome} onContact={handleContact} />
                    <BackgroundVideo/>
                    <ContactUs />
                </div>
            </div>
        );
    }

    // Show landing page - with navigation
    return (
        <div className="min-h-screen bg-gray-900 font-sans relative overflow-hidden ">
            {/* Background Image/Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navigation onHome={handleHome} onContact={handleContact} />
                <BackgroundVideo/>
                <Hero onGetStarted={() => setShowDashboard(true)} />
            </div>
        </div>
    );
}
