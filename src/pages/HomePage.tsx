import { Link } from "react-router-dom";
import heroVideo from "@/assets/hero-video.mp4";

const HomePage = () => (
  <section className="relative min-h-[80vh] flex items-center overflow-hidden">
    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={heroVideo} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-agro-overlay" />
    <div className="relative container mx-auto px-4 py-20">
      <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-2">
        Anas Agro <span className="italic text-accent">Services</span>
      </h1>
      <p className="text-lg md:text-xl text-white opacity-90 mb-8 max-w-lg">
        Empowering Agriculture with Quality & Trust
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          to="/services"
          className="inline-block px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:brightness-110 transition"
        >
          Our Services
        </Link>
        <a
          href="https://poe.com/Agrobot732"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border-2 border-accent text-accent font-bold text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--accent),0.4)]"
        >
          🤖 Book Services
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

export default HomePage;
