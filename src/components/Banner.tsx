"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { bannerSlides, SLIDE_DURATION } from '@/config/banner';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    setProgress(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / 10));
      });
    }, 10);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[790px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Conteúdo do Slide */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-2xl">
              <span className="text-white block text-6xl font-bold">{slide.title}</span>
              <span className="text-primary-orange block text-6xl font-bold">{slide.title_two}</span>
              <p className="text-xl text-white/90 mb-6 mt-4">
                {slide.subtitle}
              </p>
              
              {/* Timer */}
              <div className="w-full h-1 bg-white/20">
                <div
                  ref={progressRef}
                  className="h-full bg-white transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botão Next */}
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
        aria-label="Próximo slide"
      >        
        <p>Chevron</p>
      </button>

      {/* Indicadores de Slide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setProgress(0);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}