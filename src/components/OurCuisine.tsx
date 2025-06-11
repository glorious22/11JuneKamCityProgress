import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurCuisine = () => {
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
    <section id="cuisine" ref={sectionRef} className="relative py-16 px-4 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="https://live.staticflickr.com/video/54577718634/716cc532ae/1080p.mp4?s=eyJpIjoiNTQ1Nzc3MTg2MzQiLCJlIjoxNzQ5NTgwNDg4LCJzIjoiNzE2Y2M1MzJhZSIsImkiOiIzMTMzNyJ9&sr=https%3A%2F%2Fwww.flickr.com%2Fphotos%2F202902991%40N05%2F54577718634%2Fin%2Fdateposted-public%2F" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Afro-Centric <span className="text-kamalo-red">Cuisine That Hits the Soul</span>
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Crafted with heritage, served with love. From Fumbwa with Dry Fish to Grilled Thomson and Makayabu, our menu brings the bold flavors of Central Africa to your plate — hot, hearty, and unforgettable.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Popular dishes:</h3>
              <ul className="text-white/80 space-y-2 text-base">
                <li>• Grilled Pork (380g)</li>
                <li>• Fried Thomson</li>
                <li>• Beef Stew (355g)</li>
                <li>• Fried Makayabu</li>
              </ul>
            </div>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Hungry already? <a 
                href="https://www.ubereats.com/za/store/kamalo-city-restaurant/srnMses4VESmEwzdo4gxrw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-kamalo-red hover:text-red-400 underline"
              >
                Pre-order your meal online
              </a> and skip the wait.
            </p>
            
            <Button 
              asChild 
              className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <Link to="/menu">Explore Our Menu</Link>
            </Button>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Placeholder for cuisine image with semi-transparent background */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg h-96 flex items-center justify-center border border-white/20">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Kamalo City - Authentic African cuisine dishes"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCuisine;