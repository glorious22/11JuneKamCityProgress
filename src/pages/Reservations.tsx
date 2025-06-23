import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Reservations = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  useEffect(() => {
    document.title = "Make a Reservation - Kamalo City | Book Your Table";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Book your table at Kamalo City for authentic African cuisine and entertainment. Easy online reservations for dining, events, and private bookings in Cape Town.');
    }
  }, []);

  const generateGuestNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 100; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  const timeSlots = [
    "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", 
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    "9:00 PM", "10:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I would like to make a reservation:
    
Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
Special Requests: ${formData.specialRequests || 'None'}`;
    
    const whatsappUrl = `https://wa.me/+27731598909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <main className="pt-20 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-kamalo-gold mb-6">
              Reserve Your <span className="text-kamalo-red">Experience</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Book your table for authentic African cuisine, vibrant ambiance, and excellent service in Cape Town.
            </p>
          </div>

          {/* Decorative Image */}
          <div className="mb-12 fade-in">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-black/50 border border-gray-800">
              <img 
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Kamalo City - Restaurant venue for events and dining"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Experience Kamalo City</h3>
                  <p className="text-lg">Authentic cuisine, vibrant atmosphere, unforgettable moments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-black/50 rounded-lg p-8 border border-gray-700 mb-12 fade-in">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Book Your Table</h2>
            <p className="text-gray-300 mb-8 text-lg text-center">Open: 11:00 AM to 11:00 PM, 7 days a week</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Two columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white block mb-3 text-lg font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-[#1A1F2C] text-white border border-gray-700 rounded-lg text-lg focus:border-kamalo-red transition-colors touch-manipulation"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="text-white block mb-3 text-lg font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-[#1A1F2C] text-white border border-gray-700 rounded-lg text-lg focus:border-kamalo-red transition-colors touch-manipulation"
                    placeholder="Your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="text-white block mb-3 text-lg font-semibold">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-[#1A1F2C] text-white border border-gray-700 rounded-lg text-lg focus:border-kamalo-red transition-colors touch-manipulation"
                    required
                  />
                </div>

                <div>
                  <label className="text-white block mb-3 text-lg font-semibold">Time</label>
                  <Select onValueChange={(value) => setFormData({...formData, time: value})}>
                    <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700 p-4 text-lg">
                      <SelectValue placeholder="Select time">
                        <div className="flex items-center">
                          <Clock className="mr-2 h-5 w-5" />
                          <span>Select time</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1F2C] text-white border-gray-700">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="hover:bg-gray-700">
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-white block mb-3 text-lg font-semibold">Number of Guests</label>
                  <Select onValueChange={(value) => setFormData({...formData, guests: value})}>
                    <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700 p-4 text-lg">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1F2C] text-white border-gray-700">
                      {generateGuestNumbers().map((num) => (
                        <SelectItem key={num} value={num.toString()} className="hover:bg-gray-700">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-white block mb-3 text-lg font-semibold">Special Requests (Optional)</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-[#1A1F2C] text-white border border-gray-700 rounded-lg h-32 text-lg focus:border-kamalo-red transition-colors resize-none touch-manipulation"
                  placeholder="Any special requests or dietary requirements?"
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary py-5 text-xl font-semibold rounded-lg touch-manipulation"
              >
                Book Now
              </Button>
            </form>

            <p className="text-gray-400 text-center mt-6 text-lg">
              We'll confirm your booking within 2 hours. For urgent bookings, call us directly.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Reserve?</h2>
            <p className="text-gray-300 mb-6 text-lg">Contact us now to secure your table or discuss private event options.</p>
            <p className="text-gray-400 text-lg">
              For special requirements or large groups, please call{" "}
              <a href="tel:+27731598909" className="text-kamalo-gold hover:text-kamalo-red transition-colors font-semibold">
                +27 73 159 8909
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reservations;