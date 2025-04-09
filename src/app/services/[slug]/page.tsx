"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { services } from '@/config/services';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const service = services.find(s => s.slug === resolvedParams.slug);

    if (!service) {
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
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-grey/60 via-white/10 to-transparent" />
                    <div className="absolute inset-0 bg-dark-grey/30" />
                </motion.div>

                <div className="relative h-full flex items-center px-4 md:px-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-white title-soft-shadow"
                    >
                        {service.title}
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
                        <h2 className="text-primary-orange text-3xl mb-2">About this Service</h2>
                        {service.detailedDescription.split('\n\n').map((paragraph, index) => (
                            <p key={index} className='text-dark-grey mb-2 text-lg'>
                                {paragraph}
                            </p>
                        ))}
                        
                        <div className="mt-12">
                            <h3 className='text-primary-orange text-2xl mb-4'>Ready to get started?</h3>
                            <p className='text-dark-grey'>
                                Contact us today to discuss how our {service.title} service can benefit your next project.
                            </p>
                            <div className="mt-6">
                                <a 
                                    href="/contact" 
                                    className="bg-primary-orange text-white px-6 py-3 rounded-md font-medium hover:bg-primary-orange/90 transition-colors"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
