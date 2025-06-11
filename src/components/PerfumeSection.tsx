import { Wind, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const PerfumeSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-kamalo-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-kamalo-red" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Discover Our <span className="text-kamalo-red">Signature Scents</span>
            </h2>
            <Sparkles className="w-8 h-8 text-kamalo-red" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Long-lasting, oil-based fragrances inspired by the world's top designers.
          </p>
          
          {/* Popular Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-black/50 rounded-lg p-6 text-center">
              <Wind className="w-8 h-8 text-kamalo-red mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">🔥 Popular Categories</h3>
              <p className="text-gray-300 text-sm">Oud, Vanilla Musk, Fresh Florals</p>
            </div>
            <div className="bg-black/50 rounded-lg p-6 text-center">
              <Sparkles className="w-8 h-8 text-kamalo-red mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">🏆 Best-Selling</h3>
              <p className="text-gray-300 text-sm">Designer-inspired favorites</p>
            </div>
            <div className="bg-black/50 rounded-lg p-6 text-center">
              <Wind className="w-8 h-8 text-kamalo-red mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Oil-Based</h3>
              <p className="text-gray-300 text-sm">Long-lasting & intense</p>
            </div>
            <div className="bg-black/50 rounded-lg p-6 text-center">
              <Sparkles className="w-8 h-8 text-kamalo-red mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Test Available</h3>
              <p className="text-gray-300 text-sm">Try before you buy</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-black/50 rounded-lg p-8 border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Find Your Perfect <span className="text-kamalo-red">Signature Scent</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Visit our perfume center inside the restaurant. Test any fragrance and discover your new favorite from our extensive collection of men's and women's fragrances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services/perfumes"
                className="bg-kamalo-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                View Full Perfume Collection
              </Link>
              <a
                href="tel:+27731598909"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Call: +27 73 159 8909
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfumeSection;