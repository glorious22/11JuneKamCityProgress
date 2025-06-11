import { Music, Calendar, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LiveEntertainment = () => {
  const faqs = [
    {
      question: "When do you host live music events?",
      answer: "Every Friday, sometimes Saturdays."
    },
    {
      question: "Is there a cover charge?",
      answer: "Usually low or free — varies."
    },
    {
      question: "What kind of music do you play?",
      answer: "Congolese, Afro, and old-school classics."
    },
    {
      question: "Can I reserve a table during events?",
      answer: "Yes, both VIP and general seating."
    },
    {
      question: "Do you allow local performers to apply?",
      answer: "Yes — we support local talent."
    },
    {
      question: "Is it safe and secure to party at Kamalo City?",
      answer: "Yes — controlled entry and security in place."
    },
    {
      question: "Can we dance and party, or is it just seated?",
      answer: "You can absolutely dance."
    },
    {
      question: "Do you serve food during live shows?",
      answer: "Yes — full menu available."
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      
      <div className="pt-24 px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Live Music & <span className="text-kamalo-red">Entertainment</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the vibrant sounds of Africa at Kamalo City. From live Afrobeat performances to DJ sets, we bring the best of African music and entertainment to Cape Town.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
                alt="Live Music"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Friday Night Live Sessions</h2>
              <p className="text-gray-300 mb-4">
                Every Friday, Kamalo City transforms into Cape Town's premier African music venue. Experience live performances from local and touring artists, featuring everything from traditional African rhythms to contemporary Afrobeat and Amapiano.
              </p>
              <p className="text-gray-300 mb-6">
                Our state-of-the-art sound system and intimate setting create the perfect atmosphere for an unforgettable night of music, dancing, and authentic African culture.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Music className="w-6 h-6 text-kamalo-red" />
                  <span>Live Performances</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>VIP Tables</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-kamalo-red" />
                  <span>Friday Nights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-kamalo-red" />
                  <span>Premium Sound</span>
                </div>
              </div>
            </div>
          </div>

          {/* Entertainment Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Music className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Live African Music</h3>
                <p className="text-gray-300">Authentic performances featuring traditional and contemporary African artists</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">DJ Sets</h3>
                <p className="text-gray-300">Curated playlists of Afrobeat, Amapiano, and Congolese classics</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Star className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Special Events</h3>
                <p className="text-gray-300">Album launches, cultural celebrations, and exclusive performances</p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem 
                  value="faqs" 
                  className="bg-black/50 rounded-lg border border-gray-800 data-[state=open]:border-kamalo-red transition-colors"
                >
                  <AccordionTrigger className="text-white hover:text-kamalo-red transition-colors text-left py-6 px-6 text-xl font-bold">
                    Frequently Asked Questions
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
          </div>

          {/* Call to Action */}
          <div className="text-center bg-black/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Book Your <span className="text-kamalo-red">VIP Experience</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Reserve your table for our next live music event and enjoy premium seating, bottle service, and an unforgettable night.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                Reserve VIP Table: +27 73 159 8909
              </a>
              <a
                href="/reservations"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Online Booking
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LiveEntertainment;