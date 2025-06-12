import { Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const StickyBookingButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      // Hide button when user scrolls to footer area
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setIsVisible(scrollPosition < documentHeight - 200);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  if (isMobile) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link
        to="/reservations"
        className="bg-kamalo-red hover:bg-red-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold hover:scale-105 animate-pulse"
      >
        <Calendar className="w-5 h-5" />
        <span>Reserve Now</span>
      </Link>
    </div>
  );
};

export default StickyBookingButton;