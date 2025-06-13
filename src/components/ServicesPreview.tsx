import { Music, Users, Utensils, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const ServicesPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Music nights, DJs, and cultural showcases",
      link: "/services/live-entertainment",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Users,
      title: "Private Bookings",
      description: "Pre-orders, group functions, and private hire",
      link: "/services/private-bookings",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Utensils,
      title: "Pre-Orders & Catering",
      description: "Order ahead for pickup or enjoy our full dining experience",
      link: "/services/pre-order-food",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Wind,
      title: "Lifestyle Services",
      description: "Hookah lounge, signature fragrances, barbershop, and game nights",
      link: "/services/hookah-lounge",
      image: "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gradient-to-b from-black to-kamalo-dark">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            More Than Just <span className="text-kamalo-red">Dining</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            More than food — discover the full Kamalo City experience
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="min-w-[280px] bg-black/50 rounded-lg overflow-hidden border border-gray-800 hover:border-kamalo-red transition-all duration-300 snap-start"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={service.image}
                        alt={`Kamalo City - ${service.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                      <IconComponent className="absolute top-4 left-4 w-6 h-6 text-kamalo-red" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <Link
                        to={service.link}
                        className="inline-block bg-kamalo-red text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors text-sm font-semibold"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop: 2x2 grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-black/50 rounded-lg overflow-hidden border border-gray-800 hover:border-kamalo-red transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={`Kamalo City - ${service.title}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                    <IconComponent className="absolute top-4 left-4 w-8 h-8 text-kamalo-red" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <Link
                      to={service.link}
                      className="inline-block bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-transparent border-2 border-kamalo-red text-kamalo-red px-8 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;