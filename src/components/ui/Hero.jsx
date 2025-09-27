
const DiamondIcon = () => (
    <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 1.16l-8.5 8.5L10 18.16l8.5-8.5L10 1.16zM10 0l10 10L10 20 0 10 10 0z" />
    </svg>
);

const ExploreCard = () => {
    return (
        <div className="glass-ocean bg-opacity-10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
            <div className="mb-4">
                <span className="text-white font-semibold">Explore Ocean</span>
                <div className="flex items-center -space-x-3">
                  
                </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden">
            <img src="/shark.jpg" alt="hello" srcset="" />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
                {/* You can replace this div with a video or image component */}
                 <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <button className="bg-white/30 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/50 transition-all">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

// The main hero section containing the title and the explore card
const Hero = () => {
    return (
        <div className="relative pt-50 mr-10 text-white">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side Content */}
                <div className="text-center md:text-left">
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full py-1 px-4 mb-6">
                        <DiamondIcon />
                        <span className="text-sm font-medium">Welcome To Shark-Sphere</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4 text-shadow-lg">
                        Let's Dive
                    </h1>
                    <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0 mb-8">
                       Discover where sharks thrive using cutting-edge satellite data and machine learning for ocean conservation
                    </p>
                    <a href="https://www.youtube.com/watch?v=ukiGFmZ32YA&list=PL6QREj8te1P4-o8tvI3RF5NOEe0Amzd30" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform duration-300 inline-block hover:scale-105">
                        Get Started Now!
                    </a>
                </div>
                
                {/* Right Side Card */}
                <div className="w-full max-w-md mx-auto ml-50">
                    <ExploreCard />
                </div>
            </div>
        </div>
    );
};
export { Hero };