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

  // Daily specials organized by day
  const dailySpecials = {
    monday: [
      "Fried Kapenta (Matemba) in Light Tomato Sauce",
      "Cooked Ngolo with Green Pepper Sauce"
    ],
    tuesday: [
      "Cooked Pork Trotters",
      "Fried Mabundu",
      "Cooked Beans",
      "Madesu",
      "Rouge"
    ],
    wednesday: [
      "Fried Makayabu with Green Pepper Onion Relish",
      "Fried Tilapia",
      "Fumbwa with Dry Fish",
      "Peanut Butter Sauce with Dry Spinach"
    ],
    thursday: [
      "Light Fried Pork Smock Ribs",
      "Slight Pinfried Mbinzo",
      "Mupanda Worms",
      "Saka Madesu",
      "Cassava Leaves with Beans"
    ],
    friday: [
      "Cooked Beef Trips (Mabumu)",
      "Cooked Mukebuka in Light Tomato Sauce"
    ],
    saturday: [
      "Egusi Soup",
      "Cooked Beef Trips (Mabumu)"
    ],
    sunday: [
      "Mutu Ya Ntaba (Goat Head in Hot Sauce)",
      "Liboke Ya Ngolo (Cut Fish)"
    ]
  };

  // Get today's specials for highlighting
  const todaysSpecials = dailySpecials[currentDay as keyof typeof dailySpecials] || [];

  const mainDishes = [
    "Fried or Grilled Thomson",
    "Beef Stew in Light Tomato and Brinjal Sauce",
    "Grilled Quarter Chicken Leg",
    "Grilled Pork Chops",
    "Fried Thomson"
  ];

  const vegetableSides = [
    "Cassava Leaves",
    "Sweet Potato Leaves (Matembele)",
    "Ngai Ngai (Roselle Leaves)",
    "Ndunda (Wild Spinach)",
    "Repu",
    "Green Spinach Sauce"
  ];

  const sides = [
    "Portion Pap",
    "Shikwanga (Sour Pap)",
    "Portion Rice"
  ];

  const getDayDisplayName = (day: string) => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-20 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-kamalo-red">Menu</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our menu filled with traditional dishes and local favorites. Authentic taste, unbeatable value.
            </p>
          </div>

          {/* Today's Special Highlight */}
          {todaysSpecials.length > 0 && (
            <div className="mb-12 fade-in">
              <div className="bg-gradient-to-r from-kamalo-red/20 to-kamalo-gold/20 rounded-lg p-6 border-2 border-kamalo-red/30 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-kamalo-gold mb-4">
                  🌟 Today's Special - {getDayDisplayName(currentDay)}
                </h2>
                <div className="space-y-2">
                  {todaysSpecials.map((dish, index) => (
                    <p key={index} className="text-lg text-white font-medium">
                      • {dish}
                    </p>
                  ))}
                </div>
                <p className="text-kamalo-gold mt-4 font-semibold">
                  R80 with pap • R90 with rice
                </p>
              </div>
            </div>
          )}

          {/* Pricing Notes */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
            <div className="text-gray-800 space-y-2">
              <p className="font-semibold">📝 Menu Pricing:</p>
              <p>• Daily Specials: R80 with pap / R90 with rice</p>
              <p>• Vegetable Sides: All R40</p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              onClick={() => setActiveFilter("main")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold ${
                activeFilter === "main" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              🥘 Main Dishes
            </Button>
            <Button
              onClick={() => setActiveFilter("vegetable-sides")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold ${
                activeFilter === "vegetable-sides" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              🥬 Vegetable Sides
            </Button>
            <Button
              onClick={() => setActiveFilter("sides")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold ${
                activeFilter === "sides" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              🍚 Sides
            </Button>
            <Button
              onClick={() => setActiveFilter("daily-specials")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold ${
                activeFilter === "daily-specials" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              📅 Daily Specials
            </Button>
          </div>

          {/* Menu Content */}
          <div className="fade-in">
            {/* Main Dishes */}
            {activeFilter === "main" && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Main Dishes
                </h2>
                <p className="text-center text-gray-300 mb-8">
                  Served with pap or rice and vegetable of your choice
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mainDishes.map((dish, index) => (
                    <div key={index} className="dish-card">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{dish}</h3>
                      <p className="text-gray-600">Traditional preparation with authentic African spices</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Vegetable Sides */}
            {activeFilter === "vegetable-sides" && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Vegetable Sides
                </h2>
                <p className="text-center text-gray-300 mb-8">
                  All vegetable sides are R40
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {vegetableSides.map((dish, index) => (
                    <div key={index} className="dish-card">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{dish}</h3>
                      <p className="text-gray-600">Fresh, traditional African vegetables</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Sides */}
            {activeFilter === "sides" && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Sides
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sides.map((dish, index) => (
                    <div key={index} className="dish-card">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{dish}</h3>
                      <p className="text-gray-600">Perfect accompaniment to any main dish</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Daily Specials */}
            {activeFilter === "daily-specials" && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Daily Specials
                </h2>
                <p className="text-center text-gray-300 mb-8">
                  R80 with pap • R90 with rice
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(dailySpecials).map(([day, dishes]) => (
                    <div 
                      key={day} 
                      className={`dish-card ${day === currentDay ? 'border-4 border-kamalo-red bg-gradient-to-br from-kamalo-red/10 to-kamalo-gold/10' : ''}`}
                    >
                      <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        📅 {getDayDisplayName(day)}
                        {day === currentDay && <span className="text-kamalo-red text-sm">(Today)</span>}
                      </h3>
                      <ul className="space-y-2">
                        {dishes.map((dish, index) => (
                          <li key={index} className="text-gray-700">• {dish}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 fade-in">
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to <span className="text-kamalo-red">Experience</span> Our Flavors?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Visit us for authentic African cuisine in the heart of Cape Town.
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