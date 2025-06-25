import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Music, Users, Scissors, Wind, Award, Phone, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [activeToggle, setActiveToggle] = useState("main");
  const [openDetails, setOpenDetails] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Our Services - Kamalo City | Complete African Experience";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover all services at Kamalo City: authentic dining, private events, live entertainment, hookah lounge, barbershop, and more in Cape Town.');
    }
  }, []);

  const toggleDetails = (serviceId: string) => {
    setOpenDetails(openDetails === serviceId ? null : serviceId);
  };

  const mainServices = [
    {
      id: "restaurant-dining",
      title: "Restaurant Dining",
      summary: "Enjoy our authentic African cuisine in a warm, welcoming atmosphere.",
      description: "Experience traditional and modern African recipes served with friendly, family-style service in our comfortable dining space.",
      details: [
        "Sit-down meals with full menu",
        "Traditional & modern African recipes", 
        "Friendly, family-style service",
        "Open 7 days a week, 11:00 AM - 11:00 PM"
      ],
      icon: Utensils,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "live-entertainment",
      title: "Live Entertainment",
      summary: "Experience music, dance, and energy every weekend.",
      description: "Enjoy authentic African music, DJs, and traditional performances that bring energy and cultural authenticity to your dining experience.",
      details: [
        "DJs and traditional performers",
        "Cultural showcases and live music",
        "Friday and Saturday night entertainment",
        "Special guest appearances"
      ],
      icon: Music,
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "game-nights",
      title: "Game Nights",
      summary: "Relax and have fun with pool, karaoke, and good vibes.",
      description: "Unwind with friends in our recreational area featuring pool tables and entertainment options for a complete social experience.",
      details: [
        "Pool tables and casual play",
        "Karaoke setup on selected nights",
        "Available Thursday–Sunday",
        "Perfect for groups and socializing"
      ],
      icon: Award,
      image: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "venue-hire",
      title: "Venue Hire",
      summary: "Book our unique space for your private events and functions.",
      description: "Host your special occasions in our vibrant African setting with full catering and event support for memorable celebrations.",
      details: [
        "Ideal for parties, dinners, small events",
        "Custom décor and music allowed",
        "Flexible layout options",
        "Accommodates up to 80 guests"
      ],
      icon: Users,
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const otherServices = [
    {
      id: "barbershop",
      title: "Barbershop on Site",
      summary: "Professional cuts while you dine",
      description: "R60 per cut. Male clients only. Open daily from 11am. Freshen up at our in-house barber while you wait for your order or during events. Professional styling in a relaxed atmosphere.",
      icon: Scissors,
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "perfume-shop",
      title: "Signature Scents",
      summary: "Curated African-inspired fragrances",
      description: "Explore our curated collection of bold, African-inspired fragrances. Long-lasting, oil-based perfumes inspired by the world's top designers. Test any fragrance and discover your new favorite.",
      icon: Wind,
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "hookah-station",
      title: "Hookah Lounge",
      summary: "Premium hookah experience daily from 6 PM",
      description: "Must be 18+. Flavors vary daily. Available throughout our operating hours. Premium hookah experience with mint, apple, and fruity blends in our ambient lounge with live DJs and flowing drinks.",
      icon: Wind,
      image: "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "pre-orders-catering",
      title: "Pre-Orders & Catering",
      summary: "Order ahead or let us cater your next event",
      description: "Order your favorite meals in advance or let us cater your next event. For custom orders or event inquiries, contact us directly. We offer full catering services for corporate events, parties, and special occasions.",
      icon: Utensils,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const ServiceCard = ({ service, isCollapsible = false }: { service: any, isCollapsible?: boolean }) => {
    const IconComponent = service.icon;
    const isOpen = openDetails === service.id;

    if (isCollapsible) {
      return (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <img 
              src={service.image}
              alt={`Kamalo City - ${service.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <IconComponent className="absolute top-4 left-4 w-8 h-8 text-white" />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{service.summary}</p>
            
            <button
              onClick={() => toggleDetails(service.id)}
              className="w-full bg-kamalo-red text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              Details
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {isOpen && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={service.image}
            alt={`Kamalo City - ${service.title}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition duration-300"></div>
          <IconComponent className="absolute top-4 left-4 w-8 h-8 text-white" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{service.summary}</p>
          
          <button
            onClick={() => toggleDetails(service.id)}
            className="w-full bg-kamalo-red text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors font-semibold flex items-center justify-center gap-2"
          >
            Details
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ${
                openDetails === service.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {openDetails === service.id && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              {service.details && (
                <ul className="space-y-2">
                  {service.details.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-kamalo-red font-bold">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12">
        <div className="site-container">
          {/* Header Section */}
          <div className="text-center section-spacing">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-kamalo-red">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              More than a restaurant – Kamalo City is a full experience.
            </p>
          </div>

          {/* Toggle Selector */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveToggle("main")}
              className={`px-8 py-4 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold text-lg ${
                activeToggle === "main" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Main Services
            </Button>
            <Button
              onClick={() => setActiveToggle("other")}
              className={`px-8 py-4 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold text-lg ${
                activeToggle === "other" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Other Services
            </Button>
          </div>

          {/* Main Services Section */}
          {activeToggle === "main" && (
            <section className="section-spacing">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Main Services</h2>
                <p className="text-lg text-gray-300">Explore the core experiences that define Kamalo City.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mainServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>
          )}

          {/* Other Services Section - Collapsible */}
          {activeToggle === "other" && (
            <section className="section-spacing">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Other Services</h2>
                <p className="text-lg text-gray-300">Additional amenities and experiences available at Kamalo City.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherServices.map((service) => (
                  <ServiceCard key={service.id} service={service} isCollapsible={true} />
                ))}
              </div>
            </section>
          )}

          {/* Contact CTA */}
          <section className="text-center bg-black/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience <span className="text-kamalo-red">Kamalo City</span>?
            </h2>
            <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
              Visit us at 90 Voortrekker Road, Goodwood, Cape Town. Open 7 days a week from 11:00 AM to 11:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button className="btn-primary">
                <a href="tel:+27731598909">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </Button>
              <Button className="btn-ghost">
                <a href="/reservations">Make Reservation</a>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;