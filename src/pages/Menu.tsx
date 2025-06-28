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
      description: "Well-seasoned grilled fish served with pap or rice and a side of traditional vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Grilled Thomson",
      tag: "⭐ Customer Favorite"
    },
    {
      id: 2,
      category: "main",
      name: "Fried Thomson",
      description: "Crispy fried Thomson fish with pap or rice and traditional vegetables.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Fried Thomson"
    },
    {
      id: 3,
      category: "main",
      name: "Beef Stew",
      description: "Classic African-style beef in a rich tomato and brinjal sauce.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Beef Stew",
      tag: "🔥 Chef's Pick"
    },
    {
      id: 4,
      category: "main",
      name: "Grilled Pork Chops",
      description: "Succulent pork grilled to perfection and paired with your choice of side.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Grilled Pork Chops"
    },
    {
      id: 5,
      category: "main",
      name: "Grilled Chicken Quarter Leg",
      description: "Juicy quarter chicken grilled and served with pap or rice.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Grilled Chicken Quarter Leg",
      tag: "🔥 Most Popular"
    },

    // Sides
    {
      id: 6,
      category: "sides",
      name: "Portion Pap",
      description: "Traditional pap served in a hearty portion, perfect with any dish.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Portion Pap"
    },
    {
      id: 7,
      category: "sides",
      name: "Shikwanga (Sour Pap)",
      description: "Fermented cassava for an authentic traditional taste experience.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Shikwanga"
    },
    {
      id: 8,
      category: "sides",
      name: "Portion Rice",
      description: "Soft, fluffy rice that's perfect with any of our main dishes.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Portion Rice"
    },

    // Vegetable Sides
    {
      id: 9,
      category: "vegetable-sides",
      name: "Cassava Leaves (Pondu)",
      description: "Stewed cassava leaves with traditional spices and seasonings.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Cassava Leaves"
    },
    {
      id: 10,
      category: "vegetable-sides",
      name: "Sweet Potato Leaves (Matembele)",
      description: "Tender sweet potato leaves sautéed in traditional African style.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Matembele"
    },
    {
      id: 11,
      category: "vegetable-sides",
      name: "Ngai Ngai (Roselle Leaves)",
      description: "Slightly sour greens packed with nutrients and bold flavor.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Ngai Ngai"
    },
    {
      id: 12,
      category: "vegetable-sides",
      name: "Ndunda (Wild Spinach)",
      description: "Bold-flavoured wild spinach, steamed to perfection.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Ndunda"
    },
    {
      id: 13,
      category: "vegetable-sides",
      name: "Repu",
      description: "Earthy green vegetable — a local favourite with unique taste.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Repu"
    },
    {
      id: 14,
      category: "vegetable-sides",
      name: "Green Spinach Sauce",
      description: "Smooth, rich spinach-based traditional sauce.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
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
      description: "Traditional small fish cooked in light tomato sauce, served with vegetables.",
      day: "Monday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Fried Kapenta",
      tag: "✅ Chef's Recommendation"
    },
    {
      id: 16,
      category: "daily-specials",
      name: "Cooked Ngolo with Light Green Pepper Sauce",
      description: "Catfish cooked with light green pepper sauce, served with vegetables.",
      day: "Monday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Cooked Ngolo"
    },

    // Tuesday
    {
      id: 17,
      category: "daily-specials",
      name: "Cooked Pork Trotters (Makoso)",
      description: "Traditional pork trotters cooked to perfection, served with vegetables.",
      day: "Tuesday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Pork Trotters"
    },
    {
      id: 18,
      category: "daily-specials",
      name: "Fried Mabundu",
      description: "Traditional preparation of organ meat with authentic seasonings.",
      day: "Tuesday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Fried Mabundu"
    },
    {
      id: 19,
      category: "daily-specials",
      name: "Cooked Beans (Madesu)",
      description: "Traditional Congolese beans cooked in rich, flavorful sauce.",
      day: "Tuesday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Cooked Beans"
    },
    {
      id: 20,
      category: "daily-specials",
      name: "Rougf",
      description: "Fried seasoned meat cuts, a classic Tuesday treat.",
      day: "Tuesday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Rougf"
    },

    // Wednesday
    {
      id: 21,
      category: "daily-specials",
      name: "Fried Makayabu with Green Pepper Onion Relish",
      description: "Fried salt fish with green pepper onion relish.",
      day: "Wednesday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Fried Makayabu"
    },
    {
      id: 22,
      category: "daily-specials",
      name: "Fried Tilapia",
      description: "Lightly seasoned tilapia, crispy fried to golden perfection.",
      day: "Wednesday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Fried Tilapia",
      tag: "⭐ Customer Favorite"
    },
    {
      id: 23,
      category: "daily-specials",
      name: "Fumbwa with Dry Fish",
      description: "Wild spinach in peanut sauce with dry fish, a traditional favorite.",
      day: "Wednesday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Fumbwa"
    },
    {
      id: 24,
      category: "daily-specials",
      name: "Peanut Butter Sauce with Dry Spinach",
      description: "Dried spinach cooked in creamy peanut butter sauce.",
      day: "Wednesday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Peanut Butter Sauce"
    },

    // Thursday
    {
      id: 25,
      category: "daily-specials",
      name: "Light Fried Pork Smock Ribs",
      description: "Lightly fried smoky pork ribs, crispy outside and tender inside.",
      day: "Thursday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Pork Smock Ribs"
    },
    {
      id: 26,
      category: "daily-specials",
      name: "Slight Pinfried Mbinzo",
      description: "Mopane worms pan-fried with light seasoning.",
      day: "Thursday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Mbinzo"
    },
    {
      id: 27,
      category: "daily-specials",
      name: "Mupanda Worms",
      description: "Traditional protein-rich delicacy prepared with care.",
      day: "Thursday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Mupanda Worms"
    },
    {
      id: 28,
      category: "daily-specials",
      name: "Saka Madesu",
      description: "Beans and cassava leaves, rich in flavor and tradition.",
      day: "Thursday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Saka Madesu"
    },
    {
      id: 29,
      category: "daily-specials",
      name: "Cassava Leaves with Beans",
      description: "Cassava leaves stewed with seasoned beans, a traditional Congolese favorite.",
      day: "Thursday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Cassava Leaves with Beans"
    },

    // Friday
    {
      id: 30,
      category: "daily-specials",
      name: "Cooked Mukebuka Sauce",
      description: "Mukebuka fish in a light tomato sauce with traditional spices.",
      day: "Friday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Mukebuka Sauce"
    },
    {
      id: 31,
      category: "daily-specials",
      name: "Cooked Beef Trips (Mabumu)",
      description: "Richly spiced beef tripe stew with traditional flavors.",
      day: "Friday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Beef Trips"
    },

    // Saturday
    {
      id: 32,
      category: "daily-specials",
      name: "Egusi Soup",
      description: "Ground melon seed soup cooked with beef, a weekend favorite.",
      day: "Saturday",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Egusi Soup",
      tag: "🔥 Most Popular"
    },
    {
      id: 33,
      category: "daily-specials",
      name: "Cooked Beef Trips (Mabumu)",
      description: "Rich beef tripe stew, perfect for Saturday dining.",
      day: "Saturday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Beef Trips Saturday"
    },

    // Sunday
    {
      id: 34,
      category: "daily-specials",
      name: "Liboke Ya Ngolo (Cat Fish)",
      description: "Steamed catfish wrapped in banana leaves with traditional spices.",
      day: "Sunday",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Liboke Ya Ngolo"
    },
    {
      id: 35,
      category: "daily-specials",
      name: "Mutu Ya Ntaba (Goat Head in Hot Sauce)",
      description: "Spicy goat head stew served the traditional way.",
      day: "Sunday",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Kamalo City - Mutu Ya Ntaba",
      tag: "⭐ Customer Favorite"
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
    <div className="min-h-screen" style={{ backgroundColor: '#FAF3EB' }}>
      <Navbar />
      <main className="pt-24 px-4 pb-12" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="max-w-7xl mx-auto">
          {/* Pricing Info Block - Top of Page */}
          <div className="bg-white rounded-lg p-6 text-center mb-12 max-w-4xl mx-auto border-2 border-kamalo-gold shadow-lg">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#4B1E1E' }}>Menu Pricing Information</h2>
            <p className="text-lg font-semibold mb-2" style={{ color: '#2C2C2C' }}>
              <strong>All Daily Specials are R80 with pap or R90 with rice</strong>
            </p>
            <p className="text-lg font-semibold mb-2" style={{ color: '#2C2C2C' }}>
              <strong>All Vegetable Sides are R40</strong>
            </p>
            <p className="text-sm text-gray-600 mt-4">
              *Note: In-restaurant prices differ from Uber Eats pricing.
            </p>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif" style={{ color: '#4B1E1E' }}>
              Explore Our <span className="text-kamalo-red">Menu</span>
            </h1>
            <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#2C2C2C' }}>
              Authentic African cuisine crafted with traditional recipes and bold flavors
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveFilter("main")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold text-base ${
                activeFilter === "main" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300"
              }`}
            >
              Main Dishes
            </Button>
            <Button
              onClick={() => setActiveFilter("sides")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold text-base ${
                activeFilter === "sides" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300"
              }`}
            >
              Sides
            </Button>
            <Button
              onClick={() => setActiveFilter("vegetable-sides")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold text-base ${
                activeFilter === "vegetable-sides" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300"
              }`}
            >
              Vegetable Sides
            </Button>
            <Button
              onClick={() => setActiveFilter("daily-specials")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap font-semibold text-base ${
                activeFilter === "daily-specials" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300"
              }`}
            >
              Daily Specials
            </Button>
          </div>

          {/* Category Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif" style={{ color: '#4B1E1E' }}>
              {getCategoryDisplayName(activeFilter)}
            </h2>
            <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
            
            {/* Daily Specials specific header */}
            {activeFilter === "daily-specials" && (
              <div className="mb-8">
                <p className="text-lg mb-4" style={{ color: '#2C2C2C' }}>
                  <em>(Note: Uber Eats prices are higher than in-restaurant prices.)</em>
                </p>
                <div className="bg-white rounded-lg p-4 text-center mb-8 max-w-2xl mx-auto border-2 border-kamalo-gold">
                  <p className="font-bold text-lg" style={{ color: '#4B1E1E' }}>All Daily Specials are R80 with pap or R90 with rice.</p>
                </div>
              </div>
            )}
          </div>

          {/* Menu Items - Grid Layout with proper spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" style={{ gap: '32px' }}>
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
                style={{ 
                  padding: '24px',
                  border: '1px solid #E5E7EB',
                  minHeight: '320px'
                }}
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
                
                <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectFit: 'cover',
                      maxWidth: '100%',
                      height: '192px'
                    }}
                    loading="lazy"
                  />
                </div>
                
                <div style={{ padding: '0 8px' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 
                      className="text-xl font-bold leading-tight"
                      style={{ 
                        color: '#4B1E1E',
                        fontSize: '1.25rem',
                        lineHeight: '1.4'
                      }}
                    >
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span 
                        style={{
                          backgroundColor: '#FFD700',
                          color: '#2C2C2C',
                          fontSize: '0.75rem',
                          padding: '2px 8px',
                          borderRadius: '999px',
                          marginLeft: '6px',
                          fontWeight: 'bold',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p 
                    className="leading-relaxed"
                    style={{ 
                      color: '#374151',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      marginBottom: '0'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 border-2 border-gray-300 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif" style={{ color: '#4B1E1E' }}>
                Ready to <span className="text-kamalo-red">Try It for Yourself</span>?
              </h2>
              <p className="mb-6 text-lg" style={{ color: '#374151' }}>
                Experience authentic African cuisine and traditional flavors at Kamalo City in Cape Town.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Link to="/reservations" className="btn-primary">
                  Book a Table
                </Link>
                <a 
                  href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-gray-500 italic text-sm">
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