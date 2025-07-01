import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const MenuPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const featuredDishes = [
    {
      name: "Beef Stew",
      description: "Beef in a tomato and brinjal sauce with pap or rice and vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Beef Stew",
      tag: "🔥 Chef's Pick"
    },
    {
      name: "Grilled Thomson",
      description: "Seasoned grilled fish served with pap or rice and traditional vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Grilled Thomson",
      tag: "⭐ Customer Favorite"
    },
    {
      name: "Fried Thomson",
      description: "Fried Thomson fish served with pap or rice and vegetables.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Fried Thomson"
    },
    {
      name: "Grilled Chicken Quarter Leg",
      description: "Grilled chicken leg quarter with pap or rice and traditional vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Grilled Chicken Quarter Leg",
      tag: "🔥 Most Popular"
    },
    {
      name: "Fried Kapenta (Monday Special)",
      description: "Fried kapenta (matemba) in tomato sauce, served with pap and vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Kapenta"
    },
    {
      name: "Egusi Soup (Saturday Special)",
      description: "Ground melon seed soup cooked with beef, a weekend favorite.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Egusi Soup",
      tag: "🔥 Weekend Special"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredDishes.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered, featuredDishes.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredDishes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredDishes.length) % featuredDishes.length);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % featuredDishes.length;
      slides.push(featuredDishes[index]);
    }
    return slides;
  };

  return (
    <section ref={sectionRef} className="section-spacing" style={{ backgroundColor: '#FAF3EB' }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Price Note Above Everything */}
        <div className="text-center mb-8">
          <div className="bg-white rounded-lg p-6 border-2 border-kamalo-gold max-w-4xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#4B1E1E' }}>Menu Pricing</h3>
            <p className="text-lg font-semibold mb-2" style={{ color: '#4B1E1E' }}>
              All Daily Specials are R80 with pap or R90 with rice
            </p>
            <p className="text-base" style={{ color: '#6B7280' }}>
              All Vegetable Sides are R40
            </p>
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif" style={{ color: '#4B1E1E' }}>
              Featured <span className="text-kamalo-red">Dishes</span>
            </h2>
            <div className="tribal-divider max-w-md mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2C2C2C' }}>
              Discover our most beloved African dishes, crafted with authentic flavors and traditional recipes
            </p>
          </div>
        </ScrollReveal>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Mobile: Show 1 slide */}
          <div className="md:hidden">
            <ScrollReveal>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={featuredDishes[currentSlide].image}
                    alt={featuredDishes[currentSlide].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{featuredDishes[currentSlide].name}</h3>
                    <p className="text-gray-300 text-sm">{featuredDishes[currentSlide].description}</p>
                    {featuredDishes[currentSlide].tag && (
                      <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-kamalo-gold to-yellow-400 text-gray-800 text-xs font-bold rounded-full border border-yellow-600">
                        {featuredDishes[currentSlide].tag}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Desktop: Show 3 slides */}
          <div className="hidden md:flex gap-6 equal-height-grid">
            {getVisibleSlides().map((dish, index) => (
              <ScrollReveal key={`${currentSlide}-${index}`} delay={index * 200}>
                <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.alt}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{dish.name}</h3>
                      <p className="text-gray-300 text-sm">{dish.description}</p>
                      {dish.tag && (
                        <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-kamalo-gold to-yellow-400 text-gray-800 text-xs font-bold rounded-full border border-yellow-600">
                          {dish.tag}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Navigation buttons - Desktop only */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-kamalo-red hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-kamalo-red hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation buttons - Below carousel */}
          <div className="carousel-arrows md:hidden">
            <button
              onClick={prevSlide}
              className="carousel-arrow hover:bg-red-600 text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="carousel-arrow hover:bg-red-600 text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {featuredDishes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-kamalo-red' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link to="/menu" className="btn-primary">
                View Full Menu
              </Link>
              <a 
                href="https://www.ubereats.com/za/store/kamalo-city/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-uber-eats"
              >
                Order on Uber Eats
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MenuPreview;