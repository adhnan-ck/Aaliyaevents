import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(nameRef.current, {
        y: 80,
        opacity: 0,
        skewY: 6,
        duration: 1.1,
      })
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          buttonsRef.current?.children || [],
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
          },
          "-=0.4"
        )
        .from(
          imageRef.current,
          {
            scale: 1.08,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.9"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const shimmerCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  return (
    <>
      <style>{shimmerCss}</style>
      <section
        ref={heroRef}
        className="
          relative 
          min-h-screen 
          flex 
          items-center 
          justify-center 
          overflow-hidden 
          bg-gradient-to-b 
          from-background 
          to-secondary/20
          pt-24
          md:pt-32
          pb-12
          md:pb-20
        "
      >
        {/* soft glowing accents like modern reactbits/seraui style */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4 md:space-y-5">
                {/* tiny label above title */}
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1 text-xs md:text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Premium events across Kerala
                </span>

                <h1
                  ref={titleRef}
                  className="font-bold tracking-tight leading-tight"
                >
                  <span
                    ref={nameRef}
                    className="
                      block 
                      text-5xl 
                      md:text-6xl 
                      lg:text-7xl 
                      bg-gradient-to-r 
                      from-primary 
                      via-accent 
                      to-primary 
                      bg-clip-text 
                      text-transparent
                    "
                  >
                    Aaliya
                  </span>

                  <span
                    className="
                      mt-3 
                      inline-flex 
                      items-center 
                      justify-center 
                      lg:justify-start
                      gap-3 
                      text-[0.70rem] 
                      md:text-xs 
                      font-medium 
                      tracking-[0.35em] 
                      uppercase 
                      text-muted-foreground
                    "
                  >
                    <span className="hidden sm:inline-block h-px w-10 bg-border" />
                    Event Planner
                    <span className="hidden sm:inline-block h-px w-10 bg-border" />
                  </span>
                </h1>

                <p
                  ref={subtitleRef}
                  className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-xl mx-auto lg:mx-0"
                >
                  Crafting unforgettable weddings, corporate events, and intimate
                  celebrations with effortless elegance.
                </p>
              </div>

              {/* CTA + WhatsApp chat area */}
              <div ref={buttonsRef} className="space-y-4">
                {/* Optional other CTAs if you want them back */}
                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="
                      bg-primary 
                      hover:bg-primary/90 
                      text-primary-foreground 
                      px-8 
                      py-6 
                      text-lg 
                      font-medium 
                      rounded-full 
                      transition-all 
                      hover:scale-105 
                      bg-background/60 
                      backdrop-blur-sm
                    "
                  >
                    Explore Services
                  </Button>
                </div> */}

                {/* Shimmer WhatsApp Chat button */}
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://wa.me/919847980324" // 🔁 replace with your WhatsApp number
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex"
                  >
                    <div className="relative inline-flex items-center justify-center p-[1.5px] bg-gray-300 dark:bg-black rounded-full overflow-hidden group">
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "conic-gradient(from var(--angle), transparent 25%,rgb(212, 195, 6), transparent 50%)",
                          animation: "shimmer-spin 2.5s linear infinite",
                        }}
                      />
                      <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-8 py-3 text-sm md:text-base font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-900 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors duration-300">
                        CHAT NOW 
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div
              ref={imageRef}
              className="
                relative 
                aspect-[4/3] 
                rounded-3xl 
                overflow-hidden 
                shadow-2xl 
                shadow-black/25
                border 
                border-border/60
                bg-background/40
                backdrop-blur-sm
                -mt-4
                md:mt-0
              "
            >
              <img
                src={heroImage}
                alt="Elegant event setup by AaliyaEvents"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs md:text-sm text-white/85">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Live events in progress
                </span>
                <span className="hidden sm:inline-flex rounded-full bg-black/40 px-3 py-1 backdrop-blur">
                  Weddings • Corporate • Social
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
