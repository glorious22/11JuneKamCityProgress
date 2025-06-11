import { Music, Scissors, Wind, Users, Calendar, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const LiveEventsServices = () => {
  const services = [
    {
      id: "hookah",
      icon: Wind,
      title: "Hookah Lounge Vibes — Daily from 6 PM",
      description: "Premium hookah experience with mint, apple, and fruity blends in our ambient lounge. R150 per session, 18+ welcome.",
      highlights: "🎶 Live DJs. 🪩 Low lights. 🍹 Drinks flowing.",
      link: "/services/hookah-lounge",
      image: "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "barber",
      icon: Scissors,
      title: "Get Faded, Stay Fresh – In-House Barbershop",
      description: "Professional cuts for just R60. Walk-in service available with food and drinks right after your trim.",
      link: "/services/barber-next-door",
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "games",
      icon: Calendar,
      title: "Game Nights Are Coming Soon",
      description: "Pool, Uno, chess, dominoes with prizes and late-night eats. Bringing community energy back to Goodwood.",
      link: "/services/game-nights",
      image: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "private-events",
      icon: Users,
      title: "Host Your Private Event at Kamalo",
      description: "Full venue hire for birthdays and celebrations. Seats 80 guests with sound system and custom décor options.",
      link: "/services/private-bookings",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "live-music",
      icon: Music,
      title: "Live Music & Dancefloor Fridays",
      description: "Weekend beats from Congolese classics to Afro throwbacks. Reserve your VIP table early.",
      link: "/services/live-entertainment",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "food-service",
      icon: Utensils,
      title: "Pre-Order & Takeaway Service",
      description: "Order ahead for pickup or enjoy our full dining experience. Delivery coming soon to your doorstep.",
      link: "/services/pre-order-food",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-kamalo-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            More Than Just <span className="text-kamalo-red">Dining</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete entertainment and service experience that makes Kamalo City a destination, not just a meal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="bg-black/50 rounded-lg overflow-hidden border border-gray-800 hover:border-kamalo-red transition-all duration-500 block hover:scale-105 hover:shadow-lg group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={`Kamalo City - ${service.title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300"></div>
                  <IconComponent className="absolute top-4 left-4 w-8 h-8 text-kamalo-red" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-3 text-base">{service.description}</p>
                  {service.highlights && (
                    <p className="text-kamalo-red text-sm">{service.highlights}</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveEventsServices;