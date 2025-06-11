import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const GalleryCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-kamalo-dark to-black">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our <span className="text-kamalo-red">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a glimpse of the Kamalo City experience through our visual stories
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/gallery"
            className={`inline-block bg-kamalo-red text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all duration-300 font-semibold text-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            View Our Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;