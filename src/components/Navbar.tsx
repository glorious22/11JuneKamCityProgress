import { Instagram, Menu, X, MessageCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
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
  const { t } = useTranslation();

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
          <div className="w-8 h-8 bg-kamalo-green rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <Link to="/" className="text-lg md:text-xl font-bold text-kamalo-gold hover:text-kamalo-orange transition-colors duration-300 font-serif">
            Kamalo City
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            {t('nav.home')}
          </Link>
          
          <Link to="/menu" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            {t('nav.menu')}
          </Link>
          
          <Link to="/gallery" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            {t('nav.gallery')}
          </Link>

          <Link to="/about" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            {t('nav.about')}
          </Link>
          
          <Link to="/services" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            {t('nav.services')}
          </Link>
          
          <Link to="/contact" className="text-white hover:text-kamalo-gold transition-colors duration-300 text-sm font-semibold px-3 py-2 hover:scale-105">
            {t('nav.contact')}
          </Link>

          <a href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-300 p-2 hover:scale-110">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href="https://instagram.com/kamalo_city" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors duration-300 p-2 hover:scale-110">
            <Instagram className="w-4 h-4" />
          </a>

          {/* Language Toggle */}
          <LanguageToggle />

          {/* Reservation Pill Button */}
          <Link 
            to="/reservations" 
            className="bg-kamalo-green text-white px-5 py-2 rounded-full hover:bg-kamalo-orange transition-all duration-300 font-semibold text-sm hover:scale-105 hover:shadow-lg ml-4"
          >
            {t('nav.reserve')}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <button className="text-white p-2 hover:text-kamalo-orange transition-colors touch-manipulation">
                <Menu className="w-6 h-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-kamalo-dark border-gray-800 max-h-[85vh]">
              <DrawerHeader className="flex justify-between items-center border-b border-gray-700 pb-4">
                <DrawerTitle className="text-white text-xl font-serif">Menu</DrawerTitle>
                <DrawerClose asChild>
                  <button className="text-white p-2 hover:text-kamalo-orange transition-colors touch-manipulation">
                    <X className="w-6 h-6" />
                  </button>
                </DrawerClose>
              </DrawerHeader>
              <div className="p-4 space-y-2 flex flex-col h-full overflow-y-auto">
                <div className="flex-1 space-y-2 overflow-y-auto">
                  <Link to="/" className="block text-white hover:text-kamalo-orange transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    {t('nav.home')}
                  </Link>
                  
                  <Link to="/menu" className="block text-white hover:text-kamalo-orange transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    {t('nav.menu')}
                  </Link>
                  
                  <Link to="/gallery" className="block text-white hover:text-kamalo-orange transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    {t('nav.gallery')}
                  </Link>

                  <Link to="/about" className="block text-white hover:text-kamalo-orange transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    {t('nav.about')}
                  </Link>
                  
                  <Link to="/services" className="block text-white hover:text-kamalo-orange transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    {t('nav.services')}
                  </Link>
                  
                  <Link to="/contact" className="block text-white hover:text-kamalo-orange transition-colors py-3 text-lg border-b border-gray-700 touch-manipulation font-semibold" onClick={() => setIsOpen(false)}>
                    {t('nav.contact')}
                  </Link>
                  
                  {/* Language Toggle for Mobile */}
                  <div className="py-4 border-b border-gray-700">
                    <LanguageToggle className="w-full justify-center" />
                  </div>
                  
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
                    className="block w-full bg-kamalo-green text-white px-6 py-4 rounded-full hover:bg-kamalo-orange transition-colors font-semibold text-center hover:scale-105 hover:shadow-lg transition duration-300 text-lg touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.reserve')}
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