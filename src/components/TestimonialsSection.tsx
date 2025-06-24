import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "HM Baloji",
      type: "Dine In",
      rating: 5,
      text: "Amazing African restaurant. I love to be there again and again for their lovely food, clean environments, live music and great service.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Ludi Smit",
      type: "Takeaway",
      rating: 5,
      text: "This is a real traditional mid-African cuisine restaurant. Lovely atmosphere, soft reclining furniture, even a pool table. Owners are very forthcoming and friendly.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Emmanuel Ndachengedzwa",
      type: "Dine In - Lunch",
      rating: 5,
      text: "The food is absolutely great and the service is 5-star 👌💯.",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Kabareng Aubrey Moselelane",
      type: "Dine In - Dinner",
      rating: 5,
      text: "Kid-friendliness: It's kids friendly.",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Baptiste Cibangu",
      type: "Local Guide",
      rating: 5,
      text: "Food: 5/5 | Service: 5/5 | Atmosphere: 5/5",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
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
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gradient-to-b from-kamalo-dark to-black">
      <div className="site-container">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our <span className="text-kamalo-red">Customers Are Saying</span>
          </h2>
          <p className="text-xl text-gray-300">
            Real experiences from our valued guests
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-black/50 rounded-lg p-8 border border-gray-800 min-h-[300px] flex items-center">
            <div className="w-full text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-kamalo-gold fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                "{testimonials[currentSlide].text}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentSlide].image}
                  alt={`${testimonials[currentSlide].name} - Kamalo City customer`}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-kamalo-red font-semibold text-lg">
                    {testimonials[currentSlide].name}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonials[currentSlide].type}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-kamalo-red hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-kamalo-red hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
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
      </div>
    </section>
  );
};

export default TestimonialsSection;