import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=1920"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Image carousel
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Kamalo City - African cuisine and entertainment ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
      
      {/* African pattern overlay */}
      <div className="absolute inset-0 african-pattern"></div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-kamalo-dark/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 fade-in ${isVisible ? 'visible' : ''}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Kamalo City
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-kamalo-gold mb-6 font-serif italic leading-relaxed">
            Where rich African heritage meets unforgettable flavor
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Come for the taste — stay for the vibe. Experience authentic African cuisine, culture, and community in the heart of Cape Town.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              asChild 
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              <Link to="/reservations">Book a Table</Link>
            </Button>
            
            <Button 
              asChild 
              className="btn-ghost text-lg px-8 py-4 w-full sm:w-auto"
            >
              <Link to="/menu">View Menu</Link>
            </Button>
          </div>
          
          <div className="text-gray-400">
            <p className="text-sm md:text-base">📍 90 Voortrekker Road, Goodwood • 📞 +27 73 159 8909</p>
            <p className="text-xs md:text-sm mt-2">Open 7 days a week: 11:00 AM - 11:00 PM</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;