import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, MapPin } from "lucide-react";

const BookingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-16 px-4 bg-kamalo-dark">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-r from-kamalo-red/20 to-red-900/20 rounded-2xl p-8 md:p-12 border border-kamalo-red/30">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Right Here in <span className="text-kamalo-red">Goodwood</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Located in the heart of Goodwood with free parking and secure access.
            </p>
            
            <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Ready to experience Kamalo City? Reach out for bookings and questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                asChild 
                className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300 w-full sm:w-auto"
              >
                <Link to="/reservations" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Make a Reservation
                </Link>
              </Button>
              
              <Button 
                asChild 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300 w-full sm:w-auto"
              >
                <a 
                  href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  WhatsApp Group
                </a>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-kamalo-red" />
                <a href="tel:+27731598909" className="text-kamalo-red hover:text-red-400 transition-colors">
                  +27 73 159 8909
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-kamalo-red" />
                <span>90 Voortrekker Road, Goodwood</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;