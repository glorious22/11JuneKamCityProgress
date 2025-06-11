import { Sparkles, Star, Gift, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Perfumes = () => {
  const faqs = [
    {
      question: "What kind of perfumes do you sell?",
      answer: "Long-lasting oil-based scents for men and women."
    },
    {
      question: "Are these perfumes available online?",
      answer: "Not yet — in-store only."
    },
    {
      question: "Can I try a perfume before I buy?",
      answer: "Yes — testers available."
    },
    {
      question: "What are the best-selling scents?",
      answer: "We'll show you when you visit."
    },
    {
      question: "Are the perfumes oil or alcohol-based?",
      answer: "Oil-based — very strong and long-lasting."
    },
    {
      question: "Can I get a custom scent made?",
      answer: "Yes — now available."
    },
    {
      question: "Do you offer bundles or gift sets?",
      answer: "Yes — we often have combo specials."
    },
    {
      question: "Where in the restaurant are they sold?",
      answer: "Inside the barbershop."
    }
  ];

  const womenPerfumes = [
    "Armani Code", "Aromatics Elixir", "Angel", "Celine Dio-Magic", "Black Opium",
    "Britney Spears Curious", "Britney Spears Fantasy", "BVLGARI Omnia Crystalline",
    "Chloe", "Chloe Narcisse", "Coty Exclamation", "Chance Chanel", "Chanel No 5",
    "Chanel Allure", "Coco Mademoiselle", "Cool Water", "Coppelia", "DKNY",
    "DKNY Be Delicious", "Dolce & Gabbana", "D&G The One", "D&G Light Blue",
    "Elie Saab Le Parfum", "5th Avenue", "Far Away-Avon", "Giorgio Armani Si",
    "Gucci Rush", "Gucci Guilty", "So Good Girl", "Clinique Happy", "Hugo Boss",
    "Happy Clinic", "Heat Beyonce", "Hypnotic Poison", "Issey Miyake", "J'adore",
    "Jean Paul Gaultier", "JS", "Kenzo Flowers", "Knowing", "Lacoste Pour Ferme",
    "Lacoste Pink", "Lady One Million", "La Vie Est Belle", "Mediterranean",
    "Marc Jacobs Daisy Eau So Fresh", "Narcissi Rodriguez", "Nicky Minaj Pink Friday",
    "Paco R Olympea", "Panache", "Pleasure", "Poison", "Paris Hilton Teasen",
    "Provocative", "Ralph Lauren Blue", "Red Door", "Red Door Night", "Tommy Girl",
    "Thierry Mugler Alien", "Versace Bright Crystal", "YSL-Opium", "212 Carolina Herrera",
    "White Diamond", "Kim Kardashian Kim de Kim", "Little Black Dress", "Lilo Life",
    "Jimmy Choo", "Victoria's Secret Bombshell", "Michael Kors", "Gucci Rush II",
    "DKNY Green Apple", "C.K Euphoria", "Versace Dylan Blue", "Baby Johnson",
    "Britney Fantasy Midnight", "Crazy Love by Armour", "First by Lee Van Cleef",
    "Narciso Rouge", "Our Moment", "Royal Desire", "Azaro Now", "Dunhill For Her",
    "CK One Unisex", "BVLGARI Blue", "Channel Premium", "Euphoria Gold",
    "Issey Miyaki Green", "Red Door Night", "Beautiful", "Versace Rose",
    "Versace Gold", "Shakira", "Escado Born in Paradise", "212 VIP Rose",
    "212 VIP", "Guess", "Black XS Vanilla", "Taboo"
  ];

  const menPerfumes = [
    "Antonio Banderas", "Aramis Original", "Armani Code", "Armani Black Code",
    "Azzaro Chrome", "Azzaro Chrome Legend", "Boss Bottled", "Boss Element Aqua",
    "BVLGARI Aqua", "BVLGARI Blue", "BVLGARI Man in Black", "CK One", "Chanel Blue",
    "Cool Water", "Creed Adventus", "Dolce & Gabbana", "D&G Light Blue",
    "David Beckham Signature", "Diesel For Men", "Diesel Only the Brave",
    "Dior Sauvage", "DKNY", "Dunhill Blue", "Dunhill Desire", "Dunhill Red",
    "English Blazer", "Fahrenheit", "Ferrari Black", "Guerlain Homme",
    "Giorgio Armani", "Gucci Rush", "Hugo Boss Blue", "Hugo Boss", "Hugo Boss Orange",
    "Issey Miyake", "Issey Blue", "Jean Paul Gaultier", "Joop Original", "Kouros",
    "Lacoste Original", "Lacoste Blue", "M-7", "Michael Kors", "Mont Blanc Legend",
    "Old Spice", "Opium", "Paco R Black XS", "Paco R One Million", "Paco R Invictus",
    "Ted Lapidus", "Terre d'Hermes", "Tom Ford Noir", "Aramis Havana", "Tommy Boy",
    "Tsar", "Versace", "212 VIP", "Gianni Versace", "Black Musk", "Mr Burberry",
    "Escada", "Armani Emporio", "Angel", "Lacoste White", "Adidas", "Guess",
    "Tom Ford Unisex", "Armani Divine", "Euphoria", "Gucci Guilty Black",
    "Dunhill Fresh", "Givenchy /Gentlemen Only", "Tsar Black"
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      
      <div className="pt-24 px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exclusive <span className="text-kamalo-red">Perfume Collection</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our curated selection of premium 100% oil-based fragrances at Kamalo City. Long-lasting, intense scents inspired by the world's top designers, available in the heart of Goodwood.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/lovable-uploads/e8bac841-0a55-4ef6-be6d-f24cbc468ab1.png"
                alt="Kamalo City - Premium perfume collection"
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Premium Oil-Based Fragrances</h2>
              <p className="text-gray-300 mb-4 text-base">
                Our perfume collection features carefully selected oil-based fragrances that offer superior longevity and intensity compared to traditional alcohol-based perfumes. Each scent is inspired by renowned designer fragrances, providing luxury at accessible prices.
              </p>
              <p className="text-gray-300 mb-6 text-base">
                Whether you're looking for something bold and exotic or subtle and elegant, we have the perfect fragrance for every personality. Visit us to experience these scents in person and find your perfect match.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-kamalo-red" />
                  <span>Oil-Based Formula</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-kamalo-red" />
                  <span>Long-Lasting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="w-6 h-6 text-kamalo-red" />
                  <span>Designer Inspired</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>Test Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Perfume Collections */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Complete Collection</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Women's Fragrances */}
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-kamalo-red mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Women's Fragrances
                </h3>
                <div className="max-h-96 overflow-y-auto pr-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {womenPerfumes.map((perfume, index) => (
                      <div key={index} className="text-gray-300 text-sm py-1 border-b border-gray-700/50 last:border-b-0">
                        • {perfume}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Men's Fragrances */}
              <div className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <h3 className="text-2xl font-bold text-kamalo-red mb-6 flex items-center gap-3">
                  <Star className="w-6 h-6" />
                  Men's Fragrances
                </h3>
                <div className="max-h-96 overflow-y-auto pr-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {menPerfumes.map((perfume, index) => (
                      <div key={index} className="text-gray-300 text-sm py-1 border-b border-gray-700/50 last:border-b-0">
                        • {perfume}
                      </div>
                    ))}
                  </div>
                </div>
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
              Find Your <span className="text-kamalo-red">Signature Scent</span>
            </h2>
            <p className="text-gray-300 mb-6 text-base">
              Visit our perfume collection at Kamalo City and let our team help you discover the perfect fragrance for any occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
              >
                Call Us: +27 73 159 8909
              </a>
              <a
                href="/contact"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Perfumes;