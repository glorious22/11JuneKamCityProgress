import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MenuPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const featuredDishes = [
    {
      name: "Beef Stew (355g)",
      price: "R 133.65",
      description: "Beef in a tomato and brinjal sauce with pap or rice and vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Beef Stew"
    },
    {
      name: "Grilled Thomson",
      price: "R 133.65",
      description: "Seasoned grilled Thomson fish served with pap or rice and traditional vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Thomson"
    },
    {
      name: "Fried Thomson",
      price: "R 133.65",
      description: "Fried Thomson fish served with pap or rice and vegetables.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Thomson"
    },
    {
      name: "Grilled Chicken Quarter Leg",
      price: "R 146.50",
      description: "Grilled chicken leg quarter with pap or rice and traditional vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Chicken Quarter Leg"
    },
    {
      name: "Kapenta (Monday Special)",
      price: "R 162.00",
      description: "Fried kapenta (matemba) in tomato sauce, served with pap and vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Kapenta"
    },
    {
      name: "Ngolo (Monday Special)",
      price: "R 162.00",
      description: "Catfish cooked with green pepper sauce, served with pap and vegetables.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ngolo Catfish"
    },
    {
      name: "Hard Chicken",
      price: "R 146.50",
      description: "Traditional firm-textured chicken with pap or rice and vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Hard Chicken"
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
      }, 3000);

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
    <section ref={sectionRef} className="py-16 px-4 bg-kamalo-dark">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Featured <span className="text-kamalo-red">Dishes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most beloved African dishes, crafted with authentic flavors and traditional recipes
          </p>
        </div>

        <div 
          className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-500 ease-in-out">
              {/* Mobile: Show 1 slide */}
              <div className="md:hidden w-full">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={featuredDishes[currentSlide].image}
                    alt={featuredDishes[currentSlide].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{featuredDishes[currentSlide].name}</h3>
                    <p className="text-kamalo-red font-semibold">{featuredDishes[currentSlide].price}</p>
                    <p className="text-gray-300 text-sm mt-1">{featuredDishes[currentSlide].description}</p>
                  </div>
                </div>
              </div>

              {/* Desktop: Show 3 slides */}
              <div className="hidden md:flex w-full gap-6">
                {getVisibleSlides().map((dish, index) => (
                  <div key={`${currentSlide}-${index}`} className="flex-1 relative h-64 rounded-lg overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.alt}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{dish.name}</h3>
                      <p className="text-kamalo-red font-semibold">{dish.price}</p>
                      <p className="text-gray-300 text-sm mt-1">{dish.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-kamalo-red hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-kamalo-red hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
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
                  index === currentSlide ? 'bg-kamalo-red' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
          >
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;