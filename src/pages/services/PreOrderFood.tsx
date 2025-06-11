import { Utensils, Clock, Car, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PreOrderFood = () => {
  const faqs = [
    {
      question: "How do I pre-order food from Kamalo City?",
      answer: "Order via Uber Eats or WhatsApp."
    },
    {
      question: "Can I pre-order for a group or office lunch?",
      answer: "Yes, we handle large orders easily."
    },
    {
      question: "What dishes are available for pre-order?",
      answer: "Our full menu — wings, platters, grills, etc."
    },
    {
      question: "Can I customize my order?",
      answer: "Not currently, but everything's crafted to be delicious."
    },
    {
      question: "How do I pay for a pre-order?",
      answer: "Cash at pickup or online."
    },
    {
      question: "When is food ready after I order?",
      answer: "Within 20 minutes."
    },
    {
      question: "Is delivery available yet?",
      answer: "Not yet, but coming soon."
    },
    {
      question: "Can I pre-order for a specific pickup time?",
      answer: "Yes — just let us know."
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
              Pre-Order Your <span className="text-kamalo-red">African Feast</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Skip the wait and pre-order authentic African dishes from Kamalo City. Fresh ingredients, traditional recipes, and convenient pickup options in Cape Town. <strong>We don't currently offer delivery, but delivery is coming soon!</strong>
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"
                alt="African Food"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Order Ahead, Taste Perfection</h2>
              <p className="text-gray-300 mb-4">
                From grilled meats to traditional stews, our pre-order system lets you secure your favorite dishes ahead of time. Perfect for office lunches, family dinners, or special occasions.
              </p>
              <p className="text-gray-300 mb-6">
                All meals are prepared fresh using authentic African spices and cooking methods. Currently available for pickup only, with delivery service launching soon.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Utensils className="w-6 h-6 text-kamalo-red" />
                  <span>Fresh Ingredients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-kamalo-red" />
                  <span>Quick Pickup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-kamalo-red" />
                  <span>Delivery Coming Soon</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-kamalo-red" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Dishes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Pre-Order Items</h2>
            <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-kamalo-red">•</span>
                  <span>Fumbwa with Dry Fish</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-kamalo-red">•</span>
                  <span>Grilled Thomson (Fish)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-kamalo-red">•</span>
                  <span>Grilled Pork (380g)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-kamalo-red">•</span>
                  <span>Fried Makayabu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-kamalo-red">•</span>
                  <span>Fried Thomson</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-kamalo-red">•</span>
                  <span>Beef Stew (355g)</span>
                </li>
              </ul>
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
              Ready to <span className="text-kamalo-red">Pre-Order</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Order now through Uber Eats or call us directly for custom arrangements and large orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-kamalo-red hover:bg-red-700 text-white px-8 py-3">
                <a href="https://www.ubereats.com/za/store/kamalo-city-restaurant/srnMses4VESmEwzdo4gxrw" target="_blank" rel="noopener noreferrer">
                  Order on Uber Eats
                </a>
              </Button>
              <Button asChild variant="outline" className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red hover:text-white px-8 py-3">
                <a href="tel:+27731598909">
                  Call to Order: +27 73 159 8909
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PreOrderFood;