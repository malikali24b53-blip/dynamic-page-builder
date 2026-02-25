import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import heroBg from "@/assets/hero-bg.jpg";

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Boom animation fires immediately — no waiting for video
    setLoaded(true);

    // Eagerly play video in background
    const v = videoRef.current;
    if (v) {
      v.load();
      v.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Static poster shown instantly */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Video loads on top when ready */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={heroBg}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ imageRendering: "auto", filter: "brightness(1.05) contrast(1.02)" }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-agro-overlay" />

      {/* Flying Birds */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Bird SVG paths - simple silhouettes */}
        <svg className="absolute animate-bird-1 w-6 h-6 md:w-8 md:h-8 text-white/60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 12c3-3 6-5 10-5s7 2 10 5c-3-1-6-2-10-2s-7 1-10 2z"/>
        </svg>
        <svg className="absolute animate-bird-2 w-5 h-5 md:w-7 md:h-7 text-white/50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 12c3-3 6-5 10-5s7 2 10 5c-3-1-6-2-10-2s-7 1-10 2z"/>
        </svg>
        <svg className="absolute animate-bird-3 w-4 h-4 md:w-6 md:h-6 text-white/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 12c3-3 6-5 10-5s7 2 10 5c-3-1-6-2-10-2s-7 1-10 2z"/>
        </svg>
        <svg className="absolute animate-bird-4 w-5 h-5 text-white/35" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 12c3-3 6-5 10-5s7 2 10 5c-3-1-6-2-10-2s-7 1-10 2z"/>
        </svg>
        <svg className="absolute animate-bird-5 w-3 h-3 md:w-5 md:h-5 text-white/45" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 12c3-3 6-5 10-5s7 2 10 5c-3-1-6-2-10-2s-7 1-10 2z"/>
        </svg>
      </div>

      {/* Hero Content with Boom Reveal */}
      <div
        className={`relative container mx-auto px-4 py-20 transition-all duration-700 ease-out ${
          loaded
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-8"
        }`}
      >
        <h1
          className={`font-heading text-4xl md:text-6xl font-bold text-white mb-2 transition-all duration-700 delay-200 ease-out ${
            loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-90"
          }`}
        >
          Anas Agro <span className="italic text-accent">Services</span>
        </h1>
        <p
          className={`text-lg md:text-xl text-white opacity-90 mb-8 max-w-lg transition-all duration-700 delay-400 ease-out ${
            loaded ? "opacity-90 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Empowering Agriculture with Quality & Trust
        </p>
        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ease-out ${
            loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
          }`}
        >
          <Link
            to="/services"
            className="inline-block px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:brightness-110 transition"
          >
            Our Services
          </Link>
          <a
            href="https://wa.me/923466539820?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20book%20your%20agro%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border-2 border-accent text-accent font-bold text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--accent),0.4)]"
          >
            📞 Book Services
          </a>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 rounded-full border-2 border-accent text-accent font-bold text-sm hover:bg-accent hover:text-accent-foreground transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
