"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Values from '@/components/Values';

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
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-grey/60 via-white/10 to-transparent" />
                    <div className="absolute inset-0 bg-dark-grey/30" />
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
                            <span className="text-primary-white block">Everything We Do</span>
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
                        <p className="text-lg leading-relaxed text-dark-grey">
                            Dashi Group is a London based construction company founded by Dashnor Loka in 2017. Our Managing Director, Dashnor Loka, initially founded the company intending to establish Dashi Group as the market leader for steel fixing and RC detailing in London. Dashnor has obtained his knowledge of all reinforced concrete construction elements from over 23 years in the industry and working on prestigious projects in London.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="relative h-[300px] group overflow-hidden rounded-lg">
                                <Image
                                    src="/images/about-us.jpg"
                                    alt="Group of Engineers"
                                    fill
                                    className="object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-lg leading-relaxed text-dark-grey">
                                    Since its inception, Dashi Group has gone from strength to strength and now also offers reinforcement detailing services and delivers all packages of RC frameworks including formwork and concrete.
                                </p>
                                <div className="mt-4 p-4 bg-primary/10 rounded-lg border-l-4 border-primary-orange">
                                    <h3 className="text-xl font-semibold mb-2 text-dark-grey">Our Evolution</h3>
                                    <p className="italic text-dark-grey">From steel fixing specialists to comprehensive RC framework providers</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed text-dark-grey">
                            The company is a well-established business that gained invaluable insights into the entire engineering workflow – from conceptual design to final construction. This holistic understanding allows the Business to provide its clients with strategic, cost-effective solutions that streamline processes and save time. By leveraging the team&apos;s experience working across diverse project types and environments, by being able to anticipate potential challenges and proactively develop contingency plans.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="flex flex-col justify-center">
                                <p className="text-lg leading-relaxed text-dark-grey">
                                    He has had the privilege of collaborating with some of the industry&apos;s top Tier 1 contractors, Tier 2 contractors, and structural designers. Dashnor has successfully delivered works on a wide variety of structures, including high-rise developments, data centers and complex infrastructure projects. Dashi Group utilises its extensive experience in reinforced concrete structures to analyse designs, optimise reinforcement plans, and deliver detailed and practical rebar drawings.
                                </p>
                            </div>
                            <div className="relative h-[300px] group overflow-hidden rounded-lg">
                                <Image
                                    src="/images/lombard-square.jpg"
                                    alt="Lombard Square Project"
                                    fill
                                    className="object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed text-dark-grey">
                            Since 2017 the Dashi Group has been known for aiding its Clients by anticipating and resolving potential issues before they cause delays, rework, or budget overruns on construction projects.
                        </p>
                        
                        {/* Timeline Section */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold mb-8 text-dark-grey">Our Journey</h2>
                            <div className="relative border-l-2 border-primary-orange pl-7 space-y-12">
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-primary-orange"></div>
                                    <h3 className="text-xl font-semibold text-dark-grey">2017</h3>
                                    <p className="mt-2 text-dark-grey">Foundation of Dashi Group by Dashnor Loka, focusing on steel fixing and RC detailing</p>
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-primary-orange"></div>
                                    <h3 className="text-xl font-semibold text-dark-grey ">2019</h3>
                                    <p className="mt-2 text-dark-grey">Expansion into reinforcement detailing services</p>
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-primary-orange"></div>
                                    <h3 className="text-xl font-semibold text-dark-grey">2021</h3>
                                    <p className="mt-2 text-dark-grey">Began offering complete RC frameworks including formwork and concrete</p>
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-primary-orange"></div>
                                    <h3 className="text-xl font-semibold text-dark-grey">Today</h3>
                                    <p className="mt-2 text-dark-grey">Established as a market leader in London&apos;s construction industry</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-10 px-4 md:px-24 flex items-center">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center"
                    >
                        <Values />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
