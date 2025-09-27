import { Hero } from './Hero';


export default function BackgroundVideo() {
  return (
    <div className=" h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/40">
        {/* <h1 className="text-5xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg">This is a background video demo in React.</p> */}
        <Hero />
      </div>
    </div>
  );
}
