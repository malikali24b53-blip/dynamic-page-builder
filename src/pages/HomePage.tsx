import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroVideo from "@/assets/hero-video.mp4";

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger boom animation after a tiny delay for mount
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Video Background - preload for instant playback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        onCanPlayThrough={(e) => (e.currentTarget as HTMLVideoElement).play()}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-agro-overlay" />

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
