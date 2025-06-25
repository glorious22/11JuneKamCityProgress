import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroStory from "@/components/IntroStory";
import TimelineSection from "@/components/TimelineSection";
import ServicesPreview from "@/components/ServicesPreview";
import MenuPreview from "@/components/MenuPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import GalleryPreview from "@/components/GalleryPreview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for homepage
    document.title = "Kamalo City - Authentic African Cuisine & Entertainment in Cape Town";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience authentic African cuisine, premium hookah lounge, live entertainment, and professional services at Kamalo City in Goodwood, Cape Town. Open 7 days a week.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <main>
        <Hero />
        <IntroStory />
        
        {/* About Section - Restored */}
        <section id="about" className="section-padding bg-gradient-to-b from-black to-kamalo-dark african-pattern">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Legacy <span className="text-kamalo-red gold-underline">Brought to Life</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  Kamalo City began its journey in 2023. What was once an abandoned space transformed into a cultural hotspot. From our humble beginnings, we've grown into a thriving restaurant and venue — powered by love for food, music, and community.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl md:text-3xl font-bold text-kamalo-red mb-8 text-center">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/50 rounded-lg p-6 border border-gray-800 text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h4 className="text-xl font-bold text-white mb-3">Authenticity</h4>
                  <p className="text-gray-300">Every dish tells a story rooted in our culture.</p>
                </div>
                <div className="bg-black/50 rounded-lg p-6 border border-gray-800 text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="text-xl font-bold text-white mb-3">Community</h4>
                  <p className="text-gray-300">A welcoming space for all to gather and celebrate.</p>
                </div>
                <div className="bg-black/50 rounded-lg p-6 border border-gray-800 text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h4 className="text-xl font-bold text-white mb-3">Unmatched Quality</h4>
                  <p className="text-gray-300">From the ingredients to the experience.</p>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl md:text-3xl font-bold text-kamalo-red mb-8 text-center">Our Timeline</h3>
              <div className="space-y-6">
                <div className="timeline-item">
                  <div className="timeline-year">2023</div>
                  <h4 className="text-xl font-bold text-white mb-2">Kamalo City Opens</h4>
                  <p className="text-gray-300">Kamalo City opened its doors. From rubble to revival, the vision became a vibrant reality.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <h4 className="text-xl font-bold text-white mb-2">Expansion & Growth</h4>
                  <p className="text-gray-300">Expanded services with event hosting, weekend entertainment, and unique menu offerings.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <h4 className="text-xl font-bold text-white mb-2">Community Pillar</h4>
                  <p className="text-gray-300">Cemented as a go-to destination for authentic African food, events, and community gatherings.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TimelineSection />
        <ServicesPreview />
        <MenuPreview />
        <TestimonialsSection />
        <GalleryPreview />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;