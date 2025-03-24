"use client"

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, ProjectCategory } from '@/config/projects';

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL WORKS');
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredProjects = selectedCategory === 'ALL WORKS' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
        setScrollLeft(containerRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (containerRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (containerRef.current) {
            containerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <section className="bg-dark-grey py-20">
            <div className="container mx-auto px-4">
                {/* Header com título e filtros */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-6 md:mb-0">
                        Featured Projects
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {(['ALL WORKS', 'REINFORCEMENT DETAILING Civil', 'STEEL FIXING', 'GROUNDWORK AND FALSEWORK'] as ProjectCategory[]).map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    selectedCategory === category
                                        ? 'bg-primary-orange text-white'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carrossel de Cards */}
                <div 
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    className={`relative overflow-x-auto scrollbar-hide ${
                        isDragging ? 'cursor-grabbing' : 'cursor-grab'
                    }`}
                >
                    <div className="flex gap-6">
                        {filteredProjects.map((project) => (
                            <Link
                                key={project.id}
                                href={project.link}
                                className="flex-shrink-0 w-[calc(33.333%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1rem)]"
                            >
                                <div className="relative h-[613px] rounded-lg overflow-hidden group">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}