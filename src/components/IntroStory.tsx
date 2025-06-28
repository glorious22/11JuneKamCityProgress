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
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-kamalo-dark to-black tribal-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
              Our Story: <span className="text-kamalo-red">From Rubble to Rhythm</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Kamalo City began in 2023 as a cultural hub where African heritage meets unforgettable flavor. Today, it's one of Cape Town's most loved food spots.
              </p>
              
              <p>
                What was once rubble has been rebuilt with purpose — creating a vibrant destination for food, music, and community spirit that honors our ancestors in every dish we serve.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-kamalo-red rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">From rubble to revival</span> – 
                  Founded in 2023 with vision and determination
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-kamalo-red rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Authentic African flavors</span> – 
                  Modern experience with traditional recipes
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-kamalo-red rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Complete cultural hub</span> – 
                  Food, music, events, and lifestyle services
                </p>
              </div>
            </div>

            {/* Owner Quote */}
            <div className="mt-8 p-6 bg-black/30 rounded-lg border-l-4 border-kamalo-gold">
              <blockquote className="text-lg italic text-kamalo-gold mb-2">
                "From rubble to rhythm: revived in 2023, today Kamalo City beats with flavor, community and soul."
              </blockquote>
              <cite className="text-sm text-gray-400">— Pitchou Ntumba, Founder</cite>
            </div>
          </div>

          {/* Image Section */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
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
        </div>
      </div>
    </section>
  );
};

export default IntroStory;