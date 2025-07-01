import { useState, useEffect } from "react";
import { Phone, MessageSquare, MapPin, Clock, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - Kamalo City | Get in Touch";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Kamalo City for reservations, inquiries, or directions. Located at 90 Voortrekker Road, Goodwood, Cape Town. Call +27 73 159 8909.');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent('Contact from Kamalo City Website');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:kamalocity@outlook.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 pb-12 tribal-pattern">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
                Let's <span className="text-kamalo-red">Connect</span>
              </h1>
              <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Need directions? Want to make a booking? We're here to help — contact us anytime.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Actions */}
          <ScrollReveal delay={200}>
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
                href="mailto:kamalocity@outlook.com"
                className="bg-black/50 rounded-lg p-6 text-center hover:bg-blue-500/20 transition duration-300 border border-gray-800 hover:border-blue-500 group touch-manipulation"
              >
                <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition duration-300" />
                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                <p className="text-blue-500 font-semibold">kamalocity@outlook.com</p>
              </a>

              <div className="bg-black/50 rounded-lg p-6 text-center border border-gray-800">
                <MapPin className="w-12 h-12 text-kamalo-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Address</h3>
                <p className="text-kamalo-gold font-semibold text-sm">90 Voortrekker Road, Goodwood, Cape Town</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form Section */}
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
              {/* Contact Form - Name, Email, Message only */}
              <div className="bg-black/50 rounded-lg p-6 md:p-8 border border-gray-800">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-serif">Send us a Message</h3>
                {isSubmitted ? (
                  <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center">
                    <p className="text-green-400 font-semibold text-lg">Thank you! Your email client should open now.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-4 md:p-5 bg-gray-800 rounded-full text-white text-base md:text-lg border-2 border-transparent focus:border-kamalo-red transition-colors touch-manipulation"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 md:p-5 bg-gray-800 rounded-full text-white text-base md:text-lg border-2 border-transparent focus:border-kamalo-red transition-colors touch-manipulation"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-4 md:p-5 bg-gray-800 rounded-lg text-white h-32 md:h-40 text-base md:text-lg border-2 border-transparent focus:border-kamalo-red transition-colors resize-none touch-manipulation"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-kamalo-red to-red-600 hover:from-red-700 hover:to-red-800 text-white py-4 md:py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-lg touch-manipulation"
                      style={{
                        boxShadow: '0 4px 15px rgba(139, 0, 0, 0.4)',
                        animation: 'pulse 2s ease-in-out infinite'
                      }}
                    >
                      Send
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info and Map */}
              <div className="space-y-6">
                <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2 font-serif">
                    <MapPin className="w-6 h-6 text-kamalo-gold" />
                    Visit Us
                  </h3>
                  <div className="space-y-4 text-gray-300 text-base md:text-lg">
                    <div className="space-y-2">
                      <p className="font-semibold text-white">📍 Address:</p>
                      <p>90 Voortrekker Road, Goodwood, Cape Town</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-kamalo-gold" />
                      <a href="tel:+27731598909" className="hover:text-kamalo-gold transition-colors touch-manipulation font-semibold">
                        +27 73 159 8909
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-kamalo-gold" />
                      <span className="font-semibold">Open 7 days: 11:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-64 md:h-80 rounded-lg overflow-hidden">
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
          </ScrollReveal>

          {/* Operating Hours & Social Media */}
          <ScrollReveal delay={400}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3 font-serif">
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
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-serif">Follow Us</h3>
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
          </ScrollReveal>

          {/* Final CTA */}
          <ScrollReveal delay={600}>
            <div className="text-center bg-black/50 rounded-lg p-8 border border-gray-800 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
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
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;