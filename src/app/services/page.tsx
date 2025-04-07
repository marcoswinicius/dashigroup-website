"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, Ruler, HardHat, Shovel, Clock, Shield, Target } from 'lucide-react';

// Adicione estas interfaces logo após os imports
interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
    slug: string;
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function Services() {
    useEffect(() => {
        // Smooth scroll para as âncoras
        const handleClick = (e: MouseEvent) => {
            e.preventDefault();
            const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
            if (href) {
                const target = document.querySelector(href);
                target?.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleClick as EventListener);
        });

        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleClick as EventListener);
            });
        };
    }, []);

    return (
        <>
            {/* Banner Section */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src="/images/building-top-view.jpg"
                    alt="Services Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-grey via-dark-grey/50 to-transparent" />
                <div className="absolute inset-0 bg-dark-grey/40" />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex flex-col justify-center px-6 lg:px-24"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">Services</h1>
                    <h2 className="text-2xl lg:text-4xl text-white font-semibold">
                        Partnering for Success, Delivering Excellence
                    </h2>
                </motion.div>

                <a href="#intro" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="text-white w-8 h-8" />
                </a>
            </div>

            {/* Intro Section */}
            <motion.section 
                id="intro"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="py-16 px-6 lg:px-24 bg-primary-orange"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-dark-grey leading-relaxed">
                    At Dashi Group, we don&apos;t just provide services&mdash;we build partnerships that drive your projects to success. With a relentless focus on innovation, safety, and quality, we integrate seamlessly with your team to deliver high-profile construction solutions that stand the test of time.
                    </p>
                </div>
            </motion.section>

            {/* Services Section */}
            <section className="py-16 px-6 lg:px-24 bg-dark-grey">
                <h2 className="text-4xl font-bold text-center text-white mb-16">What We Offer</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Service Cards */}
                    <ServiceCard
                        icon={<Ruler className="w-12 h-12 text-primary-orange" />}
                        title="Reinforcement Detailing"
                        description="Cutting-edge RC detailing powered by the latest 2D and 3D software, tailored for complex projects."
                        image="/images/reinforce-ment-detailing.jpg"
                        slug="reinforcement-detailing"
                    />
                    
                    <ServiceCard
                        icon={<HardHat className="w-12 h-12 text-primary-orange" />}
                        title="Steel Fixing"
                        description="Precision-driven steel fixing delivered by a skilled, cohesive team committed to safety, quality, and timeliness."
                        image="/images/steel-fixing.jpg"
                        slug="steel-fixing"
                    />
                    
                    <ServiceCard
                        icon={<Shovel className="w-12 h-12 text-primary-orange" />}
                        title="Groundwork & Falsework"
                        description="Robust, versatile solutions that lay the foundation for success and support every phase of construction."
                        image="/images/groundwork-falsework.jpg"
                        slug="groundwork-falsework"
                    />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 px-6 lg:px-24 bg-dark-grey text-white">
                <h2 className="text-4xl font-bold text-center mb-16">Why Choose Dashi Group?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureCard
                        icon={<Shield className="w-12 h-12 text-primary-orange" />}
                        title="Safety"
                        description="Uncompromising standards that protect your team and your project."
                    />
                    
                    <FeatureCard
                        icon={<Target className="w-12 h-12 text-primary-orange" />}
                        title="Quality"
                        description="Craftsmanship that exceeds industry benchmarks."
                    />
                    
                    <FeatureCard
                        icon={<Clock className="w-12 h-12 text-primary-orange" />}
                        title="Progress"
                        description="Proactive problem-solving to keep your timeline and budget on track."
                    />
                </div>
            </section>

            {/* Contact CTA Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="py-16 px-6 lg:px-24 bg-primary-orange text-white text-center"
            >
                <h2 className="text-3xl font-bold mb-4">Ready to elevate your next project?</h2>
                <p className="mb-8">Contact us today and discover how we can transform your vision into reality.</p>
                <a href="/contact" className="inline-block bg-white text-primary-orange px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                </a>
            </motion.section>
        </>
    );
}

// Atualize os componentes auxiliares com as interfaces
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, image, slug }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-black/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-[0.5px] border-primary-orange/100"
    >
        <a href={`/services/${slug}`} className="block">
            <div className="relative h-48">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="p-6">
                <div className="mb-4">{icon}</div>
                <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
                <p className="text-white">{description}</p>
                <div className="mt-4">
                    <span className="text-primary-orange font-medium">Learn more →</span>
                </div>
            </div>
        </a>
    </motion.div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center p-6"
    >
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </motion.div>
);
