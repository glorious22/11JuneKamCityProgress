import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "https://live.staticflickr.com/65535/54626102243_68ef2ee843_c.jpg",
    "https://live.staticflickr.com/65535/54625891876_9e21c97cb0_c.jpg",
    "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=1920"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Image carousel - every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image carousel with fade transition */}
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
      
      {/* Enhanced background overlay - 40% opacity for readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center hero-mobile-spacing" style={{ paddingTop: '140px' }}>
        <div className={`hero-fade ${isVisible ? 'visible' : ''}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 text-white leading-tight font-serif">
            Welcome to <span className="text-kamalo-gold">Kamalo City</span>
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-white mb-2 font-serif">
            Cape Town's Home of African Flavor
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl text-kamalo-gold mb-4 md:mb-6 font-serif italic leading-relaxed">
            Bringing the Heart of African Cuisine to Every Plate.
          </h3>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Experience authentic African cuisine, traditional vegetables, premium hookah, grooming, and weekend entertainment — all under one roof in Goodwood, Cape Town.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 md:mb-8 px-4">
            <Button 
              asChild 
              className="btn-primary-slim px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full w-full sm:w-auto touch-manipulation font-semibold"
            >
              <Link to="/reservations">Book a Table</Link>
            </Button>
            
            <Button 
              asChild 
              className="btn-uber-eats-slim px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full w-full sm:w-auto touch-manipulation font-semibold"
            >
              <a href="https://www.ubereats.com/za/store/kamalo-city-restaurant/srnMses4VESmEwzdo4gxrw" target="_blank" rel="noopener noreferrer">
                Order on Uber Eats
              </a>
            </Button>
            
            <Button 
              asChild 
              className="btn-ghost-slim px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full w-full sm:w-auto touch-manipulation font-semibold"
            >
              <Link to="/menu">View Menu</Link>
            </Button>
          </div>
          
          {/* Address and contact info */}
          <div className="text-gray-400 px-4 mb-6">
            <p className="text-sm md:text-base">📍 90 Voortrekker Road, Goodwood • 📞 +27 73 691 1461</p>
            <p className="text-xs md:text-sm mt-2">Open 7 days a week: 11:00 AM - 11:00 PM</p>
          </div>

          {/* Animated scroll indicator - moved below address */}
          <div className="flex justify-center pt-4">
            <div className="animate-bounce">
              <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-kamalo-gold rounded-full flex justify-center relative">
                <div className="w-1 h-2 md:h-3 bg-kamalo-gold rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;