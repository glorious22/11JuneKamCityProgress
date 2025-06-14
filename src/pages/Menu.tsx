import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    document.title = "Menu - Kamalo City | Authentic African Cuisine";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our authentic African menu featuring traditional dishes, grilled meats, stews, and vegetable sides at Kamalo City in Cape Town.');
    }
  }, []);

  // Updated menu items with correct pricing and descriptions
  const menuItems = [
    // Main Dishes
    {
      id: 1,
      category: "main",
      name: "Jollof Rice & Chicken",
      price: "R 146.50",
      description: "Smoky jollof rice served with grilled chicken and spicy pepper sauce.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Jollof Rice & Chicken",
      badge: "Customer Favourite"
    },
    {
      id: 2,
      category: "main",
      name: "Beef Stew (355g)",
      price: "R 133.65",
      description: "Tender beef in a rich tomato and brinjal sauce. Served with pap or rice and vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Beef Stew"
    },
    {
      id: 3,
      category: "main",
      name: "Grilled Thomson",
      price: "R 133.65",
      description: "Well-seasoned grilled Thomson fish. Served with pap or rice and traditional vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Thomson"
    },
    {
      id: 4,
      category: "main",
      name: "Grilled Pork (380g)",
      price: "R 133.65",
      description: "Succulent grilled pork chops served with pap or rice and vegetables.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Pork"
    },
    {
      id: 5,
      category: "main",
      name: "Fried Thomson",
      price: "R 133.65",
      description: "Crispy fried Thomson fish with traditional African seasonings. Served with pap or rice.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Thomson"
    },
    {
      id: 6,
      category: "main",
      name: "Grilled Chicken Quarter Leg",
      price: "R 146.50",
      description: "Flame-grilled quarter chicken leg served with pap or rice and side vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Chicken Quarter Leg"
    },
    {
      id: 7,
      category: "main",
      name: "Hard Chicken",
      price: "R 146.50",
      description: "Traditional firm-textured chicken cooked with authentic African spices.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Hard Chicken"
    },
    // Soups
    {
      id: 8,
      category: "soups",
      name: "Igusi Soup",
      price: "R 108.00",
      description: "Rich traditional Nigerian soup with ground melon seeds and leafy vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Igusi Soup",
      badge: "Saturday Special"
    },
    {
      id: 9,
      category: "soups",
      name: "Fumbwa with Dry Fish",
      price: "R 108.00",
      description: "Traditional Congolese soup with wild spinach and dried fish.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fumbwa with Dry Fish",
      badge: "Wednesday Special"
    },
    // Sides
    {
      id: 10,
      category: "sides",
      name: "Portion Pap",
      price: "R 13.50",
      description: "Traditional maize porridge, a staple in African cuisine.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Portion Pap"
    },
    {
      id: 11,
      category: "sides",
      name: "Shikwanga (Sour Pap)",
      price: "R 33.75",
      description: "Fermented sour maize dough with a unique tangy flavor.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Shikwanga"
    },
    {
      id: 12,
      category: "sides",
      name: "Portion Rice",
      price: "R 54.00",
      description: "Perfectly steamed white rice to complement any main dish.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Portion Rice"
    },
    {
      id: 13,
      category: "sides",
      name: "Spinach",
      price: "R 67.50",
      description: "Fresh green spinach cooked with traditional African spices.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Spinach"
    },
    {
      id: 14,
      category: "sides",
      name: "Kasava Leaves",
      price: "R 67.50",
      description: "Tender cassava leaves with a unique and flavorful taste.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Kasava Leaves"
    },
    {
      id: 15,
      category: "sides",
      name: "Matembele",
      price: "R 67.50",
      description: "Sweet potato leaves prepared with traditional cooking methods.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Matembele"
    },
    // Daily Specials
    {
      id: 16,
      category: "daily-specials",
      name: "Kapenta (Monday)",
      price: "R 162.00",
      description: "Fried kapenta in rich tomato sauce. Served with pap and vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Kapenta",
      badge: "Monday Only"
    },
    {
      id: 17,
      category: "daily-specials",
      name: "Ngolo - Cat Fish (Monday)",
      price: "R 162.00",
      description: "Catfish cooked in green pepper sauce. Served with pap and vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ngolo Cat Fish",
      badge: "Monday Only"
    },
    {
      id: 18,
      category: "daily-specials",
      name: "Fried Makayabu (Wednesday)",
      price: "R 108.00",
      description: "Traditional fried makayabu fish with authentic African seasonings.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Makayabu",
      badge: "Wednesday Only"
    },
    {
      id: 19,
      category: "daily-specials",
      name: "Beef Sticks (Saturday)",
      price: "R 40.50",
      description: "Grilled beef sticks seasoned with traditional African spices.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Beef Sticks",
      badge: "Saturday Only"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case "main": return "Main Dishes";
      case "soups": return "Soups";
      case "sides": return "Sides";
      case "daily-specials": return "Daily Specials";
      default: return category;
    }
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our <span className="text-kamalo-red">Menu</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                At Kamalo City, every dish celebrates African tradition. From rich stews to spicy rice dishes, our menu is packed with flavour, culture, and love. Experience authentic African cuisine in Cape Town with traditional dishes and modern interpretations.
              </p>
            </div>
          </div>

          {/* Sticky Filter Buttons */}
          <div className="sticky top-20 z-40 bg-kamalo-dark/95 backdrop-blur-sm py-4 mb-8">
            <div className="flex flex-wrap justify-center gap-3 overflow-x-auto pb-2">
              <Button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                  activeFilter === "all" 
                    ? "bg-kamalo-red text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                🍽️ All Items
              </Button>
              <Button
                onClick={() => setActiveFilter("main")}
                className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                  activeFilter === "main" 
                    ? "bg-kamalo-red text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                🥘 Main Dishes
              </Button>
              <Button
                onClick={() => setActiveFilter("soups")}
                className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                  activeFilter === "soups" 
                    ? "bg-kamalo-red text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                🥣 Soups
              </Button>
              <Button
                onClick={() => setActiveFilter("sides")}
                className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                  activeFilter === "sides" 
                    ? "bg-kamalo-red text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                🍟 Sides
              </Button>
              <Button
                onClick={() => setActiveFilter("daily-specials")}
                className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                  activeFilter === "daily-specials" 
                    ? "bg-kamalo-red text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                ⭐ Daily Specials
              </Button>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-black/50 rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition duration-300 group border border-gray-800 hover:border-kamalo-red"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                  
                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="text-xs text-white bg-kamalo-red px-3 py-1 rounded-full font-semibold">
                        ⭐ {item.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Category */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-kamalo-red bg-black/70 px-2 py-1 rounded-full capitalize">
                      {getCategoryDisplayName(item.category)}
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="absolute bottom-4 right-4">
                    <span className="text-lg font-bold text-white bg-black/70 px-3 py-1 rounded-full">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to <span className="text-kamalo-red">Try It for Yourself</span>?
              </h2>
              <p className="text-gray-300 mb-6 text-base">
                Experience authentic African cuisine and traditional flavors at Kamalo City in Cape Town.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <Link to="/reservations">📅 Book a Table</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red hover:text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <a href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" target="_blank" rel="noopener noreferrer">
                    💬 Order via WhatsApp
                  </a>
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

export default Menu;