import { useEffect } from "react";
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
      title: "Private Event Venue Hire",
      description: "Transform your celebration into an unforgettable experience. Full venue hire for birthdays, corporate events, and special occasions.",
      icon: Users,
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: {
        capacity: "Up to 80 seated guests",
        includes: "Sound system, DJ booth, full catering options",
        pricing: "Contact for custom packages",
        contact: "+27 73 691 1461"
      },
      featured: true
    },
    {
      id: 2,
      title: "Live Entertainment & Events",
      description: "Experience vibrant African culture with live music, DJ sets, and cultural celebrations every Friday and Saturday.",
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
      title: "Pre-Order & Catering Services",
      description: "Skip the wait with our pre-order service. Perfect for office lunches, family dinners, and special occasions.",
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
      title: "Professional Barbershop",
      description: "Get a fresh cut for just R60. Professional barbers offering modern styles and classic cuts right next door.",
      icon: Scissors,
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: {
        price: "R60 flat rate",
        hours: "9 AM - 9 PM daily",
        services: "Haircuts, beard trimming, style consultation",
        walkIns: "Welcome, or book ahead"
      }
    },
    {
      id: 5,
      title: "Premium Hookah Lounge",
      description: "Relax with premium hookah in our ambient lounge. Multiple flavors available with music and drinks.",
      icon: Wind,
      image: "https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: {
        ageLimit: "18+ only",
        flavors: "Mint, apple, fruity blends",
        atmosphere: "Live DJs, low lights",
        hours: "Daily from 6 PM"
      }
    },
    {
      id: 6,
      title: "Exclusive Perfume Collection",
      description: "Discover our curated selection of oil-based fragrances. Long-lasting scents inspired by top designers.",
      icon: Star,
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: {
        type: "Oil-based fragrances",
        selection: "Men's and women's scents",
        testing: "Available in-store",
        location: "Inside barbershop area"
      }
    },
    {
      id: 7,
      title: "Game Nights",
      description: "Coming soon! Pool tournaments, chess, dominoes, Uno, and more with prizes and late-night eats.",
      icon: Award,
      image: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=600",
      details: {
        status: "Coming Soon",
        games: "Pool, chess, dominoes, Uno",
        prizes: "Vouchers and rewards",
        updates: "Follow @kamalo_city for announcements"
      },
      comingSoon: true
    }
  ];

  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We're open 7 days a week from 11:00 AM to 11:00 PM. Kitchen closes at 10:30 PM."
    },
    {
      question: "Do you take reservations?",
      answer: "Yes! We highly recommend making reservations, especially for weekends and special events. Call us at +27 73 159 8909."
    },
    {
      question: "Can I book the entire venue for a private event?",
      answer: "Absolutely! We offer full venue hire for up to 80 guests. Contact our events team at +27 73 691 1461 for packages."
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "Yes! We offer vegetarian options and can accommodate various dietary needs. Please inform us when making your reservation."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we have convenient parking available at 90 Voortrekker Road, Goodwood, Cape Town."
    },
    {
      question: "What entertainment do you offer?",
      answer: "We host live music, DJ performances, and cultural events every Friday and Saturday. Follow our social media for the latest schedule."
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-kamalo-red">Complete Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Whether you're hosting a big event or just relaxing with friends — Kamalo City offers something for everyone. Explore our full range of services below.
            </p>
          </div>

          {/* Main Services Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-kamalo-red mb-4">Main Services</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our core offerings that make Kamalo City the premier destination for dining, events, and entertainment in Cape Town.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {mainServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.id} 
                    className={`bg-black/50 border-gray-800 hover:border-kamalo-red transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      service.featured ? 'xl:col-span-2' : ''
                    }`}
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
                      <CardTitle className="text-white text-lg md:text-xl">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                        {service.description}
                      </p>
                      
                      <Accordion type="single" collapsible>
                        <AccordionItem value="details" className="border-gray-700">
                          <AccordionTrigger className="text-kamalo-red hover:text-red-400 text-sm md:text-base">
                            See Details
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300 space-y-2 text-sm md:text-base">
                            {Object.entries(service.details).map(([key, value]) => (
                              <div key={key} className="flex flex-col sm:flex-row sm:justify-between">
                                <span className="font-semibold capitalize text-white">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                <span className="text-gray-300">{value}</span>
                              </div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Other Services Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-kamalo-red mb-4">Additional Services</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Enhance your Kamalo City experience with our lifestyle and grooming services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {otherServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.id} 
                    className={`bg-black/50 border-gray-800 hover:border-kamalo-red transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      service.comingSoon ? 'opacity-90' : ''
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={service.image}
                        alt={`Kamalo City - ${service.title}`}
                        className="w-full h-40 md:h-48 object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition duration-300"></div>
                      <IconComponent className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 text-kamalo-red" />
                      {service.comingSoon && (
                        <div className="absolute top-4 right-4 bg-kamalo-red text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Coming Soon
                        </div>
                      )}
                    </div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-white text-base md:text-lg">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                        {service.description}
                      </p>
                      
                      <Accordion type="single" collapsible>
                        <AccordionItem value="details" className="border-gray-700">
                          <AccordionTrigger className="text-kamalo-red hover:text-red-400 text-sm">
                            See Details
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300 space-y-2 text-sm">
                            {Object.entries(service.details).map(([key, value]) => (
                              <div key={key} className="flex flex-col">
                                <span className="font-semibold capitalize text-white text-xs">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                <span className="text-gray-300 text-xs">{value}</span>
                              </div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-kamalo-red">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index}
                    value={`faq-${index}`}
                    className="bg-black/50 rounded-lg border border-gray-800 data-[state=open]:border-kamalo-red transition-colors px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-white hover:text-kamalo-red transition-colors text-left py-4 md:py-6 font-semibold text-sm md:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-4 md:pb-6 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center bg-black/50 rounded-lg p-6 md:p-8 border border-gray-800">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Ready to Experience <span className="text-kamalo-red">Kamalo City</span>?
            </h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base max-w-2xl mx-auto">
              Visit us at 90 Voortrekker Road, Goodwood, Cape Town. Open 7 days a week from 11:00 AM to 11:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button asChild className="bg-kamalo-red hover:bg-red-700 text-white px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300 text-sm md:text-base">
                <a href="tel:+27731598909">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </Button>
              <Button asChild variant="outline" className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red hover:text-white px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300 text-sm md:text-base">
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