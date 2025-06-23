import { useEffect, useRef, useState } from "react";
import { Utensils, Home, Music, Sparkles, Heart } from "lucide-react";

const TimelineSection = () => {
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

  const timelineEvents = [
    {
      icon: Heart,
      title: "From Rubble to Rebirth",
      description: "Kamalo City officially opens after transforming a broken-down space into a vision of African culture and cuisine.",
      year: "2023"
    },
    {
      icon: Music,
      title: "Expansion & Growth",
      description: "Introduced new services including hookah lounge, barbershop, game nights, and vibrant weekend events.",
      year: "2024"
    },
    {
      icon: Sparkles,
      title: "Cultural Landmark",
      description: "Became a recognized hub for authentic African food and experiences in Cape Town, attracting a growing community of loyal customers.",
      year: "2025"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-black to-kamalo-dark">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="text-kamalo-red">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From vision to reality, discover the milestones that shaped Kamalo City into Cape Town's premier African dining destination.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-kamalo-red to-kamalo-gold"></div>
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} transition-all duration-1000 delay-${index * 200} fade-in ${
                    isVisible ? 'visible' : ''
                  }`}
                >
                  <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-black/50 rounded-lg p-6 border border-gray-800 hover:border-kamalo-red transition-colors card-hover">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        <IconComponent className="w-6 h-6 text-kamalo-red" />
                        <span className="text-kamalo-gold font-bold text-lg timeline-year">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-kamalo-red rounded-full border-4 border-kamalo-dark z-10"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              
              return (
                <div 
                  key={index} 
                  className={`timeline-item transition-all duration-1000 delay-${index * 200} fade-in ${
                    isVisible ? 'visible' : ''
                  }`}
                >
                  <div className="bg-black/50 rounded-lg p-6 border border-gray-800 hover:border-kamalo-red transition-colors card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="w-6 h-6 text-kamalo-red" />
                      <span className="text-kamalo-gold font-bold text-lg timeline-year">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;