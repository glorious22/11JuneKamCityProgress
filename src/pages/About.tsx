import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Kamalo City | Our Story & Mission";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Kamalo City founders Pitchou Ntumba and his wife, our mission to bring authentic African culture and cuisine to Cape Town.');
    }
  }, []);

  const timeline = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Opened with a mission to bring authentic African food to Cape Town."
    },
    {
      year: "2022", 
      title: "Expansion",
      description: "Added barbershop, live events, and music nights."
    },
    {
      year: "2023",
      title: "Cultural Hub",
      description: "Became a cultural hotspot for locals and tourists."
    },
    {
      year: "2024",
      title: "City Recognition", 
      description: "Grew in popularity, drawing attention across the city."
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-white">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-kamalo-gold mb-8">
              The Story of <span className="text-kamalo-red">Kamalo City</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kamalo City was born from a love of African culture, good food, and the desire to share it with Cape Town.
            </p>
          </div>
          
          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-kamalo-red mb-8 text-center">Our Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((milestone, index) => (
                <div key={index} className="bg-black/50 rounded-lg p-6 border border-gray-800 hover:border-kamalo-red transition duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-kamalo-red mb-3">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founders Section */}
          <section className="mb-16">
            <div className="md:flex md:gap-12 items-start">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Kamalo City - Restaurant founders and team"
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold text-kamalo-red mb-6">Meet Our Founders</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                  <p>
                    Kamalo City was founded by Pitchou Ntumba and his wife, who together have created Cape Town's premier African dining and entertainment destination. Their combined vision and expertise in hospitality have transformed this space into a vibrant celebration of African cuisine and culture.
                  </p>
                  <p>
                    Under their leadership, Kamalo City has evolved into more than just a restaurant – it's a cultural hub where people come together to enjoy authentic African cuisine, premium shisha experiences, professional grooming services, and entertainment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Owner Quote */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-kamalo-red/20 to-kamalo-gold/20 rounded-lg p-8 border border-kamalo-red/30 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 italic">
                "We're not just a restaurant. Kamalo City is a celebration of African energy, flavour, and pride."
              </blockquote>
              <cite className="text-kamalo-gold font-semibold">— Pitchou Ntumba, Founder</cite>
            </div>
          </div>

          {/* Philosophy & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <section className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-semibold text-kamalo-red mb-6">Our Philosophy</h2>
              <p className="text-gray-300 leading-relaxed text-base">
                At Kamalo City, we believe in creating an authentic African dining experience that celebrates our rich cultural heritage. Our commitment to using traditional recipes and locally-sourced ingredients ensures that every dish tells a story of our continent's diverse culinary traditions.
              </p>
            </section>

            <section className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-semibold text-kamalo-red mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-base">
                We strive to be more than just a restaurant – we aim to be a cultural hub where food lovers can explore the rich tapestry of African cuisine. Our vision is to continue pushing culinary boundaries while preserving the authentic flavors that make our dishes unique.
              </p>
            </section>
          </div>

          {/* Customer Testimonial */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-kamalo-red mb-8 text-center">What Our Guests Say</h2>
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800 text-center">
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 italic mb-4">
                  "Real traditional mid-African cuisine restaurant with lovely atmosphere. Nice soft reclining furniture, pool table for relaxation. Owners are very forthcoming and friendly. Great vegetarian options and wheelchair accessible."
                </p>
                <cite className="text-kamalo-gold font-semibold">— Ludi Smit, Verified Customer</cite>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center bg-black/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Experience Our <span className="text-kamalo-red">Story</span>
            </h2>
            <p className="text-gray-300 mb-6 text-base">
              Ready to be part of the Kamalo City experience? Visit us and taste the passion in every dish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
              >
                <Link to="/reservations">📅 Book Your Table</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red hover:text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
              >
                <Link to="/contact">📍 Visit Us Today</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;