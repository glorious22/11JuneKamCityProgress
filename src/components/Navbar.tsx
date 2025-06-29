import { Instagram, Menu, X, MessageCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black/95 backdrop-blur-sm'
    } border-b border-gray-800`}>
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-between mobile-nav-content">
        {/* Logo/Brand with Favicon */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-kamalo-red rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <Link to="/" className="text-lg md:text-xl font-bold text-kamalo-gold hover:text-kamalo-red transition-colors duration-300 font-serif">
            Kamalo City
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            Home
          </Link>
          
          <Link to="/menu" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            Menu
          </Link>
          
          <Link to="/gallery" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            Gallery
          </Link>

          <Link to="/about" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            About
          </Link>
          
          <Link to="/services" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            Services
          </Link>
          
          <Link to="/contact" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            Contact
          </Link>

          <a href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" target="_blank" rel="noopener noreferrer" className="text-white hover:text-kamalo-green transition-colors duration-300 p-2 hover:scale-110">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href="https://instagram.com/kamalo_city" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors duration-300 p-2 hover:scale-110">
            <Instagram className="w-4 h-4" />
          </a>

          {/* Reservation Pill Button */}
          <Link 
            to="/reservations" 
            className="bg-kamalo-red text-white px-5 py-2 rounded-full hover:bg-red-700 transition-all duration-300 font-semibold text-sm hover:scale-105 hover:shadow-lg ml-4"
          >
            Reserve
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <button className="text-white p-2 hover:text-kamalo-red transition-colors touch-manipulation ml-2">
                <Menu className="w-6 h-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-kamalo-dark border-gray-800 max-h-[85vh]">
              <DrawerHeader className="flex justify-between items-center border-b border-gray-700 pb-4">
                <DrawerTitle className="text-white text-xl font-serif">Menu</DrawerTitle>
                <DrawerClose asChild>
                  <button className="text-white p-2 hover:text-kamalo-red transition-colors touch-manipulation">
                    <X className="w-6 h-6" />
                  </button>
                </DrawerClose>
              </DrawerHeader>
              <div className="p-4 space-y-2 flex flex-col h-full overflow-y-auto">
                <div className="flex-1 space-y-2 overflow-y-auto">
                  <Link to="/" className="block text-white hover:text-kamalo-red transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  
                  <Link to="/menu" className="block text-white hover:text-kamalo-red transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    Menu
                  </Link>
                  
                  <Link to="/gallery" className="block text-white hover:text-kamalo-red transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    Gallery
                  </Link>

                  <Link to="/about" className="block text-white hover:text-kamalo-red transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  
                  <Link to="/services" className="block text-white hover:text-kamalo-red transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    Services
                  </Link>
                  
                  <Link to="/contact" className="block text-white hover:text-kamalo-red transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                  
                  {/* Social Media Icons */}
                  <div className="flex gap-6 py-4 border-b border-gray-700 justify-center">
                    <a href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors touch-manipulation" onClick={() => setIsOpen(false)}>
                      <MessageCircle className="w-8 h-8" />
                    </a>
                    <a href="https://instagram.com/kamalo_city" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors touch-manipulation" onClick={() => setIsOpen(false)}>
                      <Instagram className="w-8 h-8" />
                    </a>
                  </div>
                </div>
                
                {/* Make Reservation Button at Bottom */}
                <div className="pt-4 border-t border-gray-700">
                  <Link 
                    to="/reservations" 
                    className="block w-full bg-kamalo-red text-white px-6 py-4 rounded-full hover:bg-red-700 transition-colors font-semibold text-center hover:scale-105 hover:shadow-lg transition duration-300 text-lg touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    Make Reservation
                  </Link>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;