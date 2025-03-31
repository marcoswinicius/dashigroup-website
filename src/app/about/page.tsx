"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import Indicators from '@/components/Indicators';
import { ChevronDown } from 'lucide-react';

export default function AboutUs() {
    return (
        <main className="w-full home-background">
            {/* Hero Section */}
            <section className="relative h-[80vh] w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/building.jpg"
                        alt="Dashi Group Building"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>

                <div className="relative h-full flex items-center px-4 md:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                            Excellence in
                            <span className="text-primary-orange block">Everything We Do</span>
                        </h1>
                    </motion.div>
                </div>
                <a href="#intro" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="text-white w-8 h-8" />
                </a>
            </section>

            {/* Main Content */}
            <section id='intro' className="bg-dark-grey py-12 px-4 md:px-24 home-background">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-white"
                    >
                        <p className="text-lg leading-relaxed">
                        Dashi Group is a London-based construction company founded in 2017 by Dashnor Loka, our visionary Managing Director. With over 23 years of experience in the industry, Dashnor established Dashi Group with a clear ambition: to set the standard as the market leader in steel fixing and reinforced concrete (RC) detailing across London. His expertise, refined over decades on London&apos;s most iconic projects, underpins everything we achieve.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="relative h-[300px]">
                                <Image
                                    src="/images/group-engineers-banner.jpg"
                                    alt="Group of Engineers"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-lg leading-relaxed">
                                Dashi Group has grown steadily since its inception, expanding its expertise to offer a comprehensive range of services. Today, we deliver end-to-end excellence through reinforcement detailing, RC frameworks, formwork, and concrete solutions.
                                </p>
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed">
                        Our holistic approach&mdash;spanning conceptual design to final construction&mdash;equips us with unique insights into the engineering workflow. This enables us to deliver strategic, cost-effective solutions that streamline processes, save time, and exceed expectations.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="flex flex-col justify-center">
                                <p className="text-lg leading-relaxed">
                                Under Dashnor&apos;s leadership, we&apos;ve had the privilege of partnering with industry-leading Tier 1 and Tier 2 contractors and top structural designers. Our portfolio spans diverse projects, from high-rise developments and data centers to complex infrastructure works.
                                </p>
                            </div>
                            <div className="relative h-[300px]">
                                <Image
                                    src="/images/lombard-square.jpg"
                                    alt="Lombard Square Project"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed">
                            Since 2017, Dashi Group has built a reputation for foresight and reliability. We anticipate potential challenges before they arise, proactively developing contingency plans to prevent delays, rework, or budget overruns. Our promise is clear: to empower our clients with innovative solutions, turning bold visions into enduring realities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-dark-grey py-10 px-4 md:px-24 flex items-center">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center"
                    >
                        <Indicators />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}