import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Glass Navbar */}
      <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo Text */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold text-white">
              Anas <span className="text-accent">Agro</span> Services
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Phone */}
          <div className="hidden md:flex items-center gap-3 text-white">
            <Phone className="h-4 w-4 text-accent" />
            <span className="text-sm">0344 7542097</span>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10 ${
                  location.pathname === item.path
                    ? "text-accent bg-white/5"
                    : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-6 py-3 text-white">
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-sm">0344 7542097</span>
            </div>
          </div>
        )}
      </nav>

      {/* Logo below navbar */}
      <div className="bg-background flex justify-center py-4">
        <Link to="/">
          <img src={logo} alt="Anas Agro Services Logo" className="h-28 md:h-36 w-auto object-contain" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
