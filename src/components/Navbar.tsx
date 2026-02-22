import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

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
    <nav className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌾</span>
          <span className="font-heading text-xl font-bold text-primary-foreground">
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
                  : "text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Phone + Social */}
        <div className="hidden md:flex items-center gap-3 text-primary-foreground">
          <Phone className="h-4 w-4 text-accent" />
          <span className="text-sm">+92 330 123467</span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-agro-green pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-agro-green ${
                location.pathname === item.path
                  ? "text-accent bg-agro-green-dark"
                  : "text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 px-6 py-3 text-primary-foreground">
            <Phone className="h-4 w-4 text-accent" />
            <span className="text-sm">+92 330 123467</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
