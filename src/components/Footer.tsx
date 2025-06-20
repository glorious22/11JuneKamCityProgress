import { Clock, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import LocationMap from "./LocationMap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8 text-center md:text-left">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-kamalo-red">Opening Hours</h3>
            <div className="flex items-start justify-center md:justify-start space-x-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5 mt-1 text-kamalo-red flex-shrink-0" />
              <div className="text-sm">
                <p>7 days a week</p>
                <p>11:00 AM - 11:00 PM</p>
                <p className="text-gray-400 mt-1">Kitchen closes at 10:30 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-kamalo-red">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-4 h-4 text-kamalo-red flex-shrink-0" />
                <a href="tel:+27731598909" className="hover:text-kamalo-red transition-colors touch-manipulation">
                  +27 73 159 8909
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-kamalo-red mt-1 flex-shrink-0" />
                <div>
                  <p>90 Voortrekker Road</p>
                  <p>Goodwood, Cape Town</p>
                  <p>Western Cape, South Africa</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-kamalo-red">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-kamalo-red transition-colors touch-manipulation">Home</Link>
              <Link to="/menu" className="block hover:text-kamalo-red transition-colors touch-manipulation">Menu</Link>
              <Link to="/services" className="block hover:text-kamalo-red transition-colors touch-manipulation">Services</Link>
              <Link to="/gallery" className="block hover:text-kamalo-red transition-colors touch-manipulation">Gallery</Link>
              <Link to="/about" className="block hover:text-kamalo-red transition-colors touch-manipulation">About</Link>
              <Link to="/contact" className="block hover:text-kamalo-red transition-colors touch-manipulation">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-kamalo-red">Follow Us</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://instagram.com/kamalo_city"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-2 hover:text-kamalo-red transition-colors touch-manipulation"
              >
                <Instagram className="w-5 h-5" />
                <span>@kamalo_city</span>
              </a>
              <a
                href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-2 hover:text-kamalo-red transition-colors touch-manipulation"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Group</span>
              </a>
              <a
                href="https://www.ubereats.com/za/store/kamalo-city-restaurant/srnMses4VESmEwzdo4gxrw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-2 hover:text-kamalo-red transition-colors touch-manipulation"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Order on Uber Eats</span>
              </a>
            </div>
            <div className="mt-4 hidden md:block">
              <LocationMap />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 Kamalo City. All rights reserved.</p>
          <p className="text-kamalo-red mt-2 text-sm">
            More exciting things are coming to Kamalo City soon!
          </p>
          <div className="mt-4">
            <Link 
              to="/reservations" 
              className="inline-block bg-kamalo-red text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-red-700 transition-colors font-semibold hover:scale-105 hover:shadow-lg transition duration-300 text-sm md:text-base touch-manipulation"
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