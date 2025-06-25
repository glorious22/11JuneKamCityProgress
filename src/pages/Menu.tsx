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
      name: "Grilled Thomson",
      description: "Well-seasoned grilled fish served with pap or rice and a side of veg.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Thomson"
    },
    {
      id: 2,
      category: "main",
      name: "Fried Thomson",
      description: "Crispy fried Thomson fish with pap or rice and traditional veg.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Thomson"
    },
    {
      id: 3,
      category: "main",
      name: "Beef Stew",
      description: "Classic African-style beef in a tomato and brinjal sauce.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Beef Stew"
    },
    {
      id: 4,
      category: "main",
      name: "Grilled Pork Chops",
      description: "Succulent pork grilled and paired with your choice of side.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Pork Chops"
    },
    {
      id: 5,
      category: "main",
      name: "Grilled Chicken Quarter Leg",
      description: "Juicy quarter chicken grilled and served with pap or rice.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Chicken Quarter Leg"
    },

    // Sides
    {
      id: 6,
      category: "sides",
      name: "Portion Pap",
      description: "Traditional pap served in a hearty portion.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Portion Pap"
    },
    {
      id: 7,
      category: "sides",
      name: "Shikwanga (Sour Pap)",
      description: "Fermented cassava for an authentic taste.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Shikwanga"
    },
    {
      id: 8,
      category: "sides",
      name: "Portion Rice",
      description: "Soft, fluffy rice perfect with any dish.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Portion Rice"
    },

    // Vegetable Sides
    {
      id: 9,
      category: "vegetable-sides",
      name: "Cassava Leaves (Pondu)",
      description: "Stewed cassava leaves with spices.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cassava Leaves"
    },
    {
      id: 10,
      category: "vegetable-sides",
      name: "Sweet Potato Leaves (Matembele)",
      description: "Tender sweet potato leaves sautéed in traditional style.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Matembele"
    },
    {
      id: 11,
      category: "vegetable-sides",
      name: "Ngai Ngai (Roselle Leaves)",
      description: "Slightly sour greens packed with nutrients.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ngai Ngai"
    },
    {
      id: 12,
      category: "vegetable-sides",
      name: "Ndunda (Wild Spinach)",
      description: "Bold-flavoured wild spinach, steamed to perfection.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ndunda"
    },
    {
      id: 13,
      category: "vegetable-sides",
      name: "Repu",
      description: "Earthy green vegetable — a local favourite.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Repu"
    },
    {
      id: 14,
      category: "vegetable-sides",
      name: "Green Spinach Sauce",
      description: "Smooth, rich spinach-based traditional sauce.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Green Spinach"
    }
  ];

  // Daily specials data
  const dailySpecials = {
    monday: [
      { name: "Fried Kapenta (Matemba)", description: "Fried small fish in a tomato sauce." },
      { name: "Ngolo (Catfish)", description: "Tender catfish with light green pepper sauce." }
    ],
    tuesday: [
      { name: "Cooked Pork Trotters", description: "Tender pork trotters slow-cooked to perfection." },
      { name: "Fried Mabundu", description: "Traditional preparation of organ meat." },
      { name: "Cooked Beans/Madesu", description: "Hearty beans cooked with traditional spices." }
    ],
    wednesday: [
      { name: "Fried Makayabu with Green Pepper Onion Relish", description: "Dried fish with fresh pepper and onion." },
      { name: "Fried Tilapia", description: "Fresh tilapia fish, perfectly seasoned and fried." },
      { name: "Fumbwa with Dry Fish", description: "Traditional wild spinach with dried fish." }
    ],
    thursday: [
      { name: "Light Fried Pork Smock Ribs", description: "Tender pork ribs with light seasoning." },
      { name: "Fried Mopane Worms (Mbinzo)", description: "Traditional protein-rich delicacy." },
      { name: "Saka Madesu", description: "Cassava leaves cooked with beans." }
    ],
    friday: [
      { name: "Cooked Beef Trips (Mabumu)", description: "Traditional beef tripe preparation." },
      { name: "Cooked Mukekuba in Light Tomato Sauce", description: "Fish cooked in aromatic tomato sauce." }
    ],
    saturday: [
      { name: "Egusi Soup", description: "Rich West African melon seed soup with deep, nutty flavors." },
      { name: "Cooked Beef Trips (Mabumu)", description: "Traditional beef tripe preparation." }
    ],
    sunday: [
      { name: "Mutu Ya Ntaba (Goat Head in Hot Sauce)", description: "Traditional goat head preparation in spicy sauce." },
      { name: "Liboke Ya Ngolo (Cut Fish)", description: "Fish prepared in traditional banana leaf style." }
    ]
  };

  // Get today's specials for highlighting
  const todaysSpecials = dailySpecials[currentDay as keyof typeof dailySpecials] || [];

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

  const getDayName = (day: string) => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-20 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Explore Our <span className="text-kamalo-red">Menu</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Authentic African cuisine crafted with traditional recipes and bold flavors
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              onClick={() => setActiveFilter("main")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold ${
                activeFilter === "main" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Main Dishes
            </Button>
            <Button
              onClick={() => setActiveFilter("sides")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold ${
                activeFilter === "sides" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Sides
            </Button>
            <Button
              onClick={() => setActiveFilter("vegetable-sides")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold ${
                activeFilter === "vegetable-sides" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Vegetable Sides
            </Button>
            <Button
              onClick={() => setActiveFilter("daily-specials")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold ${
                activeFilter === "daily-specials" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Daily Specials
            </Button>
          </div>

          {/* Category Header with Pricing Info */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {getCategoryDisplayName(activeFilter)}
            </h2>
            
            {/* Pricing Information */}
            {activeFilter === "main" && (
              <div className="bg-white rounded-lg p-4 text-center mb-8 max-w-2xl mx-auto">
                <p className="text-gray-800 font-bold">Dishes served with pap (R80) or rice (R90).</p>
              </div>
            )}
            
            {activeFilter === "sides" && (
              <div className="bg-white rounded-lg p-4 text-center mb-8 max-w-2xl mx-auto">
                <p className="text-gray-800 font-bold">Add any side to complete your meal.</p>
              </div>
            )}
            
            {activeFilter === "vegetable-sides" && (
              <div className="bg-white rounded-lg p-4 text-center mb-8 max-w-2xl mx-auto">
                <p className="text-gray-800 font-bold">All vegetables are R40. Choose your favourite traditional side.</p>
              </div>
            )}
            
            {activeFilter === "daily-specials" && (
              <div className="bg-white rounded-lg p-4 text-center mb-8 max-w-2xl mx-auto">
                <p className="text-gray-800 font-bold">All Daily Specials are R80 with pap or R90 with rice.</p>
                <p className="text-kamalo-gold text-sm mt-2 font-semibold">*Today's Specials are shown first when you click Daily Specials.*</p>
              </div>
            )}
          </div>

          {/* Daily Specials Full Week Display */}
          {activeFilter === "daily-specials" && (
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(dailySpecials).map(([day, specials]) => (
                  <div 
                    key={day} 
                    className={`bg-white rounded-lg p-6 shadow-lg transition-all duration-300 ${
                      day === currentDay 
                        ? 'ring-4 ring-kamalo-red ring-opacity-50 bg-red-50' 
                        : 'hover:shadow-xl'
                    }`}
                  >
                    <h4 className={`text-2xl font-bold mb-4 ${
                      day === currentDay ? 'text-kamalo-red' : 'text-gray-800'
                    }`}>
                      {getDayName(day)} {day === currentDay && '(Today)'}
                    </h4>
                    <div className="space-y-3">
                      {specials.map((special, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-kamalo-red">
                          <h5 className="text-lg font-semibold text-gray-800 mb-1">{special.name}</h5>
                          <p className="text-gray-600 text-sm">{special.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Menu Items - White Block Cards */}
          {activeFilter !== "daily-specials" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom CTA Section */}
          <div className="text-center">
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
      </main>
      <Footer />
    </div>
  );
};

export default Menu;