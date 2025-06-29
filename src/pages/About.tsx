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
      <main className="pt-20 pb-16 px-4 tribal-pattern">
        <div className="max-w-7xl mx-auto text-white">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif">
              A Legacy <span className="text-kamalo-red">Brought to Life</span>
            </h1>
            <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kamalo City was born from rubble and rebuilt with purpose. Since 2023, we've grown into a destination for food, music, and community spirit.
            </p>
          </div>
          
          {/* Our Story Section - Shortened */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kamalo-red mb-6 font-serif">Our Story</h2>
              <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Kamalo City was born from the rubble of an abandoned space and reborn in 2023 with rhythm, flavor, and purpose. Today, we are a hub for African celebration, cuisine, and connection.
              </p>
            </div>
          </section>

          {/* Meet the Founders Section - Shortened copy */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-kamalo-red mb-6 font-serif">Meet Our Founders</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Founded by two friends with a love for culture, Kamalo City grew from a dream into one of Cape Town's hidden gems.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Kamalo City Video Section */}
          <section className="mb-20 tribal-pattern bg-black/30 rounded-lg p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kamalo-red mb-6 font-serif">
                Experience Kamalo City
              </h2>
              <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Watch how Kamalo City came to life through food, music, and community.
              </p>
            </div>
            
            {/* Video Container */}
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <div className="absolute inset-0 bg-black/50 rounded-lg border border-gray-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-kamalo-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                    <p className="text-gray-300">Video content showcasing our journey and vibrant atmosphere</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                Our <span className="text-kamalo-red">Journey</span>
              </h2>
              <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
            </div>

            <div className="space-y-8">
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <h3 className="text-xl font-bold text-white mb-2">Rebuilt and Opened</h3>
                <p className="text-gray-300">From abandoned space to cultural hotspot — Kamalo City opened its doors with a vision of authentic African dining.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h3 className="text-xl font-bold text-white mb-2">Launched Events and Live Entertainment</h3>
                <p className="text-gray-300">Expanded with weekend entertainment, private event hosting, and additional lifestyle services including barbershop and hookah.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <h3 className="text-xl font-bold text-white mb-2">Became Top Destination</h3>
                <p className="text-gray-300">Established as Cape Town's premier African dining and entertainment venue, beloved by locals and visitors alike.</p>
              </div>
            </div>
          </section>

          {/* Founder Quote */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-kamalo-red/20 to-kamalo-gold/20 rounded-lg p-8 border border-kamalo-red/30 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 italic font-serif">
                "From rubble to rhythm: revived in 2023, today Kamalo City beats with flavor, community and soul."
              </blockquote>
              <cite className="text-kamalo-gold font-semibold text-lg">— Pitchou Ntumba, Founder</cite>
            </div>
          </div>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-red mb-2">2+</div>
                <div className="text-gray-300">Years Active</div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-gold mb-2">1000+</div>
                <div className="text-gray-300">Happy Guests</div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-red mb-2">7</div>
                <div className="text-gray-300">Days Open</div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-gold mb-2">80</div>
                <div className="text-gray-300">Max Capacity</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-black/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
              Come Join the <span className="text-kamalo-red">Experience</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Ready to be part of the Kamalo City experience? Visit us and taste the passion in every dish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservations" className="btn-primary">
                Reserve a Table
              </Link>
              <Link to="/contact" className="btn-ghost">
                Visit Us Today
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;