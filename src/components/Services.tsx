import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Briefcase, UtensilsCrossed, Cake, Users, Rocket, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Sparkles,
    title: 'Wedding Planner',
    description: 'Turning your dream wedding into reality with meticulous planning and execution',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional corporate gatherings that leave lasting impressions',
  },
  {
    icon: UtensilsCrossed,
    title: 'Event Catering',
    description: 'Exquisite culinary experiences with premium quality and hygiene',
  },
  {
    icon: Cake,
    title: 'Birthday Events',
    description: 'Memorable celebrations designed to make every moment special',
  },
  {
    icon: Users,
    title: 'Public Meetings',
    description: 'Seamless organization for conferences and public gatherings',
  },
  {
    icon: Rocket,
    title: 'Product Launch + Promotions',
    description: 'Impactful events that showcase your brand brilliantly',
  },
  {
    icon: Palette,
    title: 'Interior Designing',
    description: 'Stunning venue transformations that captivate and inspire',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ideas We Can Help With
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive event planning and catering services across Kerala
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic">
            We serve all across Kerala
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
