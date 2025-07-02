import { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [openDetails, setOpenDetails] = useState<string | null>(null);
  const [showPerfumeModal, setShowPerfumeModal] = useState(false);
  const [activeCollection, setActiveCollection] = useState<'men' | 'women'>('men');

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

  const mensPerfumes = [
    { name: "African Musk", description: "Deep, earthy scent with traditional African oils" },
    { name: "Sahara Nights", description: "Warm, spicy blend perfect for evening wear" },
    { name: "Baobab Essence", description: "Fresh, woody fragrance inspired by the African savanna" },
    { name: "Kalahari Gold", description: "Rich, luxurious scent with hints of amber and sandalwood" },
    { name: "Congo River", description: "Fresh, aquatic fragrance with green notes" },
    { name: "Serengeti Storm", description: "Bold, powerful scent with leather and tobacco notes" }
  ];

  const womensPerfumes = [
    { name: "Jasmine Nights", description: "Floral, romantic scent with African jasmine" },
    { name: "Shea Blossom", description: "Soft, creamy fragrance with shea butter notes" },
    { name: "Marula Breeze", description: "Light, fruity scent perfect for daytime" },
    { name: "African Rose", description: "Classic rose with exotic African spices" },
    { name: "Vanilla Sunset", description: "Warm, sweet fragrance with vanilla and honey" },
    { name: "Hibiscus Dream", description: "Fresh, tropical scent with floral notes" }
  ];

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
      image: "https://live.staticflickr.com/65535/54623833912_78cffedfe2_c.jpg",
      tag: "🔥 Popular"
    },
    {
      id: "hookah-lounge",
      title: "Hookah Lounge – Flavored Relaxation in Cape Town",
      summary: "Enjoy rich flavored hookah in a relaxed ambiance. Choose from over 10 popular African flavors. Available all day in our shaded lounge.",
      icon: "💨",
      details: [
        "Premium hookah with mint, apple, and fruity blends",
        "Ambient lounge with low lights",
        "Live DJs and flowing drinks",
        "Must be 18+",
        "Available throughout operating hours"
      ],
      image: "https://live.staticflickr.com/65535/54575639694_9a16f68006_c.jpg"
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
      image: "https://live.staticflickr.com/65535/54624923824_0590af3293_c.jpg"
    },
    {
      id: "barbershop",
      title: "Barber Shop – African Grooming Experience: The Kamalo Cut",
      summary: "Expert grooming services while you dine",
      icon: "✂️",
      details: [
        "Professional cuts for R60",
        "Male clients only",
        "Open daily from 11am",
        "Walk-in service available",
        "Fresh cuts in relaxed atmosphere"
      ],
      image: "https://live.staticflickr.com/65535/54575789460_fcb466083e_c.jpg"
    },
    {
      id: "perfume-collection",
      title: "Perfumes – Exclusive Scent Boutique Featuring African Oils",
      summary: "Curated African-inspired fragrances",
      icon: "🧴",
      details: [
        "Long-lasting, oil-based perfumes",
        "Designer-inspired favorites",
        "Test any fragrance before buying",
        "Men's and women's collections",
        "Unique African-inspired blends"
      ],
      image: "https://live.staticflickr.com/65535/54575452291_291822c7a2_c.jpg",
      hasModal: true
    },
    {
      id: "pre-order-catering",
      title: "Pre-Order & Catering",
      summary: "Order your dish in advance and we'll have it ready within 20 minutes. Pick-up only — no delivery available yet.",
      icon: "📦",
      details: [
        "Order ahead for quick pickup",
        "Ready within 20 minutes",
        "Pick-up only service",
        "Full catering for events",
        "Custom menu planning available"
      ],
      image: "https://live.staticflickr.com/65535/54575452741_3649c67820_c.jpg"
    },
    {
      id: "game-nights",
      title: "Game Nights",
      summary: "We're preparing game nights with pool tournaments, card games, and more. Coming soon — stay tuned!",
      icon: "🎯",
      details: [
        "Pool tournaments",
        "Card games and board games",
        "Weekly competitions with prizes",
        "Social gaming atmosphere",
        "Perfect for groups and friends"
      ],
      image: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "🚀 Coming Soon",
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12 tribal-pattern">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Explore Our <span className="text-kamalo-red">African-Inspired Offerings</span>
            </h1>
            <div className="congo-pattern-divider"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover what makes Kamalo City more than a restaurant.
            </p>
          </div>

          {/* Services Grid - 2 columns desktop, 1 column mobile with equal heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={service.id} className="bg-black/50 text-white border border-gray-800 hover:border-kamalo-red rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl relative flex flex-col min-h-[500px]">
                {/* Tag for popular service or coming soon */}
                {service.tag && (
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold z-10 ${
                    service.comingSoon 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-kamalo-gold text-gray-800'
                  }`}>
                    {service.tag}
                  </div>
                )}
                
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden rounded-lg mb-6">
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
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-kamalo-gold mb-4 font-serif">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{service.summary}</p>
                  
                  {/* Details Button */}
                  <button
                    onClick={() => toggleDetails(service.id)}
                    className="w-full border-2 border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-all duration-300 font-semibold flex items-center justify-center gap-2 min-h-[44px] mt-auto"
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
                    <div className="pt-4 border-t border-gray-700">
                      <ul className="space-y-2">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <span className="text-kamalo-red font-bold mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* View Full Collection Button for Perfumes */}
                      {service.hasModal && (
                        <button
                          onClick={() => setShowPerfumeModal(true)}
                          className="mt-4 w-full bg-kamalo-gold text-gray-800 px-6 py-3 rounded-full hover:bg-yellow-500 transition-all duration-300 font-semibold"
                        >
                          View Full Collection
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-black/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
              Ready to Experience <span className="text-kamalo-red">Kamalo City</span>?
            </h2>
            <div className="congo-pattern-divider"></div>
            <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
              Visit us at 90 Voortrekker Road, Goodwood, Cape Town. Open 7 days a week from 11:00 AM to 11:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button className="btn-primary-slim min-h-[44px]">
                <a href="tel:+27736911461" className="flex items-center gap-2">
                  📞 Call Us
                </a>
              </Button>
              <Button className="btn-ghost-slim min-h-[44px]">
                <a href="/reservations">Make Reservation</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Perfume Collection Modal */}
      {showPerfumeModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-kamalo-dark border border-gray-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white font-serif">Perfume Collection</h2>
              <button
                onClick={() => setShowPerfumeModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Collection Toggles */}
            <div className="flex border-b border-gray-700">
              <button
                onClick={() => setActiveCollection('men')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeCollection === 'men' 
                    ? 'bg-kamalo-red text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Men's Collection
              </button>
              <button
                onClick={() => setActiveCollection('women')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeCollection === 'women' 
                    ? 'bg-kamalo-red text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Women's Collection
              </button>
            </div>

            {/* Perfume List */}
            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(activeCollection === 'men' ? mensPerfumes : womensPerfumes).map((perfume, index) => (
                  <div key={index} className="bg-black/50 rounded-lg p-4 border border-gray-800">
                    <h3 className="text-lg font-bold text-kamalo-gold mb-2">{perfume.name}</h3>
                    <p className="text-gray-300 text-sm">{perfume.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Services;