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

  // Menu items data - extracted from Uber Eats
  const menuItems = [
    // Daily Standard Dishes
    {
      id: 1,
      category: "daily",
      name: "Grilled Thomson",
      price: "R 133.65",
      description: "Well seasoned grilled thomson. Served with pap or rice and a side of traditional veg of your choice.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Grilled Thomson"
    },
    {
      id: 2,
      category: "daily",
      name: "Fried Thomson",
      price: "R 133.65",
      description: "Well seasoned fried thomson. Served with pap or rice and side traditional veg of choice.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Fried Thomson"
    },
    {
      id: 3,
      category: "daily",
      name: "Grilled Pork (380g)",
      price: "R 133.65",
      description: "Grilled pork chops. Served with pap or rice and side of traditional veg of your choice.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Grilled Pork"
    },
    {
      id: 4,
      category: "daily",
      name: "Beef Stew (355g)",
      price: "R 133.65",
      description: "Beef in a light tomatoes and brinjals sauce. Served with pap or rice and veg.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Beef Stew"
    },
    {
      id: 5,
      category: "daily",
      name: "Grilled Chicken Quarter Leg",
      price: "R 148.50",
      description: "Well seasoned grilled chicken quarter leg. Served with pap or rice and a side of traditional veg of your choice.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Grilled Chicken Quarter Leg"
    },
    // Featured Items (avoiding duplicates)
    {
      id: 6,
      category: "featured",
      name: "Fumbwa with Dry Fish",
      price: "R 108.00",
      description: "A rich, earthy wild spinach dish slow-cooked with dry fish.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Fumbwa with Dry Fish"
    },
    {
      id: 7,
      category: "featured",
      name: "Fried Makayabu",
      price: "R 108.00",
      description: "Crispy fried lightly salted cod served with your choice of sides.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Fried Makayabu"
    },
    // Veg Sides
    {
      id: 8,
      category: "veg-sides",
      name: "Spinach",
      price: "R 67.50",
      description: "A combination of fresh vegetables to bring maximum flavour to the dish.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Spinach"
    },
    {
      id: 9,
      category: "veg-sides",
      name: "Kasava Leaves",
      price: "R 67.50",
      description: "Tender cassava leaves, a unique and flavourful traditional option.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Kasava Leaves"
    },
    {
      id: 10,
      category: "veg-sides",
      name: "Matembele",
      price: "R 67.50",
      description: "Sweet potato leaves.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Matembele (Sweet potato leaves)"
    },
    // Sides
    {
      id: 11,
      category: "sides",
      name: "Portion Pap",
      price: "R 13.50",
      description: "Found in all traditional African homes, can be eaten with any of our other dishes.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Portion Pap"
    },
    {
      id: 12,
      category: "sides",
      name: "Shikwanga (Sour Pap)",
      price: "R 33.75",
      description: "Soured cassava pap; popular and traditional.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Shikwanga (Sour Pap)"
    },
    {
      id: 13,
      category: "sides",
      name: "Portion Rice",
      price: "R 54.00",
      description: "Fried rice, perfect with other dishes like beans or vegetables.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image of Portion Rice"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? menuItems 
    : menuItems.filter(item => {
        if (activeFilter === "daily-standard") {
          return item.category === "daily" || item.category === "featured";
        }
        return item.category === activeFilter;
      });

  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case "daily": return "Daily Standard";
      case "featured": return "Featured";
      case "veg-sides": return "Veg Sides";
      case "sides": return "Sides";
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
              onClick={() => setActiveFilter("veg-sides")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                activeFilter === "veg-sides" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Veg Sides
            </Button>
            <Button
              onClick={() => setActiveFilter("daily-standard")}
              className={`px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${
                activeFilter === "daily-standard" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Daily Standard + Weekly Specials
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