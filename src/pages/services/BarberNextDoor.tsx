import { Scissors, Clock, User, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BarberNextDoor = () => {
  const faqs = [
    {
      question: "Do I need an appointment for a haircut?",
      answer: "No — walk-ins are welcome."
    },
    {
      question: "What styles do they offer?",
      answer: "Fades, lineups, modern cuts."
    },
    {
      question: "Are the barbers experienced?",
      answer: "Yes — highly skilled and on-trend."
    },
    {
      question: "What are the barber's hours?",
      answer: "9 AM to 9 PM daily."
    },
    {
      question: "How much do haircuts cost?",
      answer: "R60 flat rate."
    },
    {
      question: "Can I cut my hair and eat after?",
      answer: "Yes — grab a plate right after."
    },
    {
      question: "Do they accept card payments?",
      answer: "Yes — card and cash welcome."
    },
    {
      question: "Is it only men's haircuts?",
      answer: "Yes — no lady cuts."
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
              Get Fresh at <span className="text-kamalo-red">Barber Next Door</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional barbering services right next to Kamalo City. Get a fresh cut for just R60, then grab a meal and drinks. Walk-ins welcome, or book ahead for convenience.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/lovable-uploads/9360b9e9-30e1-4319-8db0-968661e99207.png"
                alt="Barber Shop"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Professional Cuts, Unbeatable Price</h2>
              <p className="text-gray-300 mb-4">
                Located right next to Kamalo City restaurant, our barbershop offers premium grooming services at an affordable R60 per cut. Our experienced barbers specialize in modern styles, classic cuts, and everything in between.
              </p>
              <p className="text-gray-300 mb-6">
                Perfect for a quick trim before dinner or a complete style refresh. After your cut, step next door for authentic African cuisine and drinks – the perfect combination for a complete experience.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Scissors className="w-6 h-6 text-kamalo-red" />
                  <span>Professional Cuts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-kamalo-red" />
                  <span>Walk-ins Welcome</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-kamalo-red" />
                  <span>Experienced Barbers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-kamalo-red" />
                  <span>Only R60</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Scissors className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Haircuts</h3>
                <p className="text-gray-300">Modern fades, classic cuts, and contemporary styles for all hair types</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <User className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Beard Trimming</h3>
                <p className="text-gray-300">Professional beard shaping and trimming to complement your style</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Star className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Style Consultation</h3>
                <p className="text-gray-300">Expert advice on the best cuts and styles for your face shape</p>
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
              Ready for a <span className="text-kamalo-red">Fresh Cut</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Walk in anytime or call ahead to secure your appointment. Don't forget to stay for food and drinks next door!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                Call for Appointment: +27 73 159 8909
              </a>
              <a
                href="/contact"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Visit Location
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BarberNextDoor;