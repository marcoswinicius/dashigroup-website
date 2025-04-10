"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/config/projects';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const project = projects.find(p => p.slug === resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="w-full">
            <section className="relative h-[60vh] w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-grey/40 via-dark-grey/20 to-transparent" />
                    <div className="absolute inset-0 bg-dark-grey/30" />
                </motion.div>

                <div className="relative h-full flex items-center px-4 md:px-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-white title-soft-shadow"
                    >
                        {project.title}
                    </motion.h1>
                </div>
            </section>

            <section className="py-16 px-4 md:px-24 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-lg prose-invert"
                    >
                        <h2 className="text-primary-orange text-3xl mb-2">About the Project</h2>
                        <p className='text-dark-grey mb-2'>W
                            {project.detailedDescription || "Descrição detalhada em breve..."}
                        </p>
                        <h3 className='text-primary-orange text-2xl'>Services Provided</h3>
                        <ul className='text-dark-grey font-bold'>
                            {project.services?.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </main>
    );
} 