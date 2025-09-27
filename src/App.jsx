import React from 'react';
import { Navigation } from './components/ui/Navigation';

import BackgroundVideo from "./components/ui/BackgroundVideo";


export default function App() {
    return (
        <div className="min-h-screen bg-gray-900 font-sans relative overflow-hidden">
            {/* Background Image/Video */}
            <div className="absolute inset-0 z-0">
                
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navigation />
                  <BackgroundVideo/>
                
            </div>
            
          
        </div>
    );
}
