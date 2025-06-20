import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    document.title = "Menu - Kamalo City | Authentic African Cuisine";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our authentic African menu featuring traditional dishes, grilled meats, stews, and vegetable sides at Kamalo City in Cape Town.');
    }

    // Get current day for daily specials
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date().getDay();
    setCurrentDay(days[today]);
  }, []);

  // Complete menu items with all data provided
  const menuItems = [
    // Main Dishes
    {
      id: 1,
      category: "main",
      name: "Beef Stew (355g)",
      price: "R 133.65",
      description: "Tender beef chunks simmered in a rich tomato and brinjal sauce. Served with pap or rice and traditional vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Beef Stew",
      badge: "Customer Favourite"
    },
    {
      id: 2,
      category: "main",
      name: "Grilled Thomson",
      price: "R 133.65",
      description: "Chargrilled whole Thomson fish, marinated with African herbs and spices. Served with your choice of pap or rice and a veg side.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Thomson",
      badge: "House Special"
    },
    {
      id: 3,
      category: "main",
      name: "Grilled Pork (380g)",
      price: "R 133.65",
      description: "Juicy pork chops grilled to perfection. Comes with pap or rice and a traditional vegetable of your choice.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Pork",
      badge: "Chef Recommended"
    },
    {
      id: 4,
      category: "main",
      name: "Fried Thomson",
      price: "R 133.65",
      description: "Crispy-fried whole Thomson fish seasoned with aromatic spices. Served with pap or rice and traditional veg.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Thomson"
    },
    {
      id: 5,
      category: "main",
      name: "Grilled Chicken Quarter Leg",
      price: "R 146.50",
      description: "Smoky grilled chicken leg quarter, seasoned African-style. Served with pap or rice and traditional veg.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Chicken Quarter Leg"
    },

    // Vegetable Sides
    {
      id: 6,
      category: "vegetable-sides",
      name: "Spinach",
      price: "R 67.50",
      description: "Steamed green spinach prepared with light seasoning.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Spinach"
    },
    {
      id: 7,
      category: "vegetable-sides",
      name: "Ndunda",
      price: "R 67.50",
      description: "Earthy, nutrient-rich wild spinach — a Congolese classic.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ndunda"
    },
    {
      id: 8,
      category: "vegetable-sides",
      name: "Kasava Leaves",
      price: "R 67.50",
      description: "Creamy and flavorful cassava leaves slow-cooked with mild spices — a hearty traditional favourite.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Kasava Leaves"
    },
    {
      id: 9,
      category: "vegetable-sides",
      name: "Ngai Ngai",
      price: "R 67.50",
      description: "Tangy and leafy hibiscus and roselle greens with a sharp bite.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ngai Ngai"
    },
    {
      id: 10,
      category: "vegetable-sides",
      name: "Matembele",
      price: "R 67.50",
      description: "Sweet potato leaves cooked tender with a slightly nutty flavor.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Matembele"
    },
    {
      id: 11,
      category: "vegetable-sides",
      name: "Repu",
      price: "R 67.50",
      description: "Classic Congolese leafy green veg with a slightly bitter, robust taste.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Repu"
    },

    // Sides
    {
      id: 12,
      category: "sides",
      name: "Portion Pap",
      price: "R 13.50",
      description: "Traditional African maize porridge. Perfect with stews and grilled meats.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Portion Pap"
    },
    {
      id: 13,
      category: "sides",
      name: "Shikwanga (Sour Pap)",
      price: "R 33.75",
      description: "Fermented cassava wrap with a tangy edge — traditional and satisfying.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Shikwanga"
    },
    {
      id: 14,
      category: "sides",
      name: "Portion Rice",
      price: "R 54.00",
      description: "Fluffy white rice, ideal for soaking up rich sauces.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Portion Rice"
    },

    // Daily Specials - Monday
    {
      id: 15,
      category: "daily-specials",
      day: "monday",
      name: "Kapenta",
      price: "R 162.00",
      description: "Lightly fried kapenta fish in tomato sauce. Served with pap and vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Kapenta",
      badge: "Monday Only"
    },
    {
      id: 16,
      category: "daily-specials",
      day: "monday",
      name: "Ngolo (Cat Fish)",
      price: "R 162.00",
      description: "Slow-cooked catfish in a green pepper sauce. Comes with pap and veg of choice.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ngolo Cat Fish",
      badge: "Very Popular"
    },

    // Daily Specials - Tuesday
    {
      id: 17,
      category: "daily-specials",
      day: "tuesday",
      name: "Cooked Pork Trotters",
      price: "R 145.00",
      description: "Soft, flavorful pork trotters cooked with traditional seasonings.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cooked Pork Trotters",
      badge: "Tuesday Only"
    },
    {
      id: 18,
      category: "daily-specials",
      day: "tuesday",
      name: "Fried Mabundu",
      price: "R 120.00",
      description: "Fried offal pieces with bold spices and crispy edges.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Mabundu",
      badge: "Tuesday Only"
    },
    {
      id: 19,
      category: "daily-specials",
      day: "tuesday",
      name: "Cooked Beans",
      price: "R 95.00",
      description: "Creamy, slow-cooked African-style beans.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cooked Beans",
      badge: "Tuesday Only"
    },
    {
      id: 20,
      category: "daily-specials",
      day: "tuesday",
      name: "Madesu",
      price: "R 108.00",
      description: "Hearty Congolese red beans in a thick, savory sauce.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Madesu",
      badge: "Tuesday Only"
    },

    // Daily Specials - Wednesday
    {
      id: 21,
      category: "daily-specials",
      day: "wednesday",
      name: "Fried Makayabu",
      price: "R 108.00",
      description: "Deep-fried salt-dried fish with bold, salty flavor.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Makayabu",
      badge: "Wednesday Only"
    },
    {
      id: 22,
      category: "daily-specials",
      day: "wednesday",
      name: "Fried Tilapia",
      price: "R 135.00",
      description: "Lightly spiced whole tilapia, pan-fried till crisp.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Tilapia",
      badge: "Wednesday Only"
    },
    {
      id: 23,
      category: "daily-specials",
      day: "wednesday",
      name: "Fumbwa with Dry Fish",
      price: "R 108.00",
      description: "Rich forest greens cooked with dry fish and palm oil.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fumbwa with Dry Fish",
      badge: "Wednesday Only"
    },
    {
      id: 24,
      category: "daily-specials",
      day: "wednesday",
      name: "Peanut Butter Sauce with Dry Spinach",
      price: "R 95.00",
      description: "Creamy peanut sauce mixed with sun-dried spinach leaves.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Peanut Butter Sauce with Dry Spinach",
      badge: "Wednesday Only"
    },

    // Daily Specials - Thursday
    {
      id: 25,
      category: "daily-specials",
      day: "thursday",
      name: "Slight Pan-Fried Binzo",
      price: "R 125.00",
      description: "Lightly crisped binzo with seasoning.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Slight Pan-Fried Binzo",
      badge: "Thursday Only"
    },
    {
      id: 26,
      category: "daily-specials",
      day: "thursday",
      name: "Saka Madesu",
      price: "R 108.00",
      description: "Cassava leaves cooked in bean stew style.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Saka Madesu",
      badge: "Thursday Only"
    },
    {
      id: 27,
      category: "daily-specials",
      day: "thursday",
      name: "Mupanda Worms",
      price: "R 85.00",
      description: "Fried edible mopane worms, crispy and protein-rich.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Mupanda Worms",
      badge: "Thursday Only"
    },
    {
      id: 28,
      category: "daily-specials",
      day: "thursday",
      name: "Light Fried Pork Smoked Ribs",
      price: "R 155.00",
      description: "Charred pork ribs with a deep smoky flavor.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Light Fried Pork Smoked Ribs",
      badge: "Thursday Only"
    },
    {
      id: 29,
      category: "daily-specials",
      day: "thursday",
      name: "Cassava Leaves with Beans",
      price: "R 108.00",
      description: "A wholesome mix of cassava greens and red beans.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cassava Leaves with Beans",
      badge: "Thursday Only"
    },

    // Daily Specials - Friday
    {
      id: 30,
      category: "daily-specials",
      day: "friday",
      name: "Cooked Mukebuka Sauce",
      price: "R 95.00",
      description: "Rich and spicy sauce made from preserved fish.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cooked Mukebuka Sauce",
      badge: "Friday Only"
    },
    {
      id: 31,
      category: "daily-specials",
      day: "friday",
      name: "Cooked Beef Tripe (Mabumu)",
      price: "R 125.00",
      description: "Beef stomach slow-cooked until tender and rich.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cooked Beef Tripe",
      badge: "Friday Only"
    },

    // Daily Specials - Saturday
    {
      id: 32,
      category: "daily-specials",
      day: "saturday",
      name: "Beef Sticks",
      price: "R 40.50",
      description: "Flame-grilled skewered beef, marinated and juicy. Great snack!",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Beef Sticks",
      badge: "Saturday Only"
    },
    {
      id: 33,
      category: "daily-specials",
      day: "saturday",
      name: "Egusi Soup",
      price: "R 108.00",
      description: "A rich West African melon seed soup with deep, nutty flavors and savory meat, perfect for Saturday indulgence.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Egusi Soup",
      badge: "Popular"
    },

    // Daily Specials - Sunday
    {
      id: 34,
      category: "daily-specials",
      day: "sunday",
      name: "Liboke Ya Ngolo (Catfish in Leaves)",
      price: "R 175.00",
      description: "Catfish steamed in banana leaves with herbs and spices.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Liboke Ya Ngolo",
      badge: "Sunday Only"
    },
    {
      id: 35,
      category: "daily-specials",
      day: "sunday",
      name: "Mutu Ya Ntaba",
      price: "R 165.00",
      description: "Traditional goat meat stew with hot spices.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Mutu Ya Ntaba",
      badge: "Sunday Only"
    },
    {
      id: 36,
      category: "daily-specials",
      day: "sunday",
      name: "Goat in Hot Sauce",
      price: "R 165.00",
      description: "Spicy goat meat cooked in a bold chili-based sauce.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Goat in Hot Sauce",
      badge: "Sunday Only"
    }
  ];

  // Get today's specials for the top section
  const todaysSpecials = menuItems.filter(item => 
    item.category === "daily-specials" && item.day === currentDay
  );

  // Filter items based on active filter
  const filteredItems = activeFilter === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case "main": return "Main Dishes";
      case "vegetable-sides": return "Vegetable Sides";
      case "sides": return "Sides";
      case "daily-specials": return "Daily Specials";
      default: return category;
    }
  };

  const getCategoryTagline = (category: string) => {
    switch (category) {
      case "main": return "Try our bold traditional mains crafted with authentic African spices";
      case "vegetable-sides": return "Fresh, nutritious greens prepared the traditional way";
      case "sides": return "Perfect accompaniments to complete your meal";
      case "daily-specials": return "Unique dishes available only on specific days";
      default: return "";
    }
  };

  const getDayDisplayName = (day: string) => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Explore Our <span className="text-kamalo-red">Menu</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                At Kamalo City, every dish celebrates African tradition. From rich stews to spicy rice dishes, our menu is packed with flavour, culture, and love.
              </p>
            </div>
          </div>

          {/* Today's Specials Section - Top Priority */}
          {todaysSpecials.length > 0 && (
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-kamalo-red mb-4">
                  Today's Specials - {getDayDisplayName(currentDay)}
                </h2>
                <p className="text-gray-300 text-lg">Available only today - don't miss out!</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {todaysSpecials.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-gradient-to-br from-kamalo-red/20 to-red-900/20 rounded-lg overflow-hidden border-2 border-kamalo-red hover:scale-105 transition duration-300 group"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      <div className="relative h-48 md:h-full overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                        
                        <div className="absolute top-4 left-4">
                          <span className="text-xs text-white bg-kamalo-red px-3 py-1 rounded-full font-semibold">
                            TODAY ONLY
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-kamalo-red">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
                onClick={() => setActiveFilter("vegetable-sides")}
                className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                  activeFilter === "vegetable-sides" 
                    ? "bg-kamalo-red text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                🥬 Vegetable Sides
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

          {/* Category Header */}
          {activeFilter !== "all" && (
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {getCategoryDisplayName(activeFilter)}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {getCategoryTagline(activeFilter)}
              </p>
            </div>
          )}

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-black/50 rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition duration-300 group border border-gray-800 hover:border-kamalo-red"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="relative h-48 md:h-full overflow-hidden">
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
                          {item.badge.includes("Customer Favourite") && "🔥"} 
                          {item.badge.includes("House Special") && "⭐"} 
                          {item.badge.includes("Chef Recommended") && "👨‍🍳"} 
                          {item.badge}
                        </span>
                      </div>
                    )}
                    
                    {/* Category */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs text-kamalo-red bg-black/70 px-2 py-1 rounded-full capitalize">
                        {getCategoryDisplayName(item.category)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.name}</h3>
                      <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-kamalo-red">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to <span className="text-kamalo-red">Try It for Yourself</span>?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Experience authentic African cuisine and traditional flavors at Kamalo City in Cape Town.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  asChild 
                  className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300 font-semibold"
                >
                  <Link to="/reservations">Book a Table</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red hover:text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300 font-semibold"
                >
                  <a href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" target="_blank" rel="noopener noreferrer">
                    Order via WhatsApp
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