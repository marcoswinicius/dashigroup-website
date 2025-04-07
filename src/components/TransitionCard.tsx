"use client"

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CardData {
    image: string;
    title: string;
    subtitle?: string;
}

const cards: CardData[] = [
    {
        
        image: "/images/reinforcemet-detailing.jpg",
        title: "REINFORCEMENT DETAILING",
        subtitle: "civil engineering & consulting"
    },
    {
        image: "/images/rc-installation.jpg",
        title: "RC INSTALLATION",
        subtitle: "Steel fixing"
    },
    {
        image: "/images/groundwork-and-falsework-tab.jpg",
        title: "GROUNDWORK & FALSEWORK"
    }
];

export default function TransitionCard() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number>(0);
    const accumulatedTimeRef = useRef<number>(0);

    const DURATION = 5000; // 5 segundos

    const animateProgress = useCallback((timestamp: number) => {
        if (!lastTimeRef.current) lastTimeRef.current = timestamp;
        const deltaTime = timestamp - lastTimeRef.current;
        lastTimeRef.current = timestamp;

        if (!isHovered && !isMobileOpen) {
            accumulatedTimeRef.current += deltaTime;
            const newProgress = Math.min((accumulatedTimeRef.current / DURATION) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                setCurrentIndex((prev) => (prev + 1) % cards.length);
                accumulatedTimeRef.current = 0;
                setProgress(0);
            }
        }

        animationFrameRef.current = requestAnimationFrame(animateProgress);
    }, [isHovered, isMobileOpen]);

    const nextCard = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
        accumulatedTimeRef.current = 0;
        setProgress(0);
    }, []);

    const prevCard = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
        accumulatedTimeRef.current = 0;
        setProgress(0);
    }, []);

    useEffect(() => {
        animationFrameRef.current = requestAnimationFrame(animateProgress);
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [animateProgress]);

    const currentCard = cards[currentIndex];

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div
                className="relative overflow-hidden rounded-lg cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                <div className="relative h-[400px] md:h-[500px]">
                    <Image
                        src={currentCard.image}
                        alt={currentCard.title}
                        fill
                        className="object-cover transition-all duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-dark-grey/90 to-transparent transition-all duration-300 ${isHovered ? 'from-dark-grey/95' : ''}`} />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{currentCard.title}</h2>
                        {currentCard.subtitle && (
                            <p className="text-lg md:text-xl opacity-90">{currentCard.subtitle}</p>
                        )}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-orange/30">
                        <div
                            ref={progressBarRef}
                            className="h-full bg-primary-orange transition-none"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Link href='/services'>
                        <button className="bg-primary-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-orange/90 transition-colors">
                            Read more about this service
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
                <button
                    onClick={prevCard}
                    className="p-2 rounded-full bg-dark-grey text-white hover:bg-primary-orange transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextCard}
                    className="p-2 rounded-full bg-dark-grey text-white hover:bg-primary-orange transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}