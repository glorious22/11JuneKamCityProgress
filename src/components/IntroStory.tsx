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
    <section ref={sectionRef} className="py-16 px-4 bg-gradient-to-b from-kamalo-dark to-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Welcome to the Heart of <span className="text-kamalo-red">African Culture</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Located in vibrant Goodwood, Cape Town, Kamalo City offers authentic African cuisine with warm hospitality. Experience traditional flavors and Ubuntu spirit where every guest becomes family.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              From our signature dishes crafted with traditional recipes to our premium hookah lounge and live entertainment, we bring the complete African cultural experience to Cape Town.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroStory;