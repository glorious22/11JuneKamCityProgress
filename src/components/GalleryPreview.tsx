import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GalleryPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    {
      id: 1,
      title: "Authentic African Cuisine",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Authentic African food dishes"
    },
    {
      id: 2,
      title: "Vibrant Atmosphere",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Restaurant crowd and atmosphere"
    },
    {
      id: 3,
      title: "Premium Hookah Experience",
      image: "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Hookah lounge experience"
    },
    {
      id: 4,
      title: "Professional Barbershop",
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Barber shop services"
    },
    {
      id: 5,
      title: "Private Events",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Private event celebration"
    },
    {
      id: 6,
      title: "Restaurant Interior",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Restaurant interior space"
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
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % galleryImages.length;
      slides.push(galleryImages[index]);
    }
    return slides;
  };

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gradient-to-b from-kamalo-dark to-black">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience <span className="text-kamalo-red">Kamalo City</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a glimpse of our vibrant atmosphere, delicious food, and premium services
          </p>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg">
            {/* Mobile: Show 1 slide */}
            <div className="md:hidden">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={galleryImages[currentSlide].image}
                  alt={galleryImages[currentSlide].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">{galleryImages[currentSlide].title}</h3>
                </div>
              </div>
            </div>

            {/* Desktop: Show 3 slides */}
            <div className="hidden md:flex gap-6">
              {getVisibleSlides().map((item, index) => (
                <div key={`${currentSlide}-${index}`} className="flex-1 relative h-64 rounded-lg overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              ))}
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
            {galleryImages.map((_, index) => (
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
          <Link
            to="/gallery"
            className="inline-block bg-transparent border-2 border-kamalo-red text-kamalo-red px-8 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;