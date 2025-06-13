import { Clock, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import LocationMap from "./LocationMap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4 text-kamalo-red">Opening Hours</h3>
            <div className="flex items-start justify-center md:justify-start space-x-2">
              <Clock className="w-5 h-5 mt-1 text-kamalo-red" />
              <div className="text-sm">
                <p>7 days a week</p>
                <p>11:00 AM - 11:00 PM</p>
                <p className="text-gray-400 mt-1">Kitchen closes at 10:30 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-kamalo-red">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-4 h-4 text-kamalo-red" />
                <a href="tel:+27731598909" className="hover:text-kamalo-red transition-colors">
                  +27 73 159 8909
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-kamalo-red mt-1" />
                <div>
                  <p>90 Voortrekker Road</p>
                  <p>Goodwood, Cape Town</p>
                  <p>Western Cape, South Africa</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-kamalo-red">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-kamalo-red transition-colors">Home</Link>
              <Link to="/menu" className="block hover:text-kamalo-red transition-colors">Menu</Link>
              <Link to="/services" className="block hover:text-kamalo-red transition-colors">All Services</Link>
              <Link to="/gallery" className="block hover:text-kamalo-red transition-colors">Gallery</Link>
              <Link to="/about" className="block hover:text-kamalo-red transition-colors">About</Link>
              <Link to="/contact" className="block hover:text-kamalo-red transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-kamalo-red">Follow Us</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://instagram.com/kamalo_city"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-2 hover:text-kamalo-red transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@kamalo_city</span>
              </a>
              <a
                href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-2 hover:text-kamalo-red transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Group</span>
              </a>
              <a
                href="https://www.ubereats.com/za/store/kamalo-city-restaurant/srnMses4VESmEwzdo4gxrw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-2 hover:text-kamalo-red transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Order on Uber Eats</span>
              </a>
            </div>
            <div className="mt-4">
              <LocationMap />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 Kamalo City. All rights reserved.</p>
          <p className="text-kamalo-red mt-2 text-sm">
            More exciting things are coming to Kamalo City soon!
          </p>
          <div className="mt-4">
            <Link 
              to="/reservations" 
              className="inline-block bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
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