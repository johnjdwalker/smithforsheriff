
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add newsletter signup logic here
    // Add analytics tracking for newsletter signup
    alert("Thank you for subscribing to campaign updates!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-navy text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Campaign Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-3">
              <span className="text-gold">NICK</span> SMITH FOR SHERIFF
            </h3>
            <p className="font-open-sans text-sm text-gray-300 leading-relaxed">
              Proven Leadership. Safer Communities.
              <br />
              Re-elect Sheriff Nick Smith in November 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-gold mb-3">Quick Links</h4>
            <ul className="space-y-2 font-open-sans text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Nick</Link></li>
              <li><Link to="/issues" className="hover:text-gold transition-colors">Issues</Link></li>
              <li><Link to="/get-involved" className="hover:text-gold transition-colors">Get Involved</Link></li>
              <li><Link to="/voter-info" className="hover:text-gold transition-colors">Voter Info</Link></li>
              <li><Link to="/events" className="hover:text-gold transition-colors">Events</Link></li>
              <li><Link to="/media" className="hover:text-gold transition-colors">Media</Link></li>
            </ul>
          </div>

          {/* Stay Connected (Newsletter) */}
          <div>
            <h4 className="font-montserrat font-semibold text-gold mb-3">Stay Connected</h4>
            <p className="font-open-sans text-sm text-gray-300 mb-3">
              Sign up for campaign updates and news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-gold/50 text-white placeholder:text-gray-300 flex-grow" 
                required
              />
              <Button type="submit" className="bg-gold text-navy hover:bg-gold/90 font-montserrat font-semibold text-sm shrink-0">
                <Mail className="w-4 h-4 mr-2 sm:hidden md:inline-block" />
                Subscribe
              </Button>
            </form>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-gold"><Twitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-gold"><Instagram size={20} /></a>
            </div>
          </div>
          
          {/* Contact Info */}
           <div>
            <h4 className="font-montserrat font-semibold text-gold mb-3">Contact Us</h4>
            <address className="font-open-sans text-sm text-gray-300 not-italic space-y-1">
              <p>Paid for by the Committee to Re-Elect Nick Smith.</p>
              <p>123 Campaign Trail, Jasper, AL 35501</p>
              <p>Email: <a href="mailto:info@nicksmithforsheriff.com" className="hover:text-gold">info@nicksmithforsheriff.com</a></p>
              <p>Phone: <a href="tel:+12055551234" className="hover:text-gold">(205) 555-1234</a></p>
            </address>
          </div>
        </div>

        <div className="border-t border-gold/30 pt-8 mt-8 text-center">
          <p className="font-open-sans text-xs text-gray-400">
            &copy; {currentYear} Nick Smith for Sheriff Campaign. All rights reserved.
          </p>
          <p className="font-open-sans text-xs text-gray-400 mt-1">
            This website is a demonstration for client presentation and not a live campaign site.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
