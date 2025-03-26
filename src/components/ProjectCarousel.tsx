"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Arrow from "./ui/Arrow"

// Função utilitária para combinar classes
function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Define the project data structure
type Project = {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  link: string
  category: "REINFORCEMENT DETAILING" | "STEEL FIXING" | "GROUNDWORK AND FALSEWORK"
}

// Sample project data
const projectsData: Project[] = [
  {
    id: "1",
    title: "Data Center",
    subtitle: "REINFORCEMENT DETAILING",
    imageUrl: "/images/data-science.jpg",
    link: "/case-studies/reinforcement-alpha",
    category: "REINFORCEMENT DETAILING",
  },
  {
    id: "2",
    title: "Panorama St Paul",
    subtitle: "STEEL FIXING",
    imageUrl: "/images/panorama-st-paul.png",
    link: "/case-studies/steel-fixing-beta",
    category: "STEEL FIXING",
  },
  {
    id: "3",
    title: "Ashley Road",
    subtitle: "REINFORCEMENT DETAILING",
    imageUrl: "/images/ahsley-road.jpg",
    link: "/case-studies/groundwork-gamma",
    category: "STEEL FIXING",
  },
  {
    id: "4",
    title: "Lombard Square",
    subtitle: "STEEL FIXING",
    imageUrl: "/images/lombard-square.jpg",
    link: "/case-studies/reinforcement-delta",
    category: "REINFORCEMENT DETAILING",
  },
  {
    id: "5",
    title: "Steel Fixing Epsilon",
    subtitle: "REINFORCEMENT DETAILING",
    imageUrl: "/images/construction-people.jpg",
    link: "/case-studies/steel-fixing-epsilon",
    category: "STEEL FIXING",
  },
  {
    id: "6",
    title: "Groundwork Project Zeta",
    subtitle: "REINFORCEMENT DETAILING",
    imageUrl: "/images/construction-people.jpg",
    link: "/case-studies/groundwork-zeta",
    category: "GROUNDWORK AND FALSEWORK",
  },
]

