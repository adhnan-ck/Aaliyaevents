import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current?.children || [], {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Thank you! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: '',
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Get Started</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's create something unforgettable together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 border-border/50 focus:border-accent"
                required
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 border-border/50 focus:border-accent"
                required
              />
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 border-border/50 focus:border-accent"
                required
              />
            </div>

            <div>
              <Select
                value={formData.eventType}
                onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                required
              >
                <SelectTrigger className="h-12 border-border/50 focus:border-accent">
                  <SelectValue placeholder="Select Event Type *" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="catering">Event Catering</SelectItem>
                  <SelectItem value="public">Public Meeting</SelectItem>
                  <SelectItem value="launch">Product Launch</SelectItem>
                  <SelectItem value="interior">Interior Design</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Textarea
                placeholder="Tell us about your event..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[120px] border-border/50 focus:border-accent resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium rounded-full transition-all hover:scale-105"
            >
              Start Your Event With Us
            </Button>
          </form>

          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border/50 space-y-4">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>📧 Email: aaliyacaterin@gmail.com</p>
                <p>📱 Phone: +91 9847980324</p>
                <p>📍 Location: Muzhappilangad, Thalassery</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl overflow-hidden border border-border/50 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.523393138921!2d75.44532430000002!3d11.798570699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba417ec544db07b%3A0x2f6b0be222fb10d4!2sAaliya%20Events!5e0!3m2!1sen!2sin!4v1763908400363!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kerala Location"
              />

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
