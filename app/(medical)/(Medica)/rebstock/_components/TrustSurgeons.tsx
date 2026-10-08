"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Typography from "./Typography";

export default function TrustSurgeons() {
  const slides = [
    {
      image: "/medical/rebstock/w1.webp",
      alt: "Surgical Instruments Rack",
      title: "Neuro Surgery",
    },
    {
      image: "/medical/rebstock/w2.webp",
      alt: "Precision Micro Tools",
      title: "Spine Surgery",
    },
    {
      image: "/medical/rebstock/w3.webp",
      alt: "Surgical Fixation on Cranial Model",
      title: "Cranio-Maxillofacial Plating Systems",
    },
    {
      image: "/medical/rebstock/w4.webp",
      alt: "Cranio-Maxillofacial Systems",
      title: "General Surgery",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev" | null>(null);
  const [animating, setAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection("next");
    setAnimating(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimating(true);
      });
    });

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setIsSliding(false);
      setSlideDirection(null);
      setAnimating(false);
    }, 550);
  }, [isSliding, slides.length]);

  const prevSlide = useCallback(() => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection("prev");
    setAnimating(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimating(true);
      });
    });

    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsSliding(false);
      setSlideDirection(null);
      setAnimating(false);
    }, 550);
  }, [isSliding, slides.length]);

  useEffect(() => {
    if (isHovered || isSliding) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, isSliding, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff < -40) {
      nextSlide();
    } else if (diff > 40) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseStartX.current === null) return;
    const diff = e.clientX - mouseStartX.current;
    if (diff < -40) {
      nextSlide();
    } else if (diff > 40) {
      prevSlide();
    }
    mouseStartX.current = null;
  };

  const goToSlide = (idx: number) => {
    if (idx === currentIndex || isSliding) return;
    if (idx > currentIndex) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  let renderedSlides: { item: (typeof slides)[0]; index: number; key: string }[] = [];
  if (slideDirection === "prev") {
    renderedSlides = [
      { item: slides[(currentIndex - 1 + slides.length) % slides.length], index: (currentIndex - 1 + slides.length) % slides.length, key: "prev-incoming" },
      { item: slides[currentIndex], index: currentIndex, key: "prev-current" },
      { item: slides[(currentIndex + 1) % slides.length], index: (currentIndex + 1) % slides.length, key: "prev-next" },
      { item: slides[(currentIndex + 2) % slides.length], index: (currentIndex + 2) % slides.length, key: "prev-next2" },
    ];
  } else {
    renderedSlides = [
      { item: slides[currentIndex], index: currentIndex, key: "current" },
      { item: slides[(currentIndex + 1) % slides.length], index: (currentIndex + 1) % slides.length, key: "next" },
      { item: slides[(currentIndex + 2) % slides.length], index: (currentIndex + 2) % slides.length, key: "next2" },
      { item: slides[(currentIndex + 3) % slides.length], index: (currentIndex + 3) % slides.length, key: "next3" },
    ];
  }

  return (
    <section id="portfolio" className="w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        <div
          className="flex flex-col min-[1026px]:flex-row min-[1026px]:items-end justify-between gap-6 sm:gap-8"
          data-aos="fade-up"
        >
          <div className="w-full min-[1026px]:w-1/2">
            <Typography
              variant="h2"
              color="dark"
              className="!font-semibold capitalize leading-snug"
            >
              Trusted By Leading Surgeons Worldwide
            </Typography>
          </div>

          <div className="w-full min-[1026px]:w-1/2 min-[1026px]:text-right">
            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed text-[#4A4A4A] w-full"
            >
              We Design And Manufacture Surgical Instruments And Implants That Are Essential To Every Surgery. Leading Surgeons Around The World Trust In Our Expertise And Decades Of Experience. Discover The Difference!
            </Typography>
          </div>
        </div>

        <div
          className="w-full"
          data-aos="fade-up"
          data-aos-delay="100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="trust-carousel-container relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <div
              className="flex items-center w-full"
              style={{
                gap: "var(--gap)",
                transform:
                  slideDirection === "next"
                    ? animating
                      ? "translateX(calc(-1 * (var(--wide-w) + var(--gap))))"
                      : "translateX(0)"
                    : slideDirection === "prev"
                    ? animating
                      ? "translateX(0)"
                      : "translateX(calc(-1 * (var(--wide-w) + var(--gap))))"
                    : "translateX(0)",
                transition: animating ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)" : "none",
              }}
            >
              {renderedSlides.map((slideObj, i) => {
                let cardWidth = "var(--narrow-w)";
                let cardTransition = "none";

                if (slideDirection === "next") {
                  if (i === 0) {
                    cardWidth = "var(--wide-w)";
                  } else if (i === 1) {
                    cardWidth = animating ? "var(--wide-w)" : "var(--narrow-w)";
                    cardTransition = animating ? "width 500ms cubic-bezier(0.25, 1, 0.5, 1)" : "none";
                  } else {
                    cardWidth = "var(--narrow-w)";
                  }
                } else if (slideDirection === "prev") {
                  if (i === 0) {
                    cardWidth = "var(--wide-w)";
                  } else if (i === 1) {
                    cardWidth = animating ? "var(--narrow-w)" : "var(--wide-w)";
                    cardTransition = animating ? "width 500ms cubic-bezier(0.25, 1, 0.5, 1)" : "none";
                  } else {
                    cardWidth = "var(--narrow-w)";
                  }
                } else {
                  if (i === 0) {
                    cardWidth = "var(--wide-w)";
                  } else {
                    cardWidth = "var(--narrow-w)";
                  }
                }

                return (
                  <div
                    key={slideObj.key + "-" + slideObj.index}
                    className="relative shrink-0 overflow-hidden shadow-sm border border-black/10 select-none bg-gray-100 group rounded-none h-[280px] sm:h-[340px] md:h-[400px] lg:h-[480px] xl:h-[540px] 2xl:h-[600px] min-[1920px]:h-[660px] min-[2500px]:h-[860px] min-[3800px]:h-[1180px]"
                    style={{
                      width: cardWidth,
                      transition: cardTransition,
                    }}
                    onClick={() => {
                      if (i === 1) nextSlide();
                      if (i === 2) nextSlide();
                    }}
                  >
                    {/* Slide image */}
                    <img
                      src={slideObj.item.image}
                      alt={slideObj.item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 select-none pointer-events-none rounded-none"
                      draggable={false}
                    />

                    {(i === 0 || (slideDirection === "next" && i === 1)) && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003F77]/95 via-[#003F77]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7 min-[1920px]:p-9 min-[2500px]:p-12 min-[3800px]:p-16 flex items-center justify-between z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                          <div className="flex-1 pr-4">
                            <Typography
                              variant="h2"
                              color="white"
                              className="!font-semibold leading-tight drop-shadow-md select-none"
                            >
                              {slideObj.item.title}
                            </Typography>
                          </div>
                          <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 min-[1920px]:w-12 min-[1920px]:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-22 min-[3800px]:h-22 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0 transition-transform duration-300 group-hover:scale-105">
                            {/* Arrow image */}
                            <img
                              src="/medical/rebstock/arrow.webp"
                              alt="Arrow"
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 min-[1920px]:w-5.5 min-[1920px]:h-5.5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 object-contain"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 mt-8 min-[2500px]:mt-14 min-[3800px]:mt-20">
            {slides.map((_, dotIdx) => {
              const isActive = dotIdx === currentIndex;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => goToSlide(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`trust-bullet rounded-full transition-all duration-300 cursor-pointer ${
                    isActive ? "trust-bullet-active" : "bg-[#D9D9D9] hover:bg-gray-400"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .trust-carousel-container {
          --gap: 16px;
          --wide-w: 100%;
          --narrow-w: 100%;
        }
        @media (min-width: 640px) {
          .trust-carousel-container {
            --gap: 20px;
            --wide-w: calc((100% - var(--gap)) * 0.6);
            --narrow-w: calc((100% - var(--gap)) * 0.4);
          }
        }
        @media (min-width: 1026px) {
          .trust-carousel-container {
            --gap: 24px;
            --wide-w: calc((100% - 2 * var(--gap)) * 0.512);
            --narrow-w: calc((100% - 2 * var(--gap)) * 0.244);
          }
        }
        @media (min-width: 2500px) {
          .trust-carousel-container {
            --gap: 36px;
          }
        }
        @media (min-width: 3800px) {
          .trust-carousel-container {
            --gap: 48px;
          }
        }

        .trust-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          display: inline-block;
          border: none;
          padding: 0;
        }
        .trust-bullet-active {
          width: 64px;
          height: 8px;
          background-color: #003f77 !important;
          border-radius: 9999px;
        }
        @media (min-width: 640px) {
          .trust-bullet-active {
            width: 76px;
          }
        }
        @media (min-width: 2500px) {
          .trust-bullet {
            width: 14px;
            height: 14px;
          }
          .trust-bullet-active {
            width: 120px;
            height: 14px;
          }
        }
        @media (min-width: 3800px) {
          .trust-bullet {
            width: 20px;
            height: 20px;
          }
          .trust-bullet-active {
            width: 170px;
            height: 20px;
          }
        }
      `}</style>
    </section>
  );
}
