"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { SolutionSlide } from "@/types/content";

const slides: SolutionSlide[] = [
  { category: "E-commerce", title: "E-commerce Customer Care", image: "/images/solutions/customer-care.png", href: "/solution?id=e-commerce" },
  { category: "Insurance", title: "Insurance Support Simplified", image: "/images/solutions/insurance-support.png", href: "/solution?id=insurance" },
  { category: "Finance & Banking", title: "Financial Services Support", image: "/images/solutions/banking.png", href: "/solution?id=banking" },
  { category: "Hotel", title: "Hospitality Support Excellence", image: "/images/solutions/hotel.png", href: "/solution?id=hotel" },
  { category: "Education", title: "Innovative EdTech Support", image: "/images/solutions/innovative-support.png", href: "/solution?id=education" },
  { category: "HR/Recruitment", title: "Streamlined HR Support", image: "/images/solutions/streamlined-support.png", href: "/solution?id=hr" },
  { category: "Travel", title: "Traveler-Centric Support", image: "/images/solutions/travel-support.png", href: "/solution?id=travel" },
  { category: "Real Estate", title: "Real Estate Support Solutions", image: "/images/solutions/real-estate-support.png", href: "/solution?id=real-estate" },
  { category: "Restaurant", title: "Responsive Restaurant Support", image: "/images/solutions/responsive-support.png", href: "/solution?id=restaurant" },
  { category: "Car Dealership", title: "Auto Sales & Service Support", image: "/images/solutions/auto-sales-support.png", href: "/solution?id=car-dealership" },
];

const SLIDE_WIDTH = 285; // 270px card + spacing, measured on live site
const COUNT = slides.length;
// 3 copies for a seamless infinite loop; start on the middle copy
const track = [...slides, ...slides, ...slides];

// whelp.co Industry-Specific Solutions: autoplay carousel, 1 card / 3s, 500ms ease steps (react-slick on origin)
export function SolutionsSection() {
  const [index, setIndex] = useState(COUNT);
  const [animated, setAnimated] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const snapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // After the 500ms transition settles, snap back into the middle copy without animation
  const step = useCallback((delta: number) => {
    setAnimated(true);
    setIndex((i) => i + delta);
    if (snapTimer.current) clearTimeout(snapTimer.current);
    snapTimer.current = setTimeout(() => {
      setIndex((i) => {
        if (i >= COUNT * 2 || i < COUNT) {
          setAnimated(false);
          return i >= COUNT * 2 ? i - COUNT : i + COUNT;
        }
        return i;
      });
    }, 550);
  }, []);

  const resetTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => step(1), 3000);
  }, [step]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timer.current) clearInterval(timer.current);
      if (snapTimer.current) clearTimeout(snapTimer.current);
    };
  }, [resetTimer]);

  const onArrow = (delta: number) => {
    step(delta);
    resetTimer();
  };

  return (
    <Container>
      <div className="flex flex-col justify-center pt-15">
        <h2 className="cooper m-0 text-center text-5xl leading-[64px] font-normal max-[992px]:text-[40px] max-[992px]:leading-[48px] max-[768px]:text-[32px] max-[768px]:leading-10">
          Industry-Specific Solutions
        </h2>
        <p className="poppins mx-auto mt-5 max-w-[520px] text-center text-base leading-6 text-(--subtext)">
          Explore our tailored support offerings across diverse sectors. From Education to
          Hospitality, we deliver specialized solutions to meet unique industry needs.
        </p>
        <div className="pt-12 pb-22">
          <div className="w-full max-w-screen px-[30px]">
            <div className="relative">
              <button
                aria-label="Previous"
                onClick={() => onArrow(-1)}
                className="absolute top-1/2 -left-[25px] z-10 block -translate-y-1/2 cursor-pointer border-0 bg-transparent pb-45 text-black"
              >
                <ChevronLeftIcon />
              </button>
              <div className="overflow-hidden">
                <div
                  className="flex"
                  style={{
                    transform: `translate3d(${-index * SLIDE_WIDTH}px, 0, 0)`,
                    transition: animated ? "transform 500ms" : "none",
                  }}
                >
                  {track.map((slide, i) => (
                    <div key={`${slide.href}-${i}`} className="w-[285px] shrink-0">
                      <div className="flex cursor-pointer flex-col items-center">
                        <div className="h-100 w-[270px] rounded-2xl border-2 border-black bg-white p-4">
                          {/* eslint-disable-next-line @next/next/no-img-element -- plain <img> as on origin */}
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full rounded-2xl"
                            loading="lazy"
                          />
                        </div>
                        <div className="w-[270px]">
                          <p className="poppins m-0 mt-4 text-base leading-6 text-(--subtext)">
                            {slide.category}
                          </p>
                          <p className="poppins m-0 mt-4 text-base leading-6 font-medium">
                            {slide.title}
                          </p>
                          <a href={slide.href} className="mt-4 flex items-center">
                            <p className="poppins m-0 mr-1 text-base leading-6 font-medium underline">
                              See more
                            </p>
                            <ArrowRightIcon />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                aria-label="Next"
                onClick={() => onArrow(1)}
                className="absolute top-1/2 -right-[25px] z-10 block -translate-y-1/2 cursor-pointer border-0 bg-transparent pb-45 text-black"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
