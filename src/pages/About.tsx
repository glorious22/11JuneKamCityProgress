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
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-kamalo-gold mb-8 leading-relaxed">
              "Inspired by our ancestors, shared with the world."
            </blockquote>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Our <span className="text-kamalo-red">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kamalo City isn't just a restaurant. It's a celebration of African heritage, culture, and flavor. Our space was built for connection, tradition, and unforgettable experiences.
            </p>
          </div>
          
          {/* 2-Column Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Kamalo City - Restaurant founders and team"
                  className="w-full h-96 md:h-[500px] rounded-lg shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-kamalo-red mb-6">Meet Our Founders</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Born from the passion to bring ancestral flavors to the heart of Cape Town, Kamalo City merges authentic African food with a modern social experience. We serve as a cultural hub — where people gather, relax, and enjoy life.
                  </p>
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

          {/* Values Section (3 Blocks) */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Block 1 */}
              <div className="bg-black/50 rounded-lg p-8 border border-gray-800 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-kamalo-red mb-4">Cultural Pride</h3>
                <p className="text-gray-300 leading-relaxed">
                  We honor African traditions through every detail — from our flavors to our atmosphere.
                </p>
              </div>

              {/* Block 2 */}
              <div className="bg-black/50 rounded-lg p-8 border border-gray-800 text-center">
                <div className="text-4xl mb-4">🍲</div>
                <h3 className="text-2xl font-bold text-kamalo-red mb-4">Authentic Cuisine</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our meals are made with recipes passed down through generations.
                </p>
              </div>

              {/* Block 3 */}
              <div className="bg-black/50 rounded-lg p-8 border border-gray-800 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-kamalo-red mb-4">Consistent Quality</h3>
                <p className="text-gray-300 leading-relaxed">
                  We focus on delivering excellence in every bite and every experience.
                </p>
              </div>
            </div>
          </section>

          {/* Owner Quote */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-kamalo-red/20 to-kamalo-gold/20 rounded-lg p-8 border border-kamalo-red/30 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 italic">
                "We're not just a restaurant. Kamalo City is a celebration of African energy, flavour, and pride."
              </blockquote>
              <cite className="text-kamalo-gold font-semibold text-lg">— Pitchou Ntumba, Founder</cite>
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-kamalo-red mb-8 text-center">What Our Guests Say</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Come Join the <span className="text-kamalo-red">Experience</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Ready to be part of the Kamalo City experience? Visit us and taste the passion in every dish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300 font-semibold"
              >
                <Link to="/reservations">Reserve a Table</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red hover:text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300 font-semibold"
              >
                <Link to="/contact">Visit Us Today</Link>
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