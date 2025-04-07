"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Arrow from "./ui/Arrow";

const projectsData = [
  {
    id: "1",
    title: "Data Center",
    subtitle: "REINFORCEMENT DETAILING",
    imageUrl: "/images/data-science.jpg",
    link: "/projects/data-center",
    category: "REINFORCEMENT DETAILING",
  },
  {
    id: "2",
    title: "Panorama St Paul",
    subtitle: "STEEL FIXING",
    imageUrl: "/images/panorama-st-paul.png",
    link: "/projects/panorama-st-pauls",
    category: "STEEL FIXING",
  },
  {
    id: "3",
    title: "Ashley Road",
    subtitle: "REINFORCEMENT DETAILING",
    imageUrl: "/images/ahsley-road.jpg",
    link: "/projects/ashley-road",
    category: "STEEL FIXING",
  },
  {
    id: "4",
    title: "Lombard Square",
    subtitle: "STEEL FIXING",
    imageUrl: "/images/lombard-square.jpg",
    link: "/projects/lombard-square",
    category: "REINFORCEMENT DETAILING",
  },
];

const filterCategories = [
  "ALL WORKS",
  "REINFORCEMENT DETAILING",
  "STEEL FIXING",
  "GROUNDWORK AND FALSEWORK",
] as const;

type Project = typeof projectsData[number];

export default function ProjectCarousel() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterCategories)[number]>("ALL WORKS");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeFilter === "ALL WORKS") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((p) => p.category === activeFilter)
      );
    }
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [activeFilter]);

  const scrollByAmount = () => carouselRef.current?.offsetWidth || 300;

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
    }
  };

  return (
    <section className="bg-primary-orange w-full py-12 pl-4 md:pl-10">
      <div className="px-4 md:pr-10 lg:pl-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-white">Featured Projects</h2>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`py-1 text-lg md:text-xl transition-colors border-b-2 ${
                  activeFilter === category ? "border-white text-white" : "border-transparent text-white/70 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <div
          ref={carouselRef}
          className="carousel-container flex gap-4 overflow-x-auto scroll-snap-x snap-x snap-mandatory touch-auto hide-scrollbar px-4"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`carousel-item w-[85%] sm:w-[calc(100%/1.5)] md:w-[calc(100%/2.2)] lg:w-[calc(100%/3.2)] snap-start shrink-0 ${index === 0 ? 'ml-2' : ''}`}
            >
              <div className="relative h-96 sm:h-[400px] md:h-[500px] lg:h-[613px] rounded-xl overflow-hidden group">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                                  <Link
                    href={project.link}
                    className="text-white text-lg md:text-2xl font-semibold hover:underline"
                  >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex justify-center items-end p-4">

                    <div className="flex flex-col items-center gap-1">
                      <span>{project.title}</span>
                      <span className="text-sm md:text-lg">{project.subtitle}</span>
                    </div>
                  
                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex justify-end mt-10 pr-6 md:pr-24">
        <Link href="/projects" className="text-xl text-white font-bold flex items-center gap-2">
          Explore All Projects
          <Arrow />
        </Link>
      </div>
    </section>
  );
}