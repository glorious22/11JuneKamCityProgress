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
      name: "Beef Stew (355g)",
      price: "R 133.65",
      description: "Beef in a light tomato and brinjal sauce. Served with pap or rice and vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Beef Stew"
    },
    {
      id: 2,
      category: "main",
      name: "Grilled Thomson",
      price: "R 133.65",
      description: "Well-seasoned grilled Thomson. Served with pap or rice and traditional vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Thomson"
    },
    {
      id: 3,
      category: "main",
      name: "Grilled Pork (380g)",
      price: "R 133.65",
      description: "Grilled pork chops served with pap or rice and vegetables.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Pork"
    },
    {
      id: 4,
      category: "main",
      name: "Fried Thomson",
      price: "R 133.65",
      description: "Fried and seasoned Thomson with pap or rice and traditional vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Thomson"
    },
    {
      id: 5,
      category: "main",
      name: "Grilled Chicken Quarter Leg",
      price: "R 146.50",
      description: "Flame-grilled quarter chicken leg served with pap or rice and side vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Chicken Quarter Leg"
    },
    {
      id: 6,
      category: "main",
      name: "Hard Chicken",
      price: "R 146.50",
      description: "Firm-textured chicken cooked traditionally. Served with pap or rice.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Hard Chicken"
    },
    // Sides
    {
      id: 7,
      category: "sides",
      name: "Portion Pap",
      price: "R 13.50",
      description: "Traditional maize porridge.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Portion Pap"
    },
    {
      id: 8,
      category: "sides",
      name: "Shikwanga (Sour Pap)",
      price: "R 33.75",
      description: "Fermented sour maize dough.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Shikwanga"
    },
    {
      id: 9,
      category: "sides",
      name: "Portion Rice",
      price: "R 54.00",
      description: "Steamed white rice.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Portion Rice"
    },
    // Vegetable Sides
    {
      id: 10,
      category: "veg-sides",
      name: "Spinach",
      price: "R 67.50",
      description: "Green spinach.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Spinach"
    },
    {
      id: 11,
      category: "veg-sides",
      name: "Ndunda",
      price: "R 67.50",
      description: "Wild spinach.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ndunda"
    },
    {
      id: 12,
      category: "veg-sides",
      name: "Kasava Leaves",
      price: "R 67.50",
      description: "Tender cassava leaves.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Kasava Leaves"
    },
    {
      id: 13,
      category: "veg-sides",
      name: "Ngai Ngai",
      price: "R 67.50",
      description: "Hibiscus and roselle leaves.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ngai Ngai"
    },
    {
      id: 14,
      category: "veg-sides",
      name: "Matembele",
      price: "R 67.50",
      description: "Sweet potato leaves.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Matembele"
    },
    {
      id: 15,
      category: "veg-sides",
      name: "Repu",
      price: "R 67.50",
      description: "Traditional Congolese leafy green.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Repu"
    },
    // Daily Specials - Monday
    {
      id: 16,
      category: "daily-specials",
      name: "Kapenta (Monday)",
      price: "R 162.00",
      description: "Fried kapenta in tomato sauce. Served with pap and veg.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Kapenta"
    },
    {
      id: 17,
      category: "daily-specials",
      name: "Ngolo - Cat Fish (Monday)",
      price: "R 162.00",
      description: "Catfish cooked in green pepper sauce. Served with pap and veg.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ngolo Cat Fish"
    },
    // Daily Specials - Tuesday
    {
      id: 18,
      category: "daily-specials",
      name: "Cooked Pork Trotters (Tuesday)",
      price: "R 108.00",
      description: "Traditional cooked pork trotters.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cooked Pork Trotters"
    },
    {
      id: 19,
      category: "daily-specials",
      name: "Fried Mabundu (Tuesday)",
      price: "R 108.00",
      description: "Fried mabundu traditional dish.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Mabundu"
    },
    {
      id: 20,
      category: "daily-specials",
      name: "Cooked Beans (Tuesday)",
      price: "R 108.00",
      description: "Traditional cooked beans.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cooked Beans"
    },
    // Daily Specials - Wednesday
    {
      id: 21,
      category: "daily-specials",
      name: "Fried Makayabu (Wednesday)",
      price: "R 108.00",
      description: "Fried makayabu fish.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Makayabu"
    },
    {
      id: 22,
      category: "daily-specials",
      name: "Fried Tilapia (Wednesday)",
      price: "R 108.00",
      description: "Fresh fried tilapia fish.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Tilapia"
    },
    {
      id: 23,
      category: "daily-specials",
      name: "Fumbwa with Dry Fish (Wednesday)",
      price: "R 108.00",
      description: "Traditional fumbwa with dry fish.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fumbwa with Dry Fish"
    },
    // Daily Specials - Friday
    {
      id: 24,
      category: "daily-specials",
      name: "Cooked Beef Tripe - Mabumu (Friday)",
      price: "R 108.00",
      description: "Traditional cooked beef tripe.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cooked Beef Tripe"
    },
    // Daily Specials - Saturday
    {
      id: 25,
      category: "daily-specials",
      name: "Igusi Soup (Saturday)",
      price: "R 108.00",
      description: "Traditional igusi soup.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Igusi Soup"
    },
    {
      id: 26,
      category: "daily-specials",
      name: "Beef Sticks (Saturday)",
      price: "R 40.50",
      description: "Grilled beef sticks.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Beef Sticks"
    },
    // Daily Specials - Sunday
    {
      id: 27,
      category: "daily-specials",
      name: "Liboke Ya Ngolo (Sunday)",
      price: "R 108.00",
      description: "Traditional liboke ya ngolo catfish.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Liboke Ya Ngolo"
    },
    {
      id: 28,
      category: "daily-specials",
      name: "Goat Hard Hot Sauce (Sunday)",
      price: "R 108.00",
      description: "Goat meat in spicy hot sauce.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Goat Hard Hot Sauce"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case "main": return "Main Dishes";
      case "veg-sides": return "Vegetable Sides";
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="text-kamalo-red">Menu</span>
          </h1>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-300">
              Discover authentic African flavors with our carefully crafted dishes, 
              made from traditional recipes and the freshest ingredients.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 overflow-x-auto pb-2">
            <Button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                activeFilter === "all" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Items
            </Button>
            <Button
              onClick={() => setActiveFilter("main")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                activeFilter === "main" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Main Dishes
            </Button>
            <Button
              onClick={() => setActiveFilter("sides")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                activeFilter === "sides" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Sides
            </Button>
            <Button
              onClick={() => setActiveFilter("veg-sides")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                activeFilter === "veg-sides" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Vegetable Sides
            </Button>
            <Button
              onClick={() => setActiveFilter("daily-specials")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                activeFilter === "daily-specials" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Daily Specials
            </Button>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-black/50 rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg transition duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs text-kamalo-red bg-black/70 px-2 py-1 rounded-full capitalize">
                      {getCategoryDisplayName(item.category)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-lg font-bold text-white bg-black/70 px-3 py-1 rounded-full">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center mt-16">
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to <span className="text-kamalo-red">Taste Kamalo City</span>?
              </h2>
              <p className="text-gray-300 mb-6 text-base">
                Visit us for authentic African cuisine or pre-order your favorites for pickup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <Link to="/reservations">Book Your Table</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red hover:text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <a href="https://www.ubereats.com/za/store/kamalo-city-restaurant/srnMses4VESmEwzdo4gxrw" target="_blank" rel="noopener noreferrer">
                    Order on Uber Eats
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