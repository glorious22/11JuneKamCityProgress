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

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-white">
          {/* Header with Quote */}
          <div className="text-center mb-16">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-kamalo-gold mb-8">
              "Inspired by our ancestors, shared with the world."
            </blockquote>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              The Story of <span className="text-kamalo-red">Kamalo City</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kamalo City was born from a love of African culture, good food, and the desire to share it with Cape Town.
            </p>
          </div>
          
          {/* Three-Part Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Our Roots */}
            <section className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-kamalo-red mb-6">Our Roots</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Founded by Pitchou Ntumba and his wife, Kamalo City draws from deep African culinary traditions passed down through generations. Our recipes honor the authentic flavors of Central and West Africa.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Every dish tells a story of heritage, community, and the rich cultural tapestry that defines African cuisine.
              </p>
            </section>

            {/* Our Passion */}
            <section className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-kamalo-red mb-6">Our Passion</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We believe food is more than sustenance—it's culture, memory, and connection. Our team is passionate about creating an authentic African experience that goes beyond dining.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From live music to community events, we celebrate the vibrant spirit of African hospitality in everything we do.
              </p>
            </section>

            {/* Our Promise */}
            <section className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-kamalo-red mb-6">Our Promise</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We promise to deliver authentic flavors, warm hospitality, and an unforgettable cultural experience. Every guest becomes part of our extended family.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our commitment extends beyond the plate to creating a space where African culture thrives in Cape Town.
              </p>
            </section>
          </div>

          {/* Photo Section */}
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

          {/* Trust Signal */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-kamalo-red/20 to-kamalo-gold/20 rounded-lg p-6 border border-kamalo-red/30 inline-block">
              <p className="text-kamalo-gold font-bold text-lg">
                Customer-favourite since 2021
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Serving authentic African cuisine to Cape Town
              </p>
            </div>
          </div>

          {/* Owner Quote */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-kamalo-red/20 to-kamalo-gold/20 rounded-lg p-8 border border-kamalo-red/30 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 italic">
                "We're not just a restaurant. Kamalo City is a celebration of African energy, flavour, and pride."
              </blockquote>
              <cite className="text-kamalo-gold font-semibold">— Pitchou Ntumba, Founder</cite>
            </div>
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