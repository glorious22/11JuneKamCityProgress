import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
    { id: 1, category: "food", title: "Grilled African Cuisine", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Kamalo City - Grilled African cuisine platter" },
    { id: 2, category: "food", title: "Traditional Stew", image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Kamalo City - Traditional African stew" },
    { id: 3, category: "events", title: "Live Music Night", image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Kamalo City - Live music performance" },
    { id: 4, category: "services", title: "Hookah Lounge", image: "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Kamalo City - Premium hookah lounge experience" },
    { id: 5, category: "events", title: "Private Event", image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Kamalo City - Private event celebration" },
    { id: 6, category: "services", title: "Barbershop Service", image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Kamalo City - Professional barbershop service" },
    { id: 7, category: "food", title: "African Spices", image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Kamalo City - Traditional African spices and ingredients" },
    { id: 8, category: "events", title: "Cultural Night", image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Kamalo City - Cultural celebration event" },
    { id: 9, category: "services", title: "Restaurant Interior", image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Kamalo City - Restaurant interior and ambiance" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="text-kamalo-red">Gallery</span>
          </h1>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-300">
              Explore the vibrant world of Kamalo City through our collection of moments, 
              from delicious cuisine to exciting events and premium services.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg ${
                activeFilter === "all" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All
            </Button>
            <Button
              onClick={() => setActiveFilter("food")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg ${
                activeFilter === "food" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Food
            </Button>
            <Button
              onClick={() => setActiveFilter("events")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg ${
                activeFilter === "events" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Events
            </Button>
            <Button
              onClick={() => setActiveFilter("services")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg ${
                activeFilter === "services" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Services
            </Button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-black/50 rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg transition duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <span className="text-sm text-kamalo-red capitalize">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Experience <span className="text-kamalo-red">Kamalo City</span> Today
              </h2>
              <p className="text-gray-300 mb-6 text-base">
                Ready to create your own memories? Visit us for authentic African cuisine and entertainment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <a href="/reservations">Book Your Table</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red hover:text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
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