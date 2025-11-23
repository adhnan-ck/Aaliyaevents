import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Sparkles, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Sparkles,
    title: 'Professional Planning',
    description: 'Meticulous attention to detail ensuring every aspect of your event is perfect',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Seasoned professionals dedicated to bringing your vision to life',
  },
  {
    icon: Award,
    title: 'Premium Quality & Hygiene',
    description: 'Uncompromising standards in food quality, presentation, and safety',
  },
  {
    icon: MapPin,
    title: 'Pan-Kerala Service',
    description: 'Comprehensive coverage across all districts of Kerala',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=80',
            toggleActions: 'play none none reverse',
          },
          x: index % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with AaliyaEvents
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="flex gap-6 p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
