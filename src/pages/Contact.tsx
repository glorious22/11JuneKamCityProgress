import { useEffect } from "react";
import { Phone, MessageSquare, MapPin, Clock, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";

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
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's <span className="text-kamalo-red">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Need directions? Want to make a booking? We're here to help — contact us anytime.
            </p>
          </div>

          {/* Contact Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href="tel:+27731598909"
              className="bg-black/50 rounded-lg p-6 text-center hover:bg-kamalo-red/20 transition duration-300 border border-gray-800 hover:border-kamalo-red group touch-manipulation"
            >
              <Phone className="w-12 h-12 text-kamalo-red mx-auto mb-4 group-hover:scale-110 transition duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
              <p className="text-kamalo-red font-semibold">073 159 8909</p>
            </a>

            <a
              href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 rounded-lg p-6 text-center hover:bg-green-500/20 transition duration-300 border border-gray-800 hover:border-green-500 group touch-manipulation"
            >
              <MessageSquare className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:scale-110 transition duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">Chat via WhatsApp</h3>
              <p className="text-green-500 font-semibold">Join Group Chat</p>
            </a>

            <a
              href="mailto:info@kamalocity.co.za"
              className="bg-black/50 rounded-lg p-6 text-center hover:bg-blue-500/20 transition duration-300 border border-gray-800 hover:border-blue-500 group touch-manipulation"
            >
              <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
              <p className="text-blue-500 font-semibold">info@kamalocity.co.za</p>
            </a>

            <div className="bg-black/50 rounded-lg p-6 text-center border border-gray-800">
              <MapPin className="w-12 h-12 text-kamalo-gold mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Address</h3>
              <p className="text-kamalo-gold font-semibold text-sm">90 Voortrekker Road, Goodwood, Cape Town</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <ContactFormSection />

          {/* Operating Hours & Social Media */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-kamalo-red" />
                Operating Hours
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Monday – Sunday:</span>
                  <span className="text-kamalo-red font-bold">11:00 AM – 11:00 PM</span>
                </div>
                <div className="text-sm text-gray-400">
                  Kitchen closes at 10:30 PM
                </div>
              </div>
            </div>

            <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Follow Us</h3>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/kamalo_city"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-pink-500/20 transition duration-300 group touch-manipulation"
                >
                  <Instagram className="w-8 h-8 text-pink-500 group-hover:scale-110 transition duration-300" />
                  <div>
                    <p className="text-white font-semibold">Instagram</p>
                    <p className="text-pink-500 text-sm">@kamalo_city</p>
                  </div>
                </a>
                <a
                  href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-500/20 transition duration-300 group touch-manipulation"
                >
                  <MessageSquare className="w-8 h-8 text-green-500 group-hover:scale-110 transition duration-300" />
                  <div>
                    <p className="text-white font-semibold">WhatsApp Group</p>
                    <p className="text-green-500 text-sm">Join our community</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-black/50 rounded-lg p-8 border border-gray-800 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Visit <span className="text-kamalo-red">Kamalo City</span>?
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Make a reservation or just drop by for an authentic African dining experience in Cape Town.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300 font-semibold touch-manipulation"
              >
                <a href="/reservations">Make Reservation</a>
              </Button>
              <Button 
                asChild 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300 font-semibold touch-manipulation"
              >
                <a href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;