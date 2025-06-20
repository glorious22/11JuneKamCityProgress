import { useEffect, useRef, useState } from "react";

const IntroStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-kamalo-dark to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kamalo City - Authentic African cuisine and culture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Story: <span className="text-kamalo-red">Heritage Served Daily</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Located in vibrant Goodwood, Cape Town, Kamalo City offers authentic African cuisine with warm hospitality. Experience traditional flavors and Ubuntu spirit where every guest becomes family.
              </p>
              
              <p>
                From our signature dishes crafted with traditional recipes to our premium hookah lounge and live entertainment, we bring the complete African cultural experience to Cape Town.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-kamalo-red rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Bringing ancestral recipes to Cape Town</span> – 
                  Traditional flavors passed down through generations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-kamalo-red rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Creating communal, cultural experiences</span> – 
                  More than dining, it's about community and connection
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-kamalo-red rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Blending tradition with modern hospitality</span> – 
                  Authentic culture meets contemporary comfort
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroStory;