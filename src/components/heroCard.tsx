"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Img1 from "/public/image/img1.jpg";
import Img2 from "/public/image/img2.jpg";
import Img3 from "/public/image/img3.jpg";
import Img4 from "/public/image/img4.jpg";
import Img5 from "/public/image/img5.png";
import Img6 from "/public/image/img6.jpg";

const slides = [
  {
    id: 1,
    image: Img1,
    alt: "WAN 2.2 Image generation",
    model: "WAN 2.2 Model",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the latest new and powerful WAN 2.2 model. Exceptional prompt adherence and rating.",
    buttonText: "Try WAN 2.2",
  },
  {
    id: 2,
    image: Img2,
    alt: "Open Source",
    model: "FLUX.1 Krea Model",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "Explore our collection of open source AI models and contribute to the community-driven development.",
    buttonText: "Explore",
  },
  {
    id: 3,
    image: Img3,
    alt: "FLUX.1 Krea",
    model: "FLUX.1 Krea Model",
    title: "FLUX.1 Krea",
    subtitle: "FLUX.1 Krea",
    description:
      "We've made it our mission to put FLUX.1 Krea model under Krea's control. Download it on our model explorer and the technical report of",
    buttonText: "Try FLUX.1",
  },

  {
    id: 4,
    image: Img4,
    alt: "Community Models",
    model: "Community Models",
    title: "Community",
    subtitle: "Community Discoveries",
    description:
      "Discover and contribute to community-driven AI models that push the boundaries of innovation.",
    buttonText: "Explore Community",
  },
  {
    id: 5,
    image: Img5,
    alt: "Latest Research",
    model: "Research Model",
    title: "Latest Research",
    subtitle: "Research Updates",
    description:
      "Stay updated with the latest research in AI and machine learning from top institutions.",
    buttonText: "Read Research",
  },
  {
    id: 6,
    image: Img6,
    alt: "AI Ethics",
    model: "AI Ethics Model",
    title: "AI Ethics",
    subtitle: "AI Ethics Discussions",
    description:
      "Join the conversation on AI ethics and responsible AI development.",
    buttonText: "Join the Discussion",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : (prev - 1) % slides.length
    );
  };

  return (
    <div className="relativ w-full overflow-hidden mt-14">
      {/* Slides wrapper */}
      <div className="flex justify-center items-center gap-6 transition-transform duration-700 ease-in-out">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const isNext = index === (currentSlide + 1) % slides.length;

          return (
            <div
              key={slide.id}
              className={`relative transition-all duration-700 ease-in-out rounded-xl overflow-hidden ${
                isActive
                  ? "w-2/3 opacity-100"
                  : isNext
                  ? "w-1/3 opacity-70"
                  : "hidden"
              }`}
            >
              <div className="relative h-[400px]">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={isActive}
                  className="object-cover"
                />
                {/* Overlay text only for active slide */}
                <div>
                  {/* subtle dark overlay to keep text readable */}
                  <div className="absolute inset-0 bg-black/35" />

                  {/* small label in the top-left */}
                  <div className="absolute left-6 top-4 z-20 pointer-events-auto">
                    <span className="inline-block text-xs uppercase tracking-wide text-white">
                      {slide.model}
                    </span>
                  </div>

                  {/* giant centered title (visual centerpiece) */}
                  <h2
                    className="absolute left-1/2 top-1/2 z-20 w-[90%] -translate-x-1/2 -translate-y-1/2 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white tracking-tight pointer-events-none"
                    aria-hidden
                  >
                    {slide.title}
                  </h2>

                  {/* lower content area: subtitle, description (left) and CTA (right) */}
                  <div className="absolute left-6 right-6 bottom-6 z-20 flex items-end justify-between gap-4">
                    {/* left column - subtitle + description */}
                    <div className="max-w-[44%] text-left pointer-events-auto">
                      <h3 className="text-lg font-semibold text-white">
                        {slide.subtitle}
                      </h3>
                      <p className="mt-2 text-sm text-white/90 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    {/* right column - CTA */}
                    <div className="pointer-events-auto">
                      <button
                        className="inline-flex items-center justify-center rounded-full bg-base-100 px-4 py-2 text-sm font-medium text-base-content shadow-md hover:brightness-75 transition-colors duration-300"
                        aria-label={slide.buttonText}
                      >
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center px-6 py-2 ">
        {/* Dots */}
        <div className="w-full flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? "bg-base-content" : "bg-base-content/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              title={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="bg-base-content/40 p-2 rounded-full text-base-100 hover:bg-base-content/50 transition-colors duration-300"
            aria-label="Previous Slide"
            title="Previous Slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-base-content/40 p-2 rounded-full text-base-100 hover:bg-base-content/50 transition-colors duration-300"
            aria-label="Next Slide"
            title="Next Slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
