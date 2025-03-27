"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Project } from '@/types/project';

interface ProjectCardProps {
    project: Project;
    isMobile: boolean;
}

export default function ProjectCard({ project, isMobile }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        if (!isMobile) {
            router.push(`/projects/${project.slug}`);
        } else {
            setIsHovered(!isHovered);
        }
    };

    const handleReadMore = (e: React.MouseEvent) => {
        e.stopPropagation();
        router.push(`/projects/${project.slug}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer group"
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            onClick={handleClick}
        >
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/90">{project.shortDescription}</p>
                {project.status && (
                    <span className={`inline-block mt-3 px-3 py-1 rounded-full text-sm ${
                        project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
                    } text-white`}>
                        {project.status}
                    </span>
                )}
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-primary-orange/90 p-6 flex flex-col justify-center"
                    >
                        <h4 className="text-xl font-bold text-white mb-4">Services</h4>
                        <ul className="text-white space-y-2 mb-6">
                            {project.services?.map((service, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="w-2 h-2 bg-white rounded-full mr-2" />
                                    {service}
                                </li>
                            )) ?? null}
                        </ul>
                        {isMobile && (
                            <button
                                onClick={handleReadMore}
                                className="bg-white text-primary-orange px-6 py-2 rounded-full mt-4 hover:bg-white/90 transition-colors"
                            >
                                Read More
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
} 