// Filter categories
const filterCategories = [
  "ALL WORKS",
  "REINFORCEMENT DETAILING",
  "STEEL FIXING",
  "GROUNDWORK AND FALSEWORK",
] as const

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterCategories)[number]>("ALL WORKS")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const lastDragX = useRef<number>(0)

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === "ALL WORKS") {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter((project) => project.category === activeFilter))
    }

    // Reset scroll position when filter changes
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0
      setIsAtStart(true)
      setIsAtEnd(false)
    }
  }, [activeFilter])

  // Check scroll position to update button states
  const checkScrollPosition = () => {
    if (!carouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current

    // Check if at start
    setIsAtStart(scrollLeft <= 10)

    // Check if at end (with a small buffer for rounding errors)
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10)
  }

  // Add scroll event listener to check position
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    // Initial check
    checkScrollPosition()

    // Add event listener
    carousel.addEventListener("scroll", checkScrollPosition)
    return () => carousel.removeEventListener("scroll", checkScrollPosition)
  }, [filteredProjects])

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return

    setIsDragging(true)
    setStartX(e.clientX)
    setScrollLeft(carouselRef.current.scrollLeft)
    lastDragX.current = e.clientX

    // Apply grabbing cursor to the body for consistent cursor during drag
    document.body.style.cursor = "grabbing"
    // Prevent text selection during dragging
    document.body.classList.add("select-none")
  }

  // Handle touch start for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return

    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setScrollLeft(carouselRef.current.scrollLeft)
    lastDragX.current = e.touches[0].clientX

    // Prevent text selection during dragging
    document.body.classList.add("select-none")
  }

  // Handle mouse move for dragging with precise 1:1 movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()

    const currentX = e.clientX

    // Update last position
    lastDragX.current = currentX

    // Move the carousel with the cursor in a 1:1 ratio
    carouselRef.current.scrollLeft = scrollLeft - (currentX - startX)
  }

  // Handle touch move for mobile with precise 1:1 movement
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault() // Prevent page scrolling while dragging

    const currentX = e.touches[0].clientX

    // Update last position
    lastDragX.current = currentX

    // Move the carousel with the touch in a 1:1 ratio
    carouselRef.current.scrollLeft = scrollLeft - (currentX - startX)
  }

  // Handle mouse up to stop dragging - no momentum or snap
  const handleMouseUp = () => {
    setIsDragging(false)
    document.body.style.cursor = ""
    document.body.classList.remove("select-none")

    // No momentum or snap - just leave the carousel where it is
  }

  // Handle scroll to previous card
  const scrollPrev = () => {
    if (!carouselRef.current || isAtStart) return

    const itemWidth = carouselRef.current.querySelector(".carousel-item")?.clientWidth || 0
    carouselRef.current.scrollBy({
      left: -itemWidth,
      behavior: "smooth",
    })
  }

  // Handle scroll to next card
  const scrollNext = () => {
    if (!carouselRef.current || isAtEnd) return

    const itemWidth = carouselRef.current.querySelector(".carousel-item")?.clientWidth || 0
    carouselRef.current.scrollBy({
      left: itemWidth,
      behavior: "smooth",
    })
  }

  return (
    <div className="bg-primary-orange w-full mx-auto pl-4 md:pl-6 lg:pl-28 py-12">
      {/* Header with title and filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
        <h2 className="text-3xl md:text-6xl font-bold">Featured Projects</h2>

        <div className="flex flex-wrap gap-7 mr-10 lg:mr-24">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={classNames(
                "py-1 text-xl transition-colors",
                activeFilter === category ? "border-b-3 border-dark-grey text-dark-grey" : "text-white hover:border-b-3 hover:border-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel container with navigation */}
      <div className="relative">
        {/* Left navigation arrow */}
        <button
          onClick={scrollPrev}
          className={classNames(
            "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 shadow-md transition-opacity",
            isAtStart ? "opacity-40 cursor-not-allowed" : "opacity-100 cursor-pointer"
          )}
          aria-label="Previous slide"
          disabled={isAtStart}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="carousel-container overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing touch-pan-x"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior
          style={{
            scrollBehavior: "auto", // Disable smooth scrolling to prevent any automatic movement
            WebkitOverflowScrolling: "touch", // For smoother scrolling on iOS
          }}
        >
          <div className="flex">
            {/* Main items - no duplicates */}
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="carousel-item flex-shrink-0 w-full sm:w-[calc(100%/1.5)] md:w-[calc(100%/2.2)] lg:w-[calc(100%/3.2)] p-2"
              >
                <div className="relative h-[400px] sm:h-[400px] md:h-[500px] lg:h-[613px] overflow-hidden rounded-lg group">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    draggable={false} // Prevent image dragging
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex justify-center items-end p-6">
                    <Link
                      href={project.link}
                      className="text-white text-xl md:text-2xl font-medium  hover:underline transition-all"
                      onClick={(e) => isDragging && e.preventDefault()} // Prevent navigation if dragging
                    >
                      <div className="flex flex-col  items-center gap-2">
                        <span className="text-2xl font-medium">{project.title}</span>
                        <span className="text-xl font-medium">{project.subtitle}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right navigation arrow */}
        <button
          onClick={scrollNext}
          className={classNames(
            "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 shadow-md transition-opacity",
            isAtEnd ? "opacity-40 cursor-not-allowed" : "opacity-100 cursor-pointer"
          )}
          aria-label="Next slide"
          disabled={isAtEnd}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Button */}
      <div className="flex items-end justify-end pr-24 pt-8">
        <Link href={'/projects'}>
          <button className="flex gap-2 text-xl text-dark-grey font-bold items-end cursor-pointer">
            Explore All Projects
            <Arrow />
          </button>
        </Link>
      </div>
    </div>
  )
}