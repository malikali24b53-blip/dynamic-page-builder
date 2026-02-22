import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HomePage = () => (
  <section
    className="relative min-h-[80vh] flex items-center bg-cover bg-center"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="absolute inset-0 bg-agro-overlay" />
    <div className="relative container mx-auto px-4 py-20">
      <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-2">
        Anas Agro <span className="italic text-accent">Services</span>
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground opacity-90 mb-8 max-w-lg">
        Empowering Agriculture with Quality & Trust
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          to="/services"
          className="inline-block px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:brightness-110 transition"
        >
          Our Services
        </Link>
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
