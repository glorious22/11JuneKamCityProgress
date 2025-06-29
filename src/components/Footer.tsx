import { Clock, Phone, MapPin, Instagram, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16 footer-tribal">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 text-center md:text-left">
          {/* Logo & Bio */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-kamalo-gold font-serif">Welcome to Kamalo City</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Where rich African heritage meets unforgettable flavor. Come for the taste — stay for the vibe.
            </p>
            <div className="flex items-start justify-center md:justify-start space-x-3">
              <Clock className="w-6 h-6 mt-1 text-kamalo-red flex-shrink-0" />
              <div className="text-base">
                <p className="font-semibold">7 days a week</p>
                <p className="text-kamalo-gold font-bold">11:00 AM - 11:00 PM</p>
                <p className="text-gray-400 mt-2 text-sm">Kitchen closes at 10:30 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links & Contact Info Combined */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-kamalo-red font-serif">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-3 text-base">
                <Link to="/" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">Home</Link>
                <Link to="/menu" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">Menu</Link>
                <Link to="/services" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">Services</Link>
              </div>
              <div className="space-y-3 text-base">
                <Link to="/gallery" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">Gallery</Link>
                <Link to="/about" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">About</Link>
                <Link to="/contact" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">Contact</Link>
              </div>
            </div>

            <div className="space-y-4 text-base">
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-kamalo-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">90 Voortrekker Road</p>
                  <p>Goodwood, Cape Town</p>
                  <p>Western Cape, South Africa</p>
                </div>
              </div>
              
              {/* Icon Button Row */}
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <a
                  href="tel:+27731598909"
                  className="footer-icon-btn bg-kamalo-red hover:bg-red-700"
                  aria-label="Call us"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="mailto:kamalocity@outlook.com"
                  className="footer-icon-btn bg-blue-600 hover:bg-blue-700"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/kamalo_city"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-btn bg-pink-500 hover:bg-pink-600"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-btn bg-green-500 hover:bg-green-600"
                  aria-label="Join our WhatsApp group"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-base mb-4">© 2025 Kamalo City. All rights reserved.</p>
          <p className="text-kamalo-red mb-6 text-lg font-semibold">
            Whether you're here to dine, unwind, or celebrate — Kamalo City is where every moment becomes a memory.
          </p>
          <div>
            <Link 
              to="/reservations" 
              className="btn-primary inline-block touch-manipulation"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Kamalo City",
          "description": "Authentic African cuisine and entertainment venue in Cape Town",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "90 Voortrekker Road",
            "addressLocality": "Goodwood",
            "addressRegion": "Western Cape",
            "addressCountry": "South Africa"
          },
          "telephone": "+27731598909",
          "openingHours": "Mo-Su 11:00-23:00",
          "servesCuisine": "African",
          "priceRange": "$$",
          "url": "https://kamalocity.co.za"
        })}
      </script>
    </footer>
  );
};

export default Footer;