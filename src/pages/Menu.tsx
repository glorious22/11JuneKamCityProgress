import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState("main");
  const [currentDay, setCurrentDay] = useState("");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

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

  const toggleAccordion = (day: string) => {
    setOpenAccordion(openAccordion === day ? null : day);
  };

  // Complete menu items with all data provided
  const menuItems = [
    // Main Dishes
    {
      id: 1,
      category: "main",
      name: "Fried or Grilled Thomson",
      description: "Fresh Thomson fish, seasoned with African herbs and spices. Served with your choice of pap or rice and traditional vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Thomson"
    },
    {
      id: 2,
      category: "main",
      name: "Beef Stew in Light Tomato and Brinjal Sauce",
      description: "Tender beef chunks simmered in a rich tomato and brinjal sauce. Served with pap or rice and traditional vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Beef Stew"
    },
    {
      id: 3,
      category: "main",
      name: "Grilled Quarter Chicken Leg",
      description: "Smoky grilled chicken leg quarter, seasoned African-style. Served with pap or rice and traditional veg.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Chicken Quarter Leg"
    },
    {
      id: 4,
      category: "main",
      name: "Grilled Pork Chops",
      description: "Juicy pork chops grilled to perfection. Comes with pap or rice and a traditional vegetable of your choice.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Grilled Pork"
    },

    // Vegetable Sides
    {
      id: 5,
      category: "vegetable-sides",
      name: "Cassava Leaves",
      description: "Creamy and flavorful cassava leaves slow-cooked with mild spices — a hearty traditional favourite.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Cassava Leaves"
    },
    {
      id: 6,
      category: "vegetable-sides",
      name: "Sweet Potato Leaves (Matembele)",
      description: "Sweet potato leaves cooked tender with a slightly nutty flavor.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Matembele"
    },
    {
      id: 7,
      category: "vegetable-sides",
      name: "Ngai Ngai (Roselle Leaves)",
      description: "Tangy and leafy hibiscus and roselle greens with a sharp bite.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ngai Ngai"
    },
    {
      id: 8,
      category: "vegetable-sides",
      name: "Ndunda (Wild Spinach)",
      description: "Earthy, nutrient-rich wild spinach — a Congolese classic.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Ndunda"
    },
    {
      id: 9,
      category: "vegetable-sides",
      name: "Repu",
      description: "Classic Congolese leafy green veg with a slightly bitter, robust taste.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Repu"
    },
    {
      id: 10,
      category: "vegetable-sides",
      name: "Green Spinach Sauce",
      description: "Steamed green spinach prepared with light seasoning.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Green Spinach"
    },

    // Sides
    {
      id: 11,
      category: "sides",
      name: "Portion Pap",
      description: "Traditional African maize porridge. Perfect with stews and grilled meats.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Portion Pap"
    },
    {
      id: 12,
      category: "sides",
      name: "Shikwanga (Sour Pap)",
      description: "Fermented cassava wrap with a tangy edge — traditional and satisfying.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Shikwanga"
    },
    {
      id: 13,
      category: "sides",
      name: "Portion Rice",
      description: "Fluffy white rice, ideal for soaking up rich sauces.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Kamalo City - Portion Rice"
    }
  ];

  // Daily specials data
  const dailySpecials = {
    monday: [
      { name: "Fried Kapenta (Matemba) in Light Tomato Sauce", description: "Traditional small fish in savory tomato sauce" },
      { name: "Cooked Ngolo with Green Pepper Sauce", description: "Catfish prepared with aromatic green pepper sauce" }
    ],
    tuesday: [
      { name: "Cooked Pork Trotters", description: "Tender pork trotters slow-cooked to perfection" },
      { name: "Fried Mabundu", description: "Traditional preparation of organ meat" },
      { name: "Cooked Beans/Madesu", description: "Hearty beans cooked with traditional spices" }
    ],
    wednesday: [
      { name: "Fried Makayabu with Green Pepper Onion Relish", description: "Dried fish with fresh pepper and onion" },
      { name: "Fried Tilapia", description: "Fresh tilapia fish, perfectly seasoned and fried" },
      { name: "Fumbwa with Dry Fish", description: "Traditional wild spinach with dried fish" }
    ],
    thursday: [
      { name: "Light Fried Pork Smock Ribs", description: "Tender pork ribs with light seasoning" },
      { name: "Fried Mopane Worms (Mbinzo)", description: "Traditional protein-rich delicacy" },
      { name: "Saka Madesu", description: "Cassava leaves cooked with beans" }
    ],
    friday: [
      { name: "Cooked Beef Trips (Mabumu)", description: "Traditional beef tripe preparation" },
      { name: "Cooked Mukekuba in Light Tomato Sauce", description: "Fish cooked in aromatic tomato sauce" }
    ],
    saturday: [
      { name: "Egusi Soup", description: "Rich West African melon seed soup with deep, nutty flavors" },
      { name: "Cooked Beef Trips (Mabumu)", description: "Traditional beef tripe preparation" }
    ],
    sunday: [
      { name: "Mutu Ya Ntaba (Goat Head in Hot Sauce)", description: "Traditional goat head preparation in spicy sauce" },
      { name: "Liboke Ya Ngolo (Cut Fish)", description: "Fish prepared in traditional banana leaf style" }
    ]
  };

  // Get today's specials for the top section
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

  const getCategoryTagline = (category: string) => {
    switch (category) {
      case "main": return "Served with pap or rice and traditional vegetables";
      case "vegetable-sides": return "All vegetable sides are R40 each";
      case "sides": return "Perfect accompaniments to complete your meal";
      case "daily-specials": return "All daily specials are R80 with pap or R90 with rice";
      default: return "";
    }
  };

  const getDayName = (day: string) => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-20 px-4 pb-12">
        <div className="site-container">
          {/* Header Section */}
          <div className="text-center section-spacing" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Explore Our <span className="text-kamalo-red gold-underline">Menu</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Explore our menu filled with traditional dishes and local favorites. Authentic taste, unbeatable value.
              </p>
            </div>
          </div>

          {/* Pricing Information Box */}
          <div className="pricing-info" data-aos="fade-up" data-aos-delay="200">
            <p><strong>All dishes served with pap (R80) or rice (R90)</strong></p>
            <p><strong>All vegetable sides are R40 each</strong></p>
            <p className="note">*Note: Uber Eats prices may differ from in-restaurant prices.</p>
          </div>

          {/* Today's Special Section */}
          {todaysSpecials.length > 0 && (
            <div className="section-spacing" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-kamalo-red mb-4">
                  Today's Special - {getDayName(currentDay)}
                </h2>
                <p className="text-gray-300 text-lg">Available only today - don't miss out!</p>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-4 mb-8">
                {todaysSpecials.map((special, index) => (
                  <div key={index} className="todays-special">
                    <h3 className="text-xl font-bold text-white mb-2">{special.name}</h3>
                    <p className="text-gray-300">{special.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button className="btn-ghost">
                  <a href="#full-menu">See Full Menu</a>
                </Button>
              </div>
            </div>
          )}

          {/* Full Menu Section */}
          <div id="full-menu">
            {/* Filter Buttons */}
            <div className="sticky top-16 z-40 bg-kamalo-dark/95 backdrop-blur-sm py-4 mb-8">
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
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {getCategoryDisplayName(activeFilter)}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {getCategoryTagline(activeFilter)}
              </p>
            </div>

            {/* Daily Specials Full Week Display */}
            {activeFilter === "daily-specials" && (
              <div className="space-y-4 transition-all duration-500">
                {Object.entries(dailySpecials).map(([day, specials], index) => (
                  <div 
                    key={day} 
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <button
                      onClick={() => toggleAccordion(day)}
                      className="accordion-header w-full"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-2xl font-bold ${day === currentDay ? 'text-kamalo-red' : 'text-white'}`}>
                          {getDayName(day)} {day === currentDay && '(Today)'}
                        </span>
                      </div>
                      <ChevronDown 
                        className={`accordion-icon w-6 h-6 text-kamalo-red ${
                          openAccordion === day ? 'open' : ''
                        }`}
                      />
                    </button>
                    
                    {openAccordion === day && (
                      <div className="accordion-content">
                        <div className="space-y-3">
                          {specials.map((special, index) => (
                            <div key={index} className="border-l-4 border-kamalo-red pl-4">
                              <h4 className="text-lg font-semibold text-white">{special.name}</h4>
                              <p className="text-gray-300 text-sm">{special.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Regular Menu Items */}
            {activeFilter !== "daily-specials" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
                {filteredItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="dish-card"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="dish-image w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom CTA Section */}
            <div className="text-center mt-16 mobile-spacing" data-aos="fade-up">
              <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to <span className="text-kamalo-red">Try It for Yourself</span>?
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Experience authentic African cuisine and traditional flavors at Kamalo City in Cape Town.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Button className="btn-primary mobile-button-spacing">
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