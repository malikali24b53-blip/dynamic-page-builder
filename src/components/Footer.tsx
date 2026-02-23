import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🌾</span>
          <span className="font-heading text-lg font-bold">
            Anas <span className="text-accent">Agro</span> Services
          </span>
        </div>
        <p className="text-sm opacity-80">
          Anas Agro Services, Empowering Agriculture since Years
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm opacity-80">
          <li><Link to="/" className="hover:text-accent transition-colors">▶ Home</Link></li>
          <li><Link to="/about" className="hover:text-accent transition-colors">▶ About Us</Link></li>
          <li><Link to="/services" className="hover:text-accent transition-colors">▶ Services</Link></li>
          <li><Link to="/products" className="hover:text-accent transition-colors">▶ Products</Link></li>
          <li><Link to="/contact" className="hover:text-accent transition-colors">▶ Contact</Link></li>
        </ul>
      </div>

      {/* Our Services */}
      <div>
        <h4 className="font-heading font-bold text-lg mb-4">Our Services</h4>
        <ul className="space-y-2 text-sm opacity-80">
          <li>🌿 Agricultural Supplies</li>
          <li>🚜 Farm Machinery Support</li>
          <li>💧 Irrigation Solutions</li>
          <li>📋 Crop Advisory</li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
        <ul className="space-y-3 text-sm opacity-80">
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent" /> 0346 6539820
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent" /> malikanas24b274@gmail.com
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" /> Punjab, Pakistan
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-agro-green text-center py-4 text-sm opacity-60">
      © 2026 Anas Agro Services. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
