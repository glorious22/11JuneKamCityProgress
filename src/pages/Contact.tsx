import { useEffect } from "react";
import { Phone, MessageSquare, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Kamalo City | Get in Touch";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Kamalo City for reservations, inquiries, or directions. Located at 90 Voortrekker Road, Goodwood, Cape Town. Call +27 73 159 8909.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Contact <span className="text-kamalo-red">Us</span>
          </h1>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-300">
              Have questions or want to make a reservation? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-black/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="text-white block mb-2 text-base">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-800 rounded-lg text-white text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-white block mb-2 text-base">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 bg-gray-800 rounded-lg text-white text-base"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="text-white block mb-2 text-base">Message</label>
                  <textarea
                    className="w-full p-3 bg-gray-800 rounded-lg text-white h-32 text-base"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-kamalo-red hover:bg-red-600 text-white py-3 hover:scale-105 hover:shadow-lg transition duration-300">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-black/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-6 h-6 mr-4 text-kamalo-red" />
                    <span className="text-base">90 Voortrekker Road, Goodwood, Cape Town</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-6 h-6 mr-4 text-kamalo-red" />
                    <a href="tel:+27731598909" className="text-base hover:text-kamalo-red transition-colors">
                      +27 73 159 8909
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-6 h-6 mr-4 text-kamalo-red" />
                    <span className="text-base">info@kamalocity.co.za</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-6 h-6 mr-4 text-kamalo-red" />
                    <span className="text-base">7 days a week, 11:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-lg p-4">
                <h3 className="text-xl font-bold text-white mb-4">Find Us</h3>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1055656329913!2d18.546104776047663!3d-33.912682521333636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b0726596af5%3A0x651107464f9fc317!2sKamalo%20City!5e0!3m2!1sen!2sza!4v1748888283939!5m2!1sen!2sza" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kamalo City Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Visit <span className="text-kamalo-red">Kamalo City</span>?
              </h2>
              <p className="text-gray-300 mb-6 text-base">
                Make a reservation or just drop by for an authentic African dining experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <a href="/reservations">Make Reservation</a>
                </Button>
                <Button 
                  asChild 
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <a href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;