import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const StickyBookingButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide button when user scrolls to footer area
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setIsVisible(scrollPosition < documentHeight - 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link
        to="/reservations"
        className="bg-kamalo-red hover:bg-red-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold hover:scale-105 animate-pulse"
      >
        <Calendar className="w-5 h-5" />
        <span className="hidden sm:inline">Reserve Now</span>
        <span className="sm:hidden">Book</span>
      </Link>
    </div>
  );
};

export default StickyBookingButton;