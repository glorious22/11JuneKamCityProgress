import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Menu = () => {
  useEffect(() => {
    document.title = "Menu - Kamalo City | Authentic African Cuisine";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our authentic African menu featuring traditional dishes, grilled meats, stews, and vegetable sides at Kamalo City in Cape Town.');
    }
  }, []);

  // Menu items data - matching the gallery card structure
  const menuItems = [
    {
      id: 1,
      category: "mains",
      name: "Beef Stew (355g)",
      price: "R 133.65",
      description: "Beef in a light tomatoes and brinjals sauce. Served with pap or rice and veg.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      category: "mains",
      name: "Grilled Pork (380g)",
      price: "R 145.00",
      description: "Tender grilled pork served with traditional African spices and your choice of sides.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      category: "mains",
      name: "Fried Thomson",
      price: "R 125.00",
      description: "Fresh Thomson fish, perfectly fried and seasoned with traditional African herbs.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      category: "mains",
      name: "Grilled Thomson",
      price: "R 130.00",
      description: "Grilled Thomson fish with light seasoning, served with pap and vegetables.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      category: "mains",
      name: "Fried Makayabu",
      price: "R 120.00",
      description: "Traditional dried fish preparation, fried to perfection with authentic spices.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      category: "mains",
      name: "Fumbwa with Dry Fish",
      price: "R 140.00",
      description: "Traditional cassava leaves cooked with dried fish in rich, flavorful sauce.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      category: "sides",
      name: "Portion Pap",
      price: "R 13.50",
      description: "Traditional African staple, perfect accompaniment to any main dish.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 8,
      category: "sides",
      name: "Portion Rice",
      price: "R 34.00",
      description: "Fried rice, perfect accompaniment to any main dish.",
      image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 9,
      category: "vegetables",
      name: "Spinach",
      price: "R 67.50",
      description: "Fresh vegetables cooked to bring maximum flavour to the dish.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section - matching Gallery page structure */}
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="text-kamalo-red">Menu</span>
          </h1>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-300">
              Discover authentic African flavors with our carefully crafted dishes, 
              made from traditional recipes and the freshest ingredients.
            </p>
          </div>

          {/* Menu Navigation Links - matching Gallery filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              className="px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg bg-kamalo-red text-white hover:bg-red-600"
            >
              All Items
            </Button>
            <Button
              asChild
              className="px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg bg-gray-800 text-gray-300 hover:bg-gray-700"
            >
              <Link to="/menu/daily-specials">Daily Specials</Link>
            </Button>
            <Button
              asChild
              className="px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg bg-gray-800 text-gray-300 hover:bg-gray-700"
            >
              <Link to="/menu/vegetable-sides">Vegetable Sides</Link>
            </Button>
            <Button
              asChild
              className="px-6 py-3 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg bg-gray-800 text-gray-300 hover:bg-gray-700"
            >
              <Link to="/menu/sides">Sides</Link>
            </Button>
          </div>

          {/* Menu Grid - EXACTLY matching Gallery grid layout and styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-black/50 rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg transition duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Kamalo City - ${item.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                    <span className="text-sm text-kamalo-red capitalize">{item.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white">{item.name}</h4>
                    <span className="text-lg font-bold text-kamalo-red">{item.price}</span>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section - matching Gallery CTA */}
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