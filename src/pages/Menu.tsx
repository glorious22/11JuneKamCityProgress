import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("main");

  useEffect(() => {
    document.title = "Menu - Kamalo City | Authentic African Cuisine";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our authentic African menu featuring traditional dishes, grilled meats, stews, and vegetable sides at Kamalo City in Cape Town.');
    }
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
      alt: "Kamalo City - Grilled Thomson",
      tag: "⭐ Customer Favorite"
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
      alt: "Kamalo City - Beef Stew",
      tag: "🌟 Customer Favourite"
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
      alt: "Kamalo City - Grilled Chicken Quarter Leg",
      tag: "🔥 Most Popular"
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

  // Daily specials data - individual dishes
  const dailySpecials = [
    // Monday
    {
      id: 15,
      category: "daily-specials",
      name: "Fried Kapenta (Matemba) in Light Tomato Sauce",
      description: "Served with veg",
      day: "Monday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Kapenta",
      tag: "✅ Chef's Recommendation"
    },
    {
      id: 16,
      category: "daily-specials",
      name: "Cooked Ngolo with Light Green Pepper Sauce",
      description: "Served with veg",
      day: "Monday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cooked Ngolo"
    },

    // Tuesday
    {
      id: 17,
      category: "daily-specials",
      name: "Cooked Pork Trotters (Makoso)",
      description: "Served with veg",
      day: "Tuesday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Pork Trotters"
    },
    {
      id: 18,
      category: "daily-specials",
      name: "Fried Mabundu",
      description: "Traditional preparation of organ meat",
      day: "Tuesday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Mabundu"
    },
    {
      id: 19,
      category: "daily-specials",
      name: "Cooked Beans (Madesu)",
      description: "Traditional Congolese beans cooked in rich sauce",
      day: "Tuesday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cooked Beans"
    },
    {
      id: 20,
      category: "daily-specials",
      name: "Rougf",
      description: "Fried seasoned meat cuts, classic Tuesday treat",
      day: "Tuesday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Rougf"
    },

    // Wednesday
    {
      id: 21,
      category: "daily-specials",
      name: "Fried Makayabu with Green Pepper Onion Relish",
      description: "Fried salt fish with pepper onion relish",
      day: "Wednesday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Makayabu"
    },
    {
      id: 22,
      category: "daily-specials",
      name: "Fried Tilapia",
      description: "Lightly seasoned tilapia, crispy fried",
      day: "Wednesday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fried Tilapia",
      tag: "🌟 Customer Favourite"
    },
    {
      id: 23,
      category: "daily-specials",
      name: "Fumbwa with Dry Fish",
      description: "Wild spinach in peanut sauce with dry fish",
      day: "Wednesday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Fumbwa"
    },
    {
      id: 24,
      category: "daily-specials",
      name: "Peanut Butter Sauce with Dry Spinach",
      description: "Dried spinach cooked in creamy peanut butter sauce",
      day: "Wednesday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Peanut Butter Sauce"
    },

    // Thursday
    {
      id: 25,
      category: "daily-specials",
      name: "Light Fried Pork Smock Ribs",
      description: "Lightly fried smoky pork ribs, crispy outside, tender inside",
      day: "Thursday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Pork Smock Ribs"
    },
    {
      id: 26,
      category: "daily-specials",
      name: "Slight Pinfried Mbinzo",
      description: "Mopane worms pan-fried with light seasoning",
      day: "Thursday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Mbinzo"
    },
    {
      id: 27,
      category: "daily-specials",
      name: "Mupanda Worms",
      description: "Traditional protein-rich delicacy",
      day: "Thursday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Mupanda Worms"
    },
    {
      id: 28,
      category: "daily-specials",
      name: "Saka Madesu",
      description: "Beans and cassava leaves, rich in flavor",
      day: "Thursday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Saka Madesu"
    },
    {
      id: 29,
      category: "daily-specials",
      name: "Cassava Leaves with Beans",
      description: "Cassava leaves stewed with seasoned beans. Traditional Congolese favorite",
      day: "Thursday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cassava Leaves with Beans"
    },

    // Friday
    {
      id: 30,
      category: "daily-specials",
      name: "Cooked Mukebuka Sauce",
      description: "Mukebuka fish in a light tomato sauce",
      day: "Friday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Mukebuka Sauce"
    },
    {
      id: 31,
      category: "daily-specials",
      name: "Cooked Beef Trips (Mabumu)",
      description: "Richly spiced beef tripe stew",
      day: "Friday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Beef Trips"
    },

    // Saturday
    {
      id: 32,
      category: "daily-specials",
      name: "Egusi Soup",
      description: "Ground melon seed soup cooked with beef",
      day: "Saturday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Egusi Soup",
      tag: "🔥 Most Popular"
    },
    {
      id: 33,
      category: "daily-specials",
      name: "Cooked Beef Trips (Mabumu)",
      description: "Rich beef tripe stew",
      day: "Saturday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Beef Trips Saturday"
    },

    // Sunday
    {
      id: 34,
      category: "daily-specials",
      name: "Liboke Ya Ngolo (Cat Fish)",
      description: "Steamed catfish wrapped in banana leaves with traditional spices",
      day: "Sunday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Liboke Ya Ngolo"
    },
    {
      id: 35,
      category: "daily-specials",
      name: "Mutu Ya Ntaba (Goat Head in Hot Sauce)",
      description: "Spicy goat head stew served the traditional way",
      day: "Sunday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Mutu Ya Ntaba"
    }
  ];

  // Filter items based on active filter
  const filteredItems = activeFilter === "daily-specials" 
    ? dailySpecials 
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

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-20 px-4 pb-12" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
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
            <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
            
            {/* Daily Specials specific header */}
            {activeFilter === "daily-specials" && (
              <div className="mb-8">
                <p className="text-lg text-gray-300 mb-4">
                  <em>(Note: Uber Eats prices are higher than in-restaurant prices.)</em>
                </p>
                <div className="bg-white rounded-lg p-4 text-center mb-8 max-w-2xl mx-auto">
                  <p className="text-gray-800 font-bold">All Daily Specials are R80 with pap or R90 with rice.</p>
                </div>
              </div>
            )}
            
            {/* Pricing Information for other sections */}
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
          </div>

          {/* Menu Items - White Block Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" style={{ gap: '24px' }}>
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
                style={{ borderRadius: '12px' }}
              >
                {/* Day label for daily specials */}
                {activeFilter === "daily-specials" && 'day' in item && (
                  <div 
                    className="absolute top-3 right-3 z-10"
                    style={{
                      backgroundColor: '#FFD700',
                      color: '#2C2C2C',
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontWeight: '600'
                    }}
                  >
                    {item.day}
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    {item.tag && (
                      <span 
                        style={{
                          backgroundColor: '#FFD700',
                          color: '#2C2C2C',
                          fontSize: '0.75rem',
                          padding: '2px 8px',
                          borderRadius: '999px',
                          marginLeft: '6px',
                          fontWeight: 'bold'
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

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

          {/* Final Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-gray-400 italic text-sm">
              *Note: In-restaurant prices differ from Uber Eats pricing.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;