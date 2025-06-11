import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 px-4 bg-kamalo-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center">
                <p className="text-green-400 font-semibold">Thank you! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-white block mb-2 text-base">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800 rounded-lg text-white text-base border border-gray-700 focus:border-kamalo-red transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-white block mb-2 text-base">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800 rounded-lg text-white h-32 text-base border border-gray-700 focus:border-kamalo-red transition-colors"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-kamalo-red hover:bg-red-600 text-white py-3 hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-6">
            <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-kamalo-red" />
                Visit Us
              </h3>
              <div className="space-y-3 text-gray-300 text-base">
                <p>90 Voortrekker Road, Goodwood, Cape Town</p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-kamalo-red" />
                  <a href="tel:+27731598909" className="hover:text-kamalo-red transition-colors">
                    +27 73 159 8909
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-kamalo-red" />
                  <span>Open 7 days: 11:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="h-64 rounded-lg overflow-hidden">
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
    </section>
  );
};

export default ContactFormSection;