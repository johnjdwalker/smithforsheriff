
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const primaryNavItems = [
    { name: "Home", path: "/" },
    { name: "About Nick", path: "/about" },
    { name: "Issues", path: "/issues" },
    { name: "Endorsements", path: "/endorsements" },
  ];

  const secondaryNavItems = [
    { name: "Events", path: "/events" },
    { name: "Media", path: "/media" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Voter Info", path: "/voter-info" },
    { name: "Contact", path: "/contact" },
  ];

  const allNavItems = [...primaryNavItems, ...secondaryNavItems];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-navy text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
            <div className="font-montserrat font-bold text-xl">
              <span className="text-gold">NICK</span> SMITH
            </div>
            <div className="text-sm font-open-sans hidden sm:block text-gray-200">
              FOR SHERIFF
            </div>
          </Link>

          {/* Desktop Navigation - Optimized Layout */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Primary Navigation Items */}
            {primaryNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-open-sans text-xs xl:text-sm font-medium transition-colors duration-200 px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  isActive(item.path)
                    ? "text-gold bg-gold/10 border-b-2 border-gold"
                    : "text-white hover:text-gold hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown for Secondary Items */}
            <div className="relative group">
              <button className="font-open-sans text-xs xl:text-sm font-medium text-white hover:text-gold hover:bg-white/10 px-2 py-1 rounded transition-colors duration-200 flex items-center">
                More
                <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-1 w-48 bg-navy border border-gold/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {secondaryNavItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-4 py-2 text-sm font-open-sans transition-colors ${
                        isActive(item.path)
                          ? "text-gold bg-gold/10"
                          : "text-white hover:text-gold hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <Link to="/get-involved#yardsign">
              <Button
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-navy font-montserrat font-semibold text-xs px-3 py-2 xl:px-4 xl:py-2 ml-2 focus-visible:ring-gold"
              >
                <Home className="mr-1 h-3 w-3 xl:h-4 xl:w-4" /> YARD SIGN
              </Button>
            </Link>
            <Link to="/get-involved#donate">
              <Button
                className="bg-gold text-navy hover:bg-gold/90 font-montserrat font-semibold text-xs px-3 py-2 xl:px-4 xl:py-2 focus-visible:ring-gold"
              >
                DONATE
              </Button>
            </Link>
          </div>

          {/* Medium screens navigation - simplified */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {primaryNavItems.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-open-sans text-xs font-medium transition-colors duration-200 px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  isActive(item.path)
                    ? "text-gold bg-gold/10 border-b-2 border-gold"
                    : "text-white hover:text-gold hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/get-involved#donate">
              <Button
                className="bg-gold text-navy hover:bg-gold/90 font-montserrat font-semibold text-xs px-3 py-2 ml-2 focus-visible:ring-gold"
              >
                DONATE
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-sm border-t border-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {allNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  isActive(item.path)
                    ? "text-gold bg-gold/20 border-l-4 border-gold"
                    : "text-white hover:text-gold hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-3 space-y-3 border-t border-gold/20 mt-3">
              <Link to="/get-involved#yardsign" className="block w-full">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gold text-gold hover:bg-gold hover:text-navy font-montserrat font-semibold focus-visible:ring-gold"
                  onClick={handleNavClick}
                >
                   <Home className="mr-2 h-4 w-4" /> REQUEST YARD SIGN
                </Button>
              </Link>
              <Link to="/get-involved#donate" className="block w-full">
                <Button
                  className="w-full bg-gold text-navy hover:bg-gold/90 font-montserrat font-semibold focus-visible:ring-gold"
                  onClick={handleNavClick}
                >
                  DONATE NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
