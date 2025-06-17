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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Reservations = () => {
  const [guests, setGuests] = useState("2");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    document.title = "Make a Reservation - Kamalo City | Book Your Table";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Book your table at Kamalo City for authentic African cuisine and entertainment. Easy online reservations for dining, events, and private bookings in Cape Town.');
    }
  }, []);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const generateDates = () => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      dates.push(i);
    }
    return dates;
  };

  const generateGuestNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 25; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  const timeSlots = [
    "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", 
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    "9:00 PM", "10:00 PM"
  ];

  const handleWhatsAppConfirm = () => {
    const message = `Hello! I would like to make a reservation for ${guests} guests on ${selectedDate} at ${selectedTime} at Kamalo City.`;
    const whatsappUrl = `https://wa.me/+27731598909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallConfirm = () => {
    window.open('tel:+27731598909', '_self');
  };

  const faqs = [
    {
      question: "How many people can I book for?",
      answer: "We can accommodate groups from 1 to 80 people. For larger private events, please call us directly."
    },
    {
      question: "Do I need to pay upfront?",
      answer: "No upfront payment required for regular dining reservations. Private events may require a deposit."
    },
    {
      question: "Can I decorate the space?",
      answer: "Yes! For private bookings, we allow decorations with some terms and conditions. Contact us to discuss your needs."
    },
    {
      question: "What's included in a private booking?",
      answer: "Private bookings include the venue, sound system, DJ booth, and full catering options. Contact us for detailed packages."
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-kamalo-gold mb-6">
              Host Your Special Event at Kamalo City, Cape Town
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Looking for the perfect venue in Cape Town? Kamalo City offers intimate dinners, birthday parties, corporate events, and more. Enjoy authentic cuisine, vibrant ambiance, and excellent service. Book your table or venue today for an unforgettable experience.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-black/50 border border-gray-800">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                >
                  <source src="https://live.staticflickr.com/video/54577718634/716cc532ae/1080p.mp4?s=eyJpIjoiNTQ1Nzc3MTg2MzQiLCJlIjoxNzQ5NTgwNDg4LCJzIjoiNzE2Y2M1MzJhZSIsImkiOiIzMTMzNyJ9&sr=https%3A%2F%2Fwww.flickr.com%2Fphotos%2F202902991%40N05%2F54577718634%2Fin%2Fdateposted-public%2F" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Experience Kamalo City</h3>
                    <p className="text-lg">Sizzling food, vibrant atmosphere, unforgettable moments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA Buttons */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                onClick={handleWhatsAppConfirm}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg rounded-lg hover:scale-105 hover:shadow-lg transition duration-300"
              >
                📲 Book via WhatsApp
              </Button>
              <Button
                onClick={handleCallConfirm}
                className="w-full bg-kamalo-red hover:bg-red-600 text-white py-6 text-lg rounded-lg hover:scale-105 hover:shadow-lg transition duration-300"
              >
                📞 Call Us to Book
              </Button>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="max-w-2xl mx-auto bg-black/50 rounded-lg p-8 border border-gray-700 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Reservation Details</h2>
            <p className="text-gray-300 mb-6 text-base text-center">Open: 11:00 AM to 11:00 PM, 7 days a week</p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white block mb-2 text-base">Month</label>
                  <Select onValueChange={(value) => setSelectedDate(prev => {
                    const [_, day] = prev.split(' ');
                    return `${value} ${day || '1'}, 2025`;
                  })}>
                    <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1F2C] text-white border-gray-700">
                      {months.map((month) => (
                        <SelectItem key={month} value={month} className="hover:bg-gray-700">
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-white block mb-2 text-base">Day</label>
                  <Select onValueChange={(value) => setSelectedDate(prev => {
                    const [month] = prev.split(' ');
                    return `${month || 'January'} ${value}, 2025`;
                  })}>
                    <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700">
                      <SelectValue placeholder="Select day" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1F2C] text-white border-gray-700">
                      {generateDates().map((day) => (
                        <SelectItem key={day} value={day.toString()} className="hover:bg-gray-700">
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-white block mb-2 text-base">Number of Guests</label>
                <Select onValueChange={setGuests}>
                  <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700">
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

              <div>
                <label className="text-white block mb-2 text-base">Time</label>
                <Select onValueChange={setSelectedTime}>
                  <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700">
                    <SelectValue placeholder="Select time">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
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
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="faqs" 
                className="bg-black/50 rounded-lg border border-gray-800 data-[state=open]:border-kamalo-red transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-kamalo-red transition-colors text-left py-6 px-6 text-xl font-bold">
                  ❓ Frequently Asked Questions
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800 text-center">
              <h3 className="text-xl font-bold text-kamalo-red mb-4">What Our Guests Say</h3>
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "Amazing African restaurant. I love to be there again and again for their lovely food, clean environments, live music and great service."
              </blockquote>
              <cite className="text-kamalo-gold font-semibold">— HM Baloji, Verified Customer</cite>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Reserve?</h2>
              <p className="text-gray-300 mb-6">Contact us now to secure your table or discuss private event options.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  onClick={handleWhatsAppConfirm}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  📲 Reserve Now
                </Button>
                <Button
                  onClick={handleCallConfirm}
                  className="w-full bg-kamalo-red hover:bg-red-600 text-white py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  📞 Call Us
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                For special requirements or large groups, please call{" "}
                <a href="tel:+27731598909" className="text-kamalo-gold hover:text-kamalo-red transition-colors">
                  +27 73 159 8909
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reservations;