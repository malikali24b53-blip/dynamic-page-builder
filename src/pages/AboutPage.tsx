import { Link } from "react-router-dom";
import aboutBg from "@/assets/about-bg.jpg";

const AboutPage = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent font-medium mb-2">About</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
            Anas Agro <span className="italic text-accent">Services</span>
          </h2>
          <div className="section-divider mb-6 !mx-0" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            We provide reliable agricultural solutions, quality inputs,
            and modern farming services to support sustainable growth.
            Our mission is to empower farmers across Pakistan with the
            best tools, seeds, and expert advisory for higher yields and
            better livelihoods.
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
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img src={aboutBg} alt="Farmer with harvest" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutPage;
