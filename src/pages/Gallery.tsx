import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ImageModal from "@/components/ImageModal";
import ScrollReveal from "@/components/ScrollReveal";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("food");

  useEffect(() => {
    document.title = "Gallery - Kamalo City | Photos of Food, Events & Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse our gallery showcasing authentic African cuisine, live events, and premium services at Kamalo City in Cape Town.');
    }
  }, []);

  const galleryItems = [
    // Food Category
    { 
      id: 1, 
      category: "food", 
      title: "Grilled African Cuisine", 
      caption: "Authentic grilled meats with traditional African spices and aromatic herbs",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Grilled African cuisine platter" 
    },
    { 
      id: 2, 
      category: "food", 
      title: "Traditional Stew", 
      caption: "Rich, hearty stews prepared with ancestral recipes and slow-cooked perfection",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Traditional African stew" 
    },
    { 
      id: 3, 
      category: "food", 
      title: "African Spice Collection", 
      caption: "Traditional spices and ingredients that create our authentic, bold flavors",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Traditional African spices and ingredients" 
    },
    { 
      id: 4, 
      category: "food", 
      title: "Fresh Vegetables", 
      caption: "Traditional African vegetables prepared with authentic cooking methods",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Traditional African vegetables" 
    },
    { 
      id: 5, 
      category: "food", 
      title: "Grilled Fish", 
      caption: "Fresh fish grilled to perfection with traditional seasonings",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Grilled fish" 
    },
    { 
      id: 6, 
      category: "food", 
      title: "Traditional Sides", 
      caption: "Pap, rice, and traditional accompaniments to complete your meal",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Traditional sides" 
    },

    // Events Category
    { 
      id: 7, 
      category: "events", 
      title: "Live Music Night", 
      caption: "Friday night live performances featuring talented African artists and cultural celebrations",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Live music performance" 
    },
    { 
      id: 8, 
      category: "events", 
      title: "Private Celebration", 
      caption: "Celebrating special moments with friends and family in our intimate venue",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Private event celebration" 
    },
    { 
      id: 9, 
      category: "events", 
      title: "Cultural Heritage Night", 
      caption: "Celebrating African heritage through music, dance, and storytelling",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Cultural celebration event" 
    },
    { 
      id: 10, 
      category: "events", 
      title: "Weekend Entertainment", 
      caption: "Saturday night entertainment with DJs and live performances",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Weekend entertainment" 
    },

    // Services Category
    { 
      id: 11, 
      category: "services", 
      title: "Restaurant Interior", 
      caption: "Warm, welcoming atmosphere that feels like home with authentic African décor",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Restaurant interior and ambiance" 
    },
    { 
      id: 12, 
      category: "services", 
      title: "Premium Hookah Lounge", 
      caption: "Relaxing hookah experience in our comfortable lounge with ambient lighting",
      image: "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Premium hookah lounge experience" 
    },
    { 
      id: 13, 
      category: "services", 
      title: "Professional Barbershop", 
      caption: "Expert grooming services with traditional and modern styling techniques",
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Professional barbershop service" 
    },
    { 
      id: 14, 
      category: "services", 
      title: "Game Area", 
      caption: "Pool tables and recreational activities for entertainment",
      image: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Game area with pool table" 
    },
    { 
      id: 15, 
      category: "services", 
      title: "Perfume Collection", 
      caption: "Curated selection of premium African-inspired fragrances",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Perfume collection" 
    },
    { 
      id: 16, 
      category: "services", 
      title: "Event Setup", 
      caption: "Professional event setup and catering services for private functions",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Event setup service" 
    }
  ];

  const filteredItems = galleryItems.filter(item => item.category === activeFilter);

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case "food": return "Food & Cuisine";
      case "events": return "Events & Entertainment";
      case "services": return "Services & Amenities";
      default: return category;
    }
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12 tribal-pattern">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-serif">
                Our <span className="text-kamalo-red">Gallery</span>
              </h1>
              <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Explore the vibrant world of Kamalo City through our collection of moments, 
                from delicious cuisine to exciting events and premium services.
              </p>
            </div>
          </ScrollReveal>

          {/* Filter Buttons - 3 buttons as requested */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                onClick={() => setActiveFilter("food")}
                className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold ${
                  activeFilter === "food" 
                    ? "bg-kamalo-red text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                🍽️ Food
              </Button>
              <Button
                onClick={() => setActiveFilter("events")}
                className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold ${
                  activeFilter === "events" 
                    ? "bg-kamalo-red text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                🎉 Events
              </Button>
              <Button
                onClick={() => setActiveFilter("services")}
                className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold ${
                  activeFilter === "services" 
                    ? "bg-kamalo-red text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                ⚡ Services
              </Button>
            </div>
          </ScrollReveal>

          {/* Category Header */}
          <ScrollReveal delay={300}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                {getCategoryDisplayName(activeFilter)}
              </h2>
              <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
            </div>
          </ScrollReveal>

          {/* Gallery Grid - 3 columns desktop, 2 columns mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 100}>
                <div className="bg-black/50 rounded-lg overflow-hidden border border-gray-800 hover:border-kamalo-red transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <ImageModal
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{item.caption}</p>
                      <span className="text-xs text-kamalo-red capitalize mt-2 block font-semibold">
                        {item.category.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollReveal delay={600}>
            <div className="text-center">
              <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
                  Experience <span className="text-kamalo-red">Kamalo City</span> Today
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Ready to create your own memories? Visit us for authentic African cuisine and entertainment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-primary">
                    <a href="/reservations">Book Your Table</a>
                  </Button>
                  <Button className="btn-ghost">
                    <a href="/contact">Visit Us Today</a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;