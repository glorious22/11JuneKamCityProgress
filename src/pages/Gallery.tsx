import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ImageModal from "@/components/ImageModal";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    document.title = "Gallery - Kamalo City | Photos of Food, Events & Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse our gallery showcasing authentic African cuisine, live events, and premium services at Kamalo City in Cape Town.');
    }
  }, []);

  const galleryItems = [
    { 
      id: 1, 
      category: "signature-dishes", 
      title: "Grilled African Cuisine", 
      caption: "Authentic grilled meats with traditional African spices and aromatic herbs",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Grilled African cuisine platter" 
    },
    { 
      id: 2, 
      category: "signature-dishes", 
      title: "Traditional Stew", 
      caption: "Rich, hearty stews prepared with ancestral recipes and slow-cooked perfection",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Traditional African stew" 
    },
    { 
      id: 3, 
      category: "events", 
      title: "Live Music Night", 
      caption: "Friday night live performances featuring talented African artists and cultural celebrations",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Live music performance" 
    },
    { 
      id: 4, 
      category: "ambience", 
      title: "Premium Hookah Lounge", 
      caption: "Relaxing hookah experience in our comfortable lounge with ambient lighting",
      image: "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Premium hookah lounge experience" 
    },
    { 
      id: 5, 
      category: "events", 
      title: "Private Celebration", 
      caption: "Celebrating special moments with friends and family in our intimate venue",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Private event celebration" 
    },
    { 
      id: 6, 
      category: "culture", 
      title: "Professional Barbershop", 
      caption: "Expert grooming services with traditional and modern styling techniques",
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Professional barbershop service" 
    },
    { 
      id: 7, 
      category: "signature-dishes", 
      title: "African Spice Collection", 
      caption: "Traditional spices and ingredients that create our authentic, bold flavors",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Traditional African spices and ingredients" 
    },
    { 
      id: 8, 
      category: "culture", 
      title: "Cultural Heritage Night", 
      caption: "Celebrating African heritage through music, dance, and storytelling",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Cultural celebration event" 
    },
    { 
      id: 9, 
      category: "ambience", 
      title: "Restaurant Interior", 
      caption: "Warm, welcoming atmosphere that feels like home with authentic African décor",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Kamalo City - Restaurant interior and ambiance" 
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
            Our <span className="text-kamalo-red">Gallery</span>
          </h1>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Explore the vibrant world of Kamalo City through our collection of moments, 
              from delicious cuisine to exciting events and premium services.
            </p>
          </div>

          {/* Filter Buttons - Removed "All Items" */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveFilter("signature-dishes")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold ${
                activeFilter === "signature-dishes" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Signature Dishes
            </Button>
            <Button
              onClick={() => setActiveFilter("ambience")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold ${
                activeFilter === "ambience" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Ambience
            </Button>
            <Button
              onClick={() => setActiveFilter("events")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold ${
                activeFilter === "events" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Events
            </Button>
            <Button
              onClick={() => setActiveFilter("culture")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold ${
                activeFilter === "culture" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Culture
            </Button>
          </div>

          {/* Gallery Grid - 3 columns on desktop, 2 on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-black/50 rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg transition duration-300 group border border-gray-800 hover:border-kamalo-red"
              >
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
                    <span className="text-xs text-kamalo-red capitalize mt-2 block font-semibold">{item.category.replace('-', ' ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Experience <span className="text-kamalo-red">Kamalo City</span> Today
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Ready to create your own memories? Visit us for authentic African cuisine and entertainment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300 font-semibold"
                >
                  <a href="/reservations">Book Your Table</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red hover:text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300 font-semibold"
                >
                  <a href="/contact">Visit Us Today</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;