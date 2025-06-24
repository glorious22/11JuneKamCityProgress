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
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-white">
          {/* Header with Quote */}
          <div className="text-center mb-16">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-kamalo-gold mb-8 leading-relaxed">
              "Inspired by our ancestors, shared with the world."
            </blockquote>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              A Legacy <span className="text-kamalo-red">Brought to Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kamalo City began its journey in 2023. What was once an abandoned space transformed into a cultural hotspot. From humble beginnings, we've grown into a thriving restaurant and venue — powered by love for food, music, and community.
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

          {/* Timeline Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-kamalo-red">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From vision to reality, discover the milestones that shaped Kamalo City into Cape Town's premier African dining destination.
              </p>
            </div>

            <div className="space-y-8">
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <h3 className="text-xl font-bold text-white mb-2">Kamalo City Opens</h3>
                <p className="text-gray-300">From rubble to revival, the vision became reality. Kamalo City opened its doors, turning a ruined space into a cultural hub.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h3 className="text-xl font-bold text-white mb-2">Expansion & Events</h3>
                <p className="text-gray-300">Expanded with event hosting, weekend entertainment, unique menu offerings, and additional services like barbershop and hookah lounge.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <h3 className="text-xl font-bold text-white mb-2">Community Pillar</h3>
                <p className="text-gray-300">Cemented as a go-to destination for authentic African food, events, and community gatherings in Cape Town.</p>
              </div>
            </div>
          </section>

          {/* Values Section (3 Blocks) */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Block 1 */}
              <div className="bg-black/50 rounded-lg p-8 border border-gray-800 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-kamalo-red mb-4">Authenticity</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every dish tells a story rooted in our culture. We honor African traditions through every detail — from our flavors to our atmosphere.
                </p>
              </div>

              {/* Block 2 */}
              <div className="bg-black/50 rounded-lg p-8 border border-gray-800 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-kamalo-red mb-4">Community</h3>
                <p className="text-gray-300 leading-relaxed">
                  A welcoming space for all to gather and celebrate. We create connections and foster relationships through shared experiences.
                </p>
              </div>

              {/* Block 3 */}
              <div className="bg-black/50 rounded-lg p-8 border border-gray-800 text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-kamalo-red mb-4">Unmatched Quality</h3>
                <p className="text-gray-300 leading-relaxed">
                  From ingredients to experience. We focus on delivering excellence in every bite and every moment you spend with us.
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
                className="btn-primary px-8 py-4 text-lg rounded-full font-semibold"
              >
                <Link to="/reservations">Reserve a Table</Link>
              </Button>
              <Button 
                asChild 
                className="btn-ghost px-8 py-4 text-lg rounded-full font-semibold"
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