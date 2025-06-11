import { Gamepad2, Trophy, Users, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GameNights = () => {
  useEffect(() => {
    document.title = "Game Nights - Kamalo City | Pool, Chess, Dominoes & More";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join our exciting game nights at Kamalo City featuring pool, chess, dominoes, Uno and more. Prizes, food, and community fun in Cape Town.');
    }
  }, []);

  const faqs = [
    {
      question: "When will game nights start?",
      answer: "Pool is already available — tournaments soon."
    },
    {
      question: "What types of games will be featured?",
      answer: "Chess, dominoes, Uno, cards, pool."
    },
    {
      question: "Do I need to bring my own games?",
      answer: "No — we've got you covered."
    },
    {
      question: "Will there be prizes for winners?",
      answer: "Yes — vouchers and other rewards."
    },
    {
      question: "Is it beginner-friendly?",
      answer: "100% — all are welcome."
    },
    {
      question: "Can I suggest games to include?",
      answer: "Yes — we love feedback."
    },
    {
      question: "Will food and drinks be available?",
      answer: "Yes — our full menu is open during game nights."
    },
    {
      question: "How do I stay updated on game night announcements?",
      answer: "Follow @kamalo_city on socials or join our WhatsApp Group."
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
              Game Nights <span className="text-kamalo-red">Coming Soon</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get ready for epic game nights at Kamalo City! Pool, Uno, chess, dominoes, and more with prizes, late-night eats, and the community energy that Goodwood has been waiting for.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Kamalo City - Game Night activities"
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Bringing Community Together</h2>
              <p className="text-gray-300 mb-4">
                Our upcoming game nights will feature a variety of classic and modern games, creating the perfect environment for friendly competition and community connection. From strategic chess matches to exciting pool tournaments, there's something for everyone.
              </p>
              <p className="text-gray-300 mb-6">
                Enjoy late-night snacks, drinks, and the chance to win prizes while meeting new people and reconnecting with friends. Game nights at Kamalo City will be the social highlight of your week.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Gamepad2 className="w-6 h-6 text-kamalo-red" />
                  <span>Multiple Games</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-kamalo-red" />
                  <span>Prizes Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>Community Event</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-kamalo-red" />
                  <span>Regular Nights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Game Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Games We'll Feature</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Pool</h3>
                <p className="text-gray-300">Classic 8-ball and 9-ball tournaments</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Card Games</h3>
                <p className="text-gray-300">Uno, poker, and traditional card games</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Chess</h3>
                <p className="text-gray-300">Strategic matches for all skill levels</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Dominoes</h3>
                <p className="text-gray-300">Classic domino competitions and fun</p>
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

          {/* Coming Soon Notice */}
          <div className="text-center bg-gradient-to-r from-kamalo-red/20 to-red-900/20 rounded-lg p-8 border border-kamalo-red/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-kamalo-red">Stay Tuned</span> for Launch Date
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We're putting the finishing touches on our game night setup. Follow us on social media or join our WhatsApp group for updates on when the fun begins!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
              >
                Join WhatsApp for Updates
              </a>
              <a
                href="https://instagram.com/kamalo_city"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GameNights;