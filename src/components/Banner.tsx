"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSwipeable } from 'react-swipeable';
import { bannerSlides, SLIDE_DURATION } from '@/config/banner';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    restartProgress();
  };

  const restartProgress = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const step = 100 / (SLIDE_DURATION / 100);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, 100);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  useEffect(() => {
    restartProgress();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[calc(100vh-128px)] overflow-hidden" {...handlers}>
      {/* Slides */}
      <div className="relative w-full h-full">
        {bannerSlides.map((slide, index) => {
          if (index !== currentSlide) return null;

          return (
            <div
              key={slide.id}
              className="absolute w-full h-full transition-opacity duration-1000 opacity-100"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute left-5 lg:left-24 top-1/2 -translate-y-1/2 max-w-2xl pr-14">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl"
                >
                  <span className="text-white block text-5xl lg:text-6xl font-bold">{slide.title}</span>
                  <span className="text-primary-orange block text-5xl lg:text-6xl font-bold">{slide.title_two}</span>
                  <p className="text-xl text-white/90 mb-6 mt-4">{slide.subtitle}</p>

                  <Link
                    href={slide.button_link}
                    className="inline-flex mb-4 items-center px-7 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-primary-orange hover:bg-primary-orange/90 transition-colors duration-200"
                  >
                    {slide.button_name}
                  </Link>
                </motion.div>
              </div>
            </div>
          );
        })}

      </div>

      {/* Botão Next */}
      <button
        onClick={nextSlide}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
        aria-label="Next Slide"
      >
        <ChevronRight className="text-white" size={36} />
      </button>

      {/* Indicadores de Slide com Timer */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-3 rounded-full overflow-hidden transition-all duration-300 ${index === currentSlide ? 'w-14 bg-white/50' : 'w-3 bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div
                className="absolute left-0 top-0 h-full bg-primary-orange transition-all"
                style={{
                  width: `${progress}%`,
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
