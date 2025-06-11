import { useEffect, useRef, useState } from "react";

const AmbiancePreview = () => {
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
    <section id="atmosphere" ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="https://live.staticflickr.com/video/54577718634/716cc532ae/1080p.mp4?s=eyJpIjoiNTQ1Nzc3MTg2MzQiLCJlIjoxNzQ5NTgwNDg4LCJzIjoiNzE2Y2M1MzJhZSIsImkiOiIzMTMzNyJ9&sr=https%3A%2F%2Fwww.flickr.com%2Fphotos%2F202902991%40N05%2F54577718634%2Fin%2Fdateposted-public%2F" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Text overlay with reduced opacity */}
      <div className="relative z-10 text-center text-white px-6">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white/70">
            Experience the <span className="text-kamalo-red/80">Atmosphere</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/60">
            Step inside Kamalo City — the beating heart of Goodwood's nightlife and culture. From sizzling Congolese cuisine to smoky hookah lounges and Afro-fusion beats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmbiancePreview;