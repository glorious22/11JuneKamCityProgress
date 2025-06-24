import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("main");
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

    // Daily Specials - Saturday (Egusi Soup)
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
    }
  ];

  // Get today's specials for the top section
  const todaysSpecials = menuItems.filter(item => 
    item.category === "daily-specials" && item.day === currentDay
  );

  // Filter items based on active filter
  const filteredItems = menuItems.filter(item => item.category === activeFilter);

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

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12">
        <div className="site-container">
          {/* Header Section */}
          <div className="text-center section-spacing">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Explore Our <span className="text-kamalo-red">Menu</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Explore our menu filled with traditional dishes and local favorites. Authentic taste, unbeatable value.
              </p>
            </div>
          </div>

          {/* Today's Special Section - Compact */}
          {todaysSpecials.length > 0 && (
            <div className="section-spacing">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-kamalo-red mb-4">
                  Today's Special
                </h2>
                <p className="text-gray-300 text-lg">Available only today - don't miss out!</p>
              </div>
              
              <div className="max-w-2xl mx-auto bg-gradient-to-br from-kamalo-red/20 to-red-900/20 rounded-lg overflow-hidden border-2 border-kamalo-red mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="relative h-48 md:h-full overflow-hidden">
                    <img
                      src={todaysSpecials[0].image}
                      alt={todaysSpecials[0].alt}
                      className="dish-image w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className="text-xs text-white bg-kamalo-red px-3 py-1 rounded-full font-semibold">
                        TODAY ONLY
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-3">{todaysSpecials[0].name}</h3>
                    <p className="text-gray-300 text-base leading-relaxed mb-4">{todaysSpecials[0].description}</p>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-kamalo-red">
                        {todaysSpecials[0].price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="btn-ghost">
                  <Link to="#full-menu">See Full Menu</Link>
                </Button>
              </div>
            </div>
          )}

          {/* Menu Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-center">
            <p className="text-gray-800 font-semibold">
              📝 Vegetable sides all R67.50 • Daily Specials: R80 with pap, R90 with rice
            </p>
          </div>

          {/* Full Menu Section */}
          <div id="full-menu">
            {/* Filter Buttons */}
            <div className="sticky top-20 z-40 bg-kamalo-dark/95 backdrop-blur-sm py-4 mb-8">
              <div className="flex flex-wrap justify-center gap-3 overflow-x-auto pb-2">
                <Button
                  onClick={() => setActiveFilter("main")}
                  className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold ${
                    activeFilter === "main" 
                      ? "bg-kamalo-red text-white" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  🥘 Main Dishes
                </Button>
                <Button
                  onClick={() => setActiveFilter("vegetable-sides")}
                  className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold ${
                    activeFilter === "vegetable-sides" 
                      ? "bg-kamalo-red text-white" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  🥬 Vegetable Sides
                </Button>
                <Button
                  onClick={() => setActiveFilter("sides")}
                  className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold ${
                    activeFilter === "sides" 
                      ? "bg-kamalo-red text-white" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  🍟 Sides
                </Button>
                <Button
                  onClick={() => setActiveFilter("daily-specials")}
                  className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold ${
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {getCategoryDisplayName(activeFilter)}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {getCategoryTagline(activeFilter)}
              </p>
            </div>

            {/* Menu Grid - 2 columns layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="dish-card bg-[#fef9f3] text-gray-800"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="dish-image w-full h-full object-cover"
                        loading="lazy"
                      />
                      
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
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                        <span className="text-xl font-bold text-kamalo-red ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
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
                  <Button className="btn-primary">
                    <Link to="/reservations">Book a Table</Link>
                  </Button>
                  <Button className="btn-ghost">
                    <a href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" target="_blank" rel="noopener noreferrer">
                      Order via WhatsApp
                    </a>
                  </Button>
                </div>
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