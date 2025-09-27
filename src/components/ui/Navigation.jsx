const LogoIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <path d="M12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
        <path d="M12 14c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6zm0 4.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2-2z" fill="currentColor" opacity="0.6"/>
    </svg>
);

const Navigation = () => {
    const navLinks = ["Home", "About Us", "Page"];
    return (
        <header className="absolute top-5 left-0 right-0 z-50 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center space-x-2">
                    <LogoIcon />
                    <span className="text-2xl font-bold">Shark-Sphere</span>
                </div>
                <nav className="hidden md:flex items-center space-x-8 text-lg">
                    {navLinks.map(link => (
                        <a href="#" key={link} className="hover:text-cyan-400 transition-colors duration-300 group relative">
                            {link}
                            
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>
                <a href="#" className="hidden md:inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    Contact Us
                </a>
                <button className="md:hidden text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </header>
    );
};

export { Navigation };

