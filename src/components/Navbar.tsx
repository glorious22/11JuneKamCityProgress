import { Instagram, ChevronDown, Menu, X, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div>
          <Link to="/" className="text-xl font-bold text-kamalo-gold hover:text-kamalo-red transition-colors">
            Kamalo City
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-kamalo-red transition-colors text-base">
            Home
          </Link>
          
          {/* Menu Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-white hover:text-kamalo-red transition-colors focus:outline-none text-base">
              Menu
              <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black/95 border-gray-800 mt-2">
              <DropdownMenuItem asChild>
                <Link to="/menu" className="text-white hover:text-kamalo-red transition-colors">
                  Standard Menu
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/menu/daily-specials" className="text-white hover:text-kamalo-red transition-colors">
                  Daily Specials
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/menu/vegetable-sides" className="text-white hover:text-kamalo-red transition-colors">
                  Vegetable Sides
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/menu/sides" className="text-white hover:text-kamalo-red transition-colors">
                  Sides
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-white hover:text-kamalo-red transition-colors focus:outline-none text-base">
              Services
              <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black/95 border-gray-800 mt-2">
              <DropdownMenuItem asChild>
                <Link to="/services/pre-order-food" className="text-white hover:text-kamalo-red transition-colors">
                  Food & Pre-orders
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/live-entertainment" className="text-white hover:text-kamalo-red transition-colors">
                  Live Music & Entertainment
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/private-bookings" className="text-white hover:text-kamalo-red transition-colors">
                  Private Events
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/hookah-lounge" className="text-white hover:text-kamalo-red transition-colors">
                  Hookah Lounge
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/perfumes" className="text-white hover:text-kamalo-red transition-colors">
                  Perfumes
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/barber-next-door" className="text-white hover:text-kamalo-red transition-colors">
                  Barber Shop
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services" className="text-white hover:text-kamalo-red transition-colors border-t border-gray-700 pt-2">
                  View All Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/gallery" className="text-white hover:text-kamalo-red transition-colors text-base">
            Gallery
          </Link>
          <Link to="/reservations" className="text-white hover:text-kamalo-red transition-colors text-base">
            Reservations
          </Link>
          <Link to="/about" className="text-white hover:text-kamalo-red transition-colors text-base">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-kamalo-red transition-colors text-base">
            Contact
          </Link>
          <a href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" target="_blank" rel="noopener noreferrer" className="text-white hover:text-kamalo-red transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/kamalo_city" target="_blank" rel="noopener noreferrer" className="text-white hover:text-kamalo-red transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <button className="text-white p-2 hover:text-kamalo-red transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-kamalo-dark border-gray-800">
              <DrawerHeader className="flex justify-between items-center border-b border-gray-700 pb-4">
                <DrawerTitle className="text-white">Menu</DrawerTitle>
                <DrawerClose asChild>
                  <button className="text-white p-2 hover:text-kamalo-red transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </DrawerClose>
              </DrawerHeader>
              <div className="p-4 space-y-4 flex flex-col h-full">
                <div className="flex-1 space-y-4">
                  <Link to="/" className="block text-white hover:text-kamalo-red transition-colors py-3 text-base border-b border-gray-700" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  
                  <Collapsible open={menuOpen} onOpenChange={setMenuOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:text-kamalo-red transition-colors py-3 text-base border-b border-gray-700">
                      Menu
                      <ChevronDown className={`w-4 h-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 pl-4 mt-2">
                      <Link to="/menu" className="block text-gray-300 hover:text-kamalo-red transition-colors py-2 text-base" onClick={() => setIsOpen(false)}>
                        Standard Menu
                      </Link>
                      <Link to="/menu/daily-specials" className="block text-gray-300 hover:text-kamalo-red transition-colors py-2 text-base" onClick={() => setIsOpen(false)}>
                        Daily Specials
                      </Link>
                      <Link to="/menu/vegetable-sides" className="block text-gray-300 hover:text-kamalo-red transition-colors py-2 text-base" onClick={() => setIsOpen(false)}>
                        Vegetable Sides
                      </Link>
                      <Link to="/menu/sides" className="block text-gray-300 hover:text-kamalo-red transition-colors py-2 text-base" onClick={() => setIsOpen(false)}>
                        Sides
                      </Link>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:text-kamalo-red transition-colors py-3 text-base border-b border-gray-700">
                      Services
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 pl-4 mt-2">
                      <Link to="/services/pre-order-food" className="block text-gray-300 hover:text-kamalo-red transition-colors py-2 text-base" onClick={() => setIsOpen(false)}>
                        Food & Pre-orders
                      </Link>
                      <Link to="/services/live-entertainment" className="block text-gray-300 hover:text-kamalo-red transition-colors py-2 text-base" onClick={() => setIsOpen(false)}>
                        Live Music & Entertainment
                      </Link>
                      <Link to="/services/private-bookings" className="block text-gray-300 hover:text-kamalo-red transition-colors py-2 text-base" onClick={() => setIsOpen(false)}>
                        Private Events
                      </Link>
                      <Link to="/services/hookah-lounge" className="block text-gray-300 hover:text-kamalo-red transition-colors py-2 text-base" onClick={() => setIsOpen(false)}>
                        Hookah Lounge
                      </Link>
                      <Link to="/services/perfumes" className="block text-gray-300 hover:text-kamalo-red transition-colors py-2 text-base" onClick={() => setIsOpen(false)}>
                        Perfumes
                      </Link>
                      <Link to="/services/barber-next-door" className="block text-gray-300 hover:text-kamalo-red transition-colors py-2 text-base" onClick={() => setIsOpen(false)}>
                        Barber Shop
                      </Link>
                      <Link to="/services" className="block text-gray-300 hover:text-kamalo-red transition-colors py-2 text-base" onClick={() => setIsOpen(false)}>
                        View All Services
                      </Link>
                    </CollapsibleContent>
                  </Collapsible>

                  <Link to="/gallery" className="block text-white hover:text-kamalo-red transition-colors py-3 text-base border-b border-gray-700" onClick={() => setIsOpen(false)}>
                    Gallery
                  </Link>
                  <Link to="/reservations" className="block text-white hover:text-kamalo-red transition-colors py-3 text-base border-b border-gray-700" onClick={() => setIsOpen(false)}>
                    Reservations
                  </Link>
                  <Link to="/about" className="block text-white hover:text-kamalo-red transition-colors py-3 text-base border-b border-gray-700" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <Link to="/contact" className="block text-white hover:text-kamalo-red transition-colors py-3 text-base border-b border-gray-700" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                  <a href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-kamalo-red transition-colors py-3 text-base border-b border-gray-700" onClick={() => setIsOpen(false)}>
                    WhatsApp Group
                  </a>
                  <a href="https://instagram.com/kamalo_city" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-kamalo-red transition-colors py-3 text-base" onClick={() => setIsOpen(false)}>
                    Instagram
                  </a>
                </div>
                
                {/* Make Reservation Button at Bottom */}
                <div className="pt-4 border-t border-gray-700">
                  <Link 
                    to="/reservations" 
                    className="block w-full bg-kamalo-red text-white px-6 py-4 rounded-full hover:bg-red-700 transition-colors font-semibold text-center hover:scale-105 hover:shadow-lg transition duration-300"
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