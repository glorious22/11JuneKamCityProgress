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
      metaDescription.setAttribute('content', 'Learn about Kamalo City founders and our mission to bring authentic African culture and cuisine to Cape Town.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-white">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              A Legacy <span className="text-kamalo-red">Brought to Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kamalo City began in 2023 as a dream built from ruins. In just a few years, we've grown into a cultural landmark serving unforgettable food, music, and experiences.
            </p>
          </div>
          
          {/* 2-Column Section */}
          <section className="mb-20 fade-in">
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
                <h2 className="text-3xl md:text-4xl font-bold text-kamalo-red mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Kamalo City was born from the passion to bring ancestral flavors to the heart of Cape Town. We serve as a cultural hub — where people gather, relax, and enjoy life through authentic African cuisine and vibrant community experiences.
                  </p>
                  <p>
                    Founded by Pitchou Ntumba and his wife, Kamalo City has evolved from a simple restaurant concept into Cape Town's premier African dining and entertainment destination. Their combined vision and expertise in hospitality have transformed this space into a vibrant celebration of African cuisine and culture.
                  </p>
                  <p>
                    Under their leadership, Kamalo City has become more than just a restaurant – it's a cultural hub where people come together to enjoy authentic African cuisine, premium experiences, and entertainment that honors our rich heritage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 rounded-lg p-8 border border-gray-800 text-center card-hover">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-kamalo-red mb-4">Authenticity</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every dish tells a story rooted in culture. We honor African traditions through every detail.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-8 border border-gray-800 text-center card-hover">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-kamalo-red mb-4">Community</h3>
                <p className="text-gray-300 leading-relaxed">
                  A gathering place for everyone. We create connections and celebrate together.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-8 border border-gray-800 text-center card-hover">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-kamalo-red mb-4">Unmatched Quality</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every detail is crafted with care. From ingredients to experience, we deliver excellence.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-20 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <h3 className="text-xl font-bold text-white mb-2">From Rubble to Rebirth</h3>
                <p className="text-gray-300">Kamalo City officially opens. From rubble to revival, the vision became a vibrant reality.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h3 className="text-xl font-bold text-white mb-2">Expansion & Growth</h3>
                <p className="text-gray-300">Expanded services with event hosting, weekend entertainment, and unique menu offerings.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <h3 className="text-xl font-bold text-white mb-2">Cultural Landmark</h3>
                <p className="text-gray-300">Cemented as a go-to destination for authentic African food, events, and community gatherings.</p>
              </div>
            </div>
          </section>

          {/* Owner Quote */}
          <div className="mb-16 fade-in">
            <div className="bg-gradient-to-r from-kamalo-red/20 to-kamalo-gold/20 rounded-lg p-8 border border-kamalo-red/30 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 italic">
                "We're not just a restaurant. Kamalo City is a celebration of African energy, flavour, and pride."
              </blockquote>
              <cite className="text-kamalo-gold font-semibold text-lg">— Pitchou Ntumba, Founder</cite>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center bg-black/50 rounded-lg p-8 border border-gray-800 fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Come Join the <span className="text-kamalo-red">Experience</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Ready to be part of the Kamalo City experience? Visit us and taste the passion in every dish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="btn-primary text-lg px-8 py-4"
              >
                <Link to="/reservations">Reserve a Table</Link>
              </Button>
              <Button 
                asChild 
                className="btn-ghost text-lg px-8 py-4"
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