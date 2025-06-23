import { useEffect, useState } from "react";
import { Utensils, Music, Users, Scissors, Wind, Award, Phone, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Our Services - Kamalo City | Complete African Experience";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover all services at Kamalo City: authentic dining, private events, live entertainment, hookah lounge, barbershop, and more in Cape Town.');
    }
  }, []);

  const services = [
    {
      id: 1,
      title: "Live Entertainment",
      icon: Music,
      summary: "Experience live DJs, traditional African drumming, and weekend performances.",
      details: "Experience live DJs, traditional African drumming, and weekend performances that bring energy and authenticity to your dining experience. Every Friday and Saturday, we host talented local artists who showcase the rich musical heritage of Africa.",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Venue Hire",
      icon: Users,
      summary: "Book Kamalo City for private events and celebrations.",
      details: "Book Kamalo City for private events — from birthday celebrations to cultural gatherings — in a vibrant African setting. Our venue can accommodate up to 80 guests and includes sound system, lighting, and full catering options.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Game Nights & Hookah Lounge",
      icon: Wind,
      summary: "Enjoy pool, karaoke, and authentic hookah flavors.",
      details: "Enjoy pool, karaoke, and authentic hookah flavors with friends in a lively atmosphere. Our hookah lounge offers premium flavors and comfortable seating, while our game area features pool tables and entertainment options.",
      image: "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Barbershop on Site",
      icon: Scissors,
      summary: "Professional grooming services while you dine.",
      details: "Freshen up at our in-house barber while you wait for your order or during events. Our skilled barbers offer professional cuts and grooming services at affordable rates, making your visit a complete experience.",
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Pre-Orders & Catering",
      icon: Utensils,
      summary: "Order ahead for pickup or enjoy our catering services.",
      details: "Order your favorite meals in advance or let us cater your next event. We offer takeaway services and full catering packages for corporate events, parties, and special occasions with authentic African cuisine.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "Perfume Collection",
      icon: Award,
      summary: "Discover our curated collection of premium fragrances.",
      details: "Explore our curated collection of bold, African-inspired fragrances and international perfumes. We offer a wide selection of premium scents for both men and women, with testing available before purchase.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-20 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-kamalo-red">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              More than a restaurant – Kamalo City is a full experience offering dining, entertainment, and lifestyle services.
            </p>
          </div>

          {/* Services Grid with Collapsible Details */}
          <div className="space-y-6 fade-in">
            {services.map((service) => {
              const IconComponent = service.icon;
              const isExpanded = expandedService === service.id;
              
              return (
                <div 
                  key={service.id} 
                  className="bg-black/50 rounded-lg border border-gray-800 hover:border-kamalo-red transition-all duration-300 overflow-hidden"
                >
                  {/* Service Header - Always Visible */}
                  <div 
                    className="p-6 cursor-pointer flex items-center justify-between"
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={service.image}
                          alt={`Kamalo City - ${service.title}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-3">
                          <IconComponent className="w-6 h-6 text-kamalo-red" />
                          {service.title}
                        </h3>
                        <p className="text-gray-300">{service.summary}</p>
                      </div>
                    </div>
                    <div className="text-kamalo-red">
                      {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </div>

                  {/* Collapsible Details */}
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="relative h-48 rounded-lg overflow-hidden">
                          <img
                            src={service.image}
                            alt={`Kamalo City - ${service.title}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="text-gray-300 leading-relaxed text-lg">
                            {service.details}
                          </p>
                          <div className="mt-4">
                            <Button className="btn-primary">
                              <a href="tel:+27731598909">Learn More</a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <section className="text-center bg-black/50 rounded-lg p-8 border border-gray-800 mt-16 fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience <span className="text-kamalo-red">Kamalo City</span>?
            </h2>
            <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
              Visit us at 90 Voortrekker Road, Goodwood, Cape Town. Open 7 days a week from 11:00 AM to 11:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button className="btn-primary">
                <a href="tel:+27731598909" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
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