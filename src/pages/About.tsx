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
          <h1 className="text-3xl md:text-4xl font-bold text-kamalo-gold mb-8 text-center">About Kamalo City</h1>
          
          <div className="space-y-12">
            {/* Founders Section with Image */}
            <section className="md:flex md:gap-12 items-start">
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
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-kamalo-red mb-6">Our Philosophy</h2>
              <p className="text-gray-300 leading-relaxed text-base">
                At Kamalo City, we believe in creating an authentic African dining experience that celebrates our rich cultural heritage. Our commitment to using traditional recipes and locally-sourced ingredients ensures that every dish tells a story of our continent's diverse culinary traditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-kamalo-red mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-base mb-6">
                We strive to be more than just a restaurant – we aim to be a cultural hub where food lovers can explore the rich tapestry of African cuisine. Our vision is to continue pushing culinary boundaries while preserving the authentic flavors that make our dishes unique.
              </p>
            </section>

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
                  <Link to="/reservations">Book Your Table</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red hover:text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <Link to="/contact">Visit Us Today</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;