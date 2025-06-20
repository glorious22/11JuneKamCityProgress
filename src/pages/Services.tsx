import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Music, Users, Scissors, Wind, Award, Clock, Calendar, Star, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [activeToggle, setActiveToggle] = useState("main");

  useEffect(() => {
    document.title = "Our Services - Kamalo City | Complete African Experience";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover all services at Kamalo City: authentic dining, private events, live entertainment, hookah lounge, barbershop, and more in Cape Town.');
    }
  }, []);

  const mainServices = [
    {
      id: 1,
      title: "Private Events",
      description: "Our venue accommodates up to 80 guests for private events, parties, and gatherings. Rental hours are flexible – contact us directly to discuss.",
      icon: Users,
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: {
        capacity: "Up to 80 seated guests",
        includes: "Sound system, DJ booth, full catering options",
        pricing: "Contact for custom packages",
        contact: "+27 73 691 1461"
      }
    },
    {
      id: 2,
      title: "Live Entertainment",
      description: "Enjoy authentic African music every Saturday – and some Fridays too. Interested in performing? Reach out to our team to join the lineup.",
      icon: Music,
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: {
        schedule: "Friday & Saturday nights",
        features: "Live bands, DJ performances, cultural shows",
        booking: "VIP tables available",
        contact: "+27 73 159 8909"
      }
    },
    {
      id: 3,
      title: "Pre-Orders & Catering",
      description: "Order your favorite meals in advance or let us cater your next event. For custom orders or event inquiries, contact us directly.",
      icon: Utensils,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: {
        availability: "All menu items available",
        timing: "Ready within 20 minutes",
        ordering: "WhatsApp or Uber Eats",
        delivery: "Coming soon"
      }
    }
  ];

  const otherServices = [
    {
      id: 4,
      title: "Barbershop",
      description: "R60 per cut. Male clients only. Open daily from 11am.",
      icon: Scissors,
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Perfume Shop",
      description: "Explore our curated collection of bold, African-inspired fragrances.",
      icon: Star,
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "Hookah Station",
      description: "Must be 18+. Flavors vary daily. Available throughout our operating hours.",
      icon: Wind,
      image: "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      title: "Game Nights",
      description: "Unwind with pool tables and chill vibes. Open to all guests – come through with friends!",
      icon: Award,
      image: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-kamalo-red">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              More than a restaurant – Kamalo City is a full experience.
            </p>
          </div>

          {/* Toggle Selector */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveToggle("main")}
              className={`px-8 py-4 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold text-lg ${
                activeToggle === "main" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Main Services
            </Button>
            <Button
              onClick={() => setActiveToggle("other")}
              className={`px-8 py-4 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg font-semibold text-lg ${
                activeToggle === "other" 
                  ? "bg-kamalo-red text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Other Services
            </Button>
          </div>

          {/* Main Services Section */}
          {activeToggle === "main" && (
            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {mainServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Card 
                      key={service.id} 
                      className="bg-black/50 border-gray-800 hover:border-kamalo-red transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={service.image}
                          alt={`Kamalo City - ${service.title}`}
                          className="w-full h-48 md:h-56 object-cover hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition duration-300"></div>
                        <IconComponent className="absolute top-4 left-4 w-8 h-8 text-kamalo-red" />
                      </div>
                      <CardHeader className="pb-4">
                        <CardTitle className="text-white text-xl md:text-2xl">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-300 leading-relaxed mb-4 text-base">
                          {service.description}
                        </p>
                        
                        {service.details && (
                          <Accordion type="single" collapsible>
                            <AccordionItem value="details" className="border-gray-700">
                              <AccordionTrigger className="text-kamalo-red hover:text-red-400 text-base">
                                See Details
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-300 space-y-2 text-base">
                                {Object.entries(service.details).map(([key, value]) => (
                                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between">
                                    <span className="font-semibold capitalize text-white">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                    <span className="text-gray-300">{value}</span>
                                  </div>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}

          {/* Other Services Section */}
          {activeToggle === "other" && (
            <section className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {otherServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Card 
                      key={service.id} 
                      className="bg-black/50 border-gray-800 hover:border-kamalo-red transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={service.image}
                          alt={`Kamalo City - ${service.title}`}
                          className="w-full h-48 md:h-56 object-cover hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition duration-300"></div>
                        <IconComponent className="absolute top-4 left-4 w-8 h-8 text-kamalo-red" />
                      </div>
                      <CardHeader className="pb-4">
                        <CardTitle className="text-white text-xl md:text-2xl">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-300 leading-relaxed text-base">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}

          {/* Contact CTA */}
          <section className="text-center bg-black/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience <span className="text-kamalo-red">Kamalo City</span>?
            </h2>
            <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
              Visit us at 90 Voortrekker Road, Goodwood, Cape Town. Open 7 days a week from 11:00 AM to 11:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button asChild className="bg-kamalo-red hover:bg-red-700 text-white px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg transition duration-300 text-lg font-semibold">
                <a href="tel:+27731598909">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </Button>
              <Button asChild variant="outline" className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red hover:text-white px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg transition duration-300 text-lg font-semibold">
                <a href="/reservations">Make Reservation</a>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;