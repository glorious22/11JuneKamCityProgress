import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const Services = () => {
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

  const services = [
    {
      id: "restaurant-dining",
      title: "Restaurant Dining",
      summary: "Enjoy our authentic African cuisine in a warm, welcoming atmosphere.",
      icon: "🍽️",
      details: [
        "Sit-down meals with full menu",
        "Traditional & modern African recipes", 
        "Friendly, family-style service",
        "Open 7 days a week, 11:00 AM - 11:00 PM"
      ],
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "live-entertainment",
      title: "Live Entertainment",
      summary: "Experience music, dance, and energy every weekend.",
      icon: "🎉",
      details: [
        "Live DJs every weekend",
        "Cultural dance nights",
        "Afrobeat + Amapiano blends",
        "Friday and Saturday night entertainment",
        "Special guest appearances"
      ],
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "🔥 Popular"
    },
    {
      id: "hookah-lounge",
      title: "Hookah Lounge",
      summary: "Premium hookah experience daily from 6 PM",
      icon: "💨",
      details: [
        "Premium hookah with mint, apple, and fruity blends",
        "Ambient lounge with low lights",
        "Live DJs and flowing drinks",
        "Must be 18+",
        "Available throughout operating hours"
      ],
      image: "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "venue-hire",
      title: "Private Venue Hire",
      summary: "Book our unique space for your private events and functions.",
      icon: "🎲",
      details: [
        "Ideal for parties, dinners, small events",
        "Custom décor and music allowed",
        "Flexible layout options",
        "Accommodates up to 80 guests",
        "Full catering services available"
      ],
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "barbershop",
      title: "Professional Barbershop",
      summary: "Expert grooming services while you dine",
      icon: "✂️",
      details: [
        "Professional cuts for R60",
        "Male clients only",
        "Open daily from 11am",
        "Walk-in service available",
        "Fresh cuts in relaxed atmosphere"
      ],
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "perfume-collection",
      title: "Signature Scents",
      summary: "Curated African-inspired fragrances",
      icon: "🧴",
      details: [
        "Long-lasting, oil-based perfumes",
        "Designer-inspired favorites",
        "Test any fragrance before buying",
        "Men's and women's collections",
        "Unique African-inspired blends"
      ],
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12 tribal-pattern">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
                Our Main <span className="text-kamalo-red">Services</span>
              </h1>
              <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Explore what makes Kamalo City more than a restaurant.
              </p>
            </div>
          </ScrollReveal>

          {/* Services Grid - 2 columns desktop, 1 column mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 200}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
                  {/* Tag for popular service */}
                  {service.tag && (
                    <div className="absolute top-3 right-3 bg-kamalo-gold text-gray-800 px-3 py-1 rounded-full text-xs font-bold z-10">
                      {service.tag}
                    </div>
                  )}
                  
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`Kamalo City - ${service.title}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4 text-3xl">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.summary}</p>
                    
                    {/* Details Button */}
                    <button
                      onClick={() => toggleDetails(service.id)}
                      className="w-full border-2 border-kamalo-gold text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-gold hover:text-gray-800 transition-all duration-300 font-semibold flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      {openDetails === service.id ? 'Hide Details' : 'Details'}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openDetails === service.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Collapsible Details */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openDetails === service.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-gray-200">
                        <ul className="space-y-2">
                          {service.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-600">
                              <span className="text-kamalo-red font-bold mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact CTA */}
          <ScrollReveal delay={600}>
            <div className="text-center bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
                Ready to Experience <span className="text-kamalo-red">Kamalo City</span>?
              </h2>
              <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
                Visit us at 90 Voortrekker Road, Goodwood, Cape Town. Open 7 days a week from 11:00 AM to 11:00 PM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button className="btn-primary min-h-[44px]">
                  <a href="tel:+27731598909" className="flex items-center gap-2">
                    📞 Call Us
                  </a>
                </Button>
                <Button className="btn-ghost min-h-[44px]">
                  <a href="/reservations">Make Reservation</a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;