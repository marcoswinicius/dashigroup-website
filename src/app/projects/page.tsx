"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/config/projects';

export default function Projects() {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [activeFilter, setActiveFilter] = useState('all');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const filterProjects = (service: string) => {
        setActiveFilter(service);
        if (service === 'all') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => 
                project.services?.includes(service) ?? false
            ));
        }
    };

    return (
        <main className="w-full min-h-screen bg-dark-grey">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/project.jpg"
                        alt="Projects Banner"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-grey/60 via-white/10 to-transparent" />
                    <div className="absolute inset-0 bg-dark-grey/30" />
                </motion.div>

                <div className="relative h-full flex items-center px-4 md:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white text-soft-shadow">
                            Our Projects
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-4 md:px-24 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold text-primary-orange mb-6">
                        Building Tomorrow, Today 
                    </h2>
                    <p className="text-dark-grey text-lg leading-relaxed">
                        At Dashi Group, every project is a testament to our commitment to excellence, innovation, and precision. From cutting-edge data centers to sustainable residential communities, we transform complex challenges into lasting achievements. Explore our portfolio below and discover how we partner with clients to shape the future—one structure at a time.
                    </p>
                </motion.div>
            </section>

            {/* Filter Section */}
            <section className="px-4 md:px-24 py-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        {['all', 'REINFORCEMENT DETAILING', 'STEEL FIXING'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => filterProjects(filter)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                                    activeFilter === filter
                                        ? 'bg-primary-orange text-white'
                                        : 'bg-dark-grey/10 text-dark-grey hover:bg-dark-grey/20'
                                }`}
                            >
                                {filter === 'all' ? 'All Projects' : filter}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 md:px-24 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project} 
                                isMobile={isMobile}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}