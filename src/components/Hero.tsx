"use client";

import { useState, useEffect } from "react";
import Button from "./ui/Button";
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

function HeroCarousel() {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
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
    <div className="relative w-full overflow-hidden mt-20">

      {/* Slides wrapper */}
      <div className="flex justify-center items-center gap-6 transition-transform duration-700 ease-in-out">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const isNext = index === (currentSlide + 1) % slides.length;

          return (
            <div
              key={slide.id}
              className={`relative transition-all duration-700 ease-in-out rounded-xl overflow-hidden 
            ${
              isActive
                ? "w-full sm:w-2/3 opacity-100"
                : isNext
                ? "hidden sm:block sm:w-1/3 opacity-70"
                : "hidden"
            }`}
            >
              <div className="relative h-[250px] sm:h-[320px] md:h-[400px]">
                
                {/* Image */}
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={isActive}
                  className="object-cover"
                />
                {/* Overlay */}
                <div>
                  <div className="absolute inset-0 bg-black/35" />

                  {/* label top-left */}
                  <div className="absolute left-4 sm:left-6 top-3 sm:top-4 z-20">
                    <span className="inline-block text-[10px] sm:text-xs uppercase tracking-wide text-white">
                      {slide.model}
                    </span>
                  </div>

                  {/* Title center */}
                  <h2
                    className="absolute top-1/3 left-1/2 sm:top-1/2 z-20 w-[90%] -translate-x-1/2 -translate-y-1/2 
                  text-center text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-white tracking-tight"
                  >
                    {slide.title}
                  </h2>

                  {/* bottom content */}
                  <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6 z-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
                    {/* Subtitle + description */}
                    <div className="sm:max-w-[60%] text-left">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {slide.subtitle}
                      </h3>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {slide.description}
                      </p>
                    </div>

                    <div className="pointer-events-auto flex justify-end">
                      <Button aria-label={slide.buttonText} variant="primary">
                        {slide.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots + Arrows */}
      <div className="flex items-center  pr-6 mt-1">
        {/* Dots */}
        <div className="flex justify-center w-full gap-2">
          {slides.map((_, index) => (
            <Button
              type="button"
              key={index}
              variant="dot"
              onClick={() => setCurrentSlide(index)}
              ariaLabel={`Go to slide ${index + 1}`}
              className={`${
                index === currentSlide
                  ? "bg-base-content"
                  : "bg-base-content/50"
              }`}
            >
              {""}
            </Button>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-3">
          <Button
            variant="carouselBtn"
            aria-label="Previous Slide"
            onClick={prevSlide}
          >
            <ChevronLeft size={16} />
          </Button>
          <Button
            variant="carouselBtn"
            aria-label="Next Slide"
            onClick={nextSlide}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
