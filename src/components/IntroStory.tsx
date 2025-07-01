import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    <section ref={sectionRef} className="section-spacing bg-gradient-to-b from-kamalo-dark to-black tribal-pattern">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            The Kamalo City Journey: From <span className="text-kamalo-red">Rebirth to Renown</span>
          </h2>
          <div className="w-20 h-1 bg-kamalo-gold mx-auto mb-8"></div>
          
          {/* Updated About Preview */}
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Since 2023, Kamalo City has been more than just a restaurant — it's a cultural landmark in Cape Town. We serve soul-warming African dishes, host vibrant events, and bring people together through food, music, and tradition.
            </p>
            
            <Link to="/about">
              <Button className="btn-ghost px-8 py-4 text-lg rounded-full hover:scale-105 hover:shadow-lg transition duration-300 font-semibold">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroStory;