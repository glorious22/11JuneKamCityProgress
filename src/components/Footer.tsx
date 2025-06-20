import { Clock, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-kamalo-red">Opening Hours</h3>
            <div className="flex items-start justify-center md:justify-start space-x-3">
              <Clock className="w-6 h-6 mt-1 text-kamalo-red flex-shrink-0" />
              <div className="text-base">
                <p className="font-semibold">7 days a week</p>
                <p className="text-kamalo-gold font-bold">11:00 AM - 11:00 PM</p>
                <p className="text-gray-400 mt-2 text-sm">Kitchen closes at 10:30 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-kamalo-red">Contact</h3>
            <div className="space-y-3 text-base">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-kamalo-red flex-shrink-0" />
                <a href="tel:+27731598909" className="hover:text-kamalo-red transition-colors touch-manipulation font-semibold">
                  +27 73 159 8909
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-kamalo-red mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">90 Voortrekker Road</p>
                  <p>Goodwood, Cape Town</p>
                  <p>Western Cape, South Africa</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-kamalo-red">Quick Links</h3>
            <div className="space-y-3 text-base">
              <Link to="/" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">Home</Link>
              <Link to="/menu" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">Menu</Link>
              <Link to="/services" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">Services</Link>
              <Link to="/gallery" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">Gallery</Link>
              <Link to="/about" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">About</Link>
              <Link to="/contact" className="block hover:text-kamalo-red transition-colors touch-manipulation font-semibold">Contact</Link>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-kamalo-red text-center">Follow Us</h3>
          <div className="flex justify-center gap-8">
            <a
              href="https://instagram.com/kamalo_city"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-kamalo-red transition-colors touch-manipulation group"
            >
              <Instagram className="w-8 h-8 group-hover:scale-110 transition duration-300" />
              <span className="font-semibold text-lg">@kamalo_city</span>
            </a>
            <a
              href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-kamalo-red transition-colors touch-manipulation group"
            >
              <MessageCircle className="w-8 h-8 group-hover:scale-110 transition duration-300" />
              <span className="font-semibold text-lg">WhatsApp Group</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-base mb-4">© 2025 Kamalo City. All rights reserved.</p>
          <p className="text-kamalo-red mb-6 text-lg font-semibold">
            More exciting things are coming to Kamalo City soon!
          </p>
          <div>
            <Link 
              to="/reservations" 
              className="inline-block bg-kamalo-red text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors font-semibold hover:scale-105 hover:shadow-lg transition duration-300 text-lg touch-manipulation"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;