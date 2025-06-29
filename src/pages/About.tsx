import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

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
          {/* Header - Removed top quote as requested */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif">
              {t('about.title')}
            </h1>
            <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div>
          
          {/* Shortened Our Story Section */}
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
                <h2 className="text-3xl md:text-4xl font-bold text-kamalo-red mb-6 font-serif">{t('about.foundersTitle')}</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Founded by two friends with a love for culture, Kamalo City grew from a dream into one of Cape Town's hidden gems.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                {t('timeline.title')}
              </h2>
              <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
            </div>

            <div className="space-y-8">
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <h3 className="text-xl font-bold text-white mb-2">{t('timeline.2023.title')}</h3>
                <p className="text-gray-300">{t('timeline.2023.description')}</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h3 className="text-xl font-bold text-white mb-2">{t('timeline.2024.title')}</h3>
                <p className="text-gray-300">{t('timeline.2024.description')}</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <h3 className="text-xl font-bold text-white mb-2">{t('timeline.2025.title')}</h3>
                <p className="text-gray-300">{t('timeline.2025.description')}</p>
              </div>
            </div>
          </section>

          {/* Founder Quote */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-kamalo-red/20 to-kamalo-gold/20 rounded-lg p-8 border border-kamalo-red/30 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 italic font-serif">
                "{t('story.quote')}"
              </blockquote>
              <cite className="text-kamalo-gold font-semibold text-lg">— {t('story.founder')}</cite>
            </div>
          </div>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-red mb-2">2+</div>
                <div className="text-gray-300">{t('about.statsYears')}</div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-gold mb-2">1000+</div>
                <div className="text-gray-300">{t('about.statsGuests')}</div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-red mb-2">7</div>
                <div className="text-gray-300">{t('about.statsDays')}</div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-kamalo-gold mb-2">80</div>
                <div className="text-gray-300">{t('about.statsCapacity')}</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-black/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
              {t('about.ctaTitle')}
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              {t('about.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservations" className="btn-primary">
                {t('about.reserveTable')}
              </Link>
              <Link to="/contact" className="btn-ghost">
                {t('about.visitToday')}
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