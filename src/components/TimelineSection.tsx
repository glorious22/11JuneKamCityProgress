import { useEffect, useRef, useState } from "react";
import { Utensils, Home, Music, Sparkles } from "lucide-react";

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
      icon: Home,
      title: "Kamalo City Opens",
      description: "From rubble to revival, the vision became reality. Kamalo City opened its doors, turning a ruined space into a cultural hub.",
      year: "2023"
    },
    {
      icon: Music,
      title: "Expansion & Events",
      description: "Expanded into venue hire, live entertainment, barbering, and hookah. Weekend entertainment and unique menu offerings.",
      year: "2024"
    },
    {
      icon: Sparkles,
      title: "Cultural Hotspot",
      description: "Became a top African restaurant and cultural hotspot in Cape Town, serving the community with authentic cuisine and events.",
      year: "2025"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-black to-kamalo-dark african-pattern">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="text-kamalo-red gold-underline">Journey</span>
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
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 200}
                >
                  <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-black/50 rounded-lg p-6 border border-gray-800 hover:border-kamalo-red transition-colors">
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

        {/* Mobile Timeline - Vertical Stack */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              
              return (
                <div 
                  key={index} 
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="bg-black/50 rounded-lg p-6 border border-gray-800 hover:border-kamalo-red transition-colors">
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