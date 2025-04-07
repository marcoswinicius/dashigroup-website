"use client"

import TransitionCard from "./TransitionCard"
import { motion } from 'framer-motion';
import Values from "./Values";

export default function CompanyInfo() {
    return (
        <>
            <Values />
            <div className="flex flex-col lg:flex-row w-full items-start justify-start py-8 md:py-[80px] px-8 md:px-24 gap-12">
                <div className="w-full flex flex-col justify-start items-start">
                    <TransitionCard />
                </div>

                <div className="flex flex-col gap-4 md:gap-9 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="flex flex-col">
                            <span className="text-white block text-2xl lg:text-5xl font-bold">
                                Welcome to Dashi Group
                            </span>
                            <span className="text-primary-orange block text-[34px] lg:text-6xl font-bold">
                                WHY CHOOSE US ?
                            </span>
                        </div>
                    </motion.div>
                    <h2 className="text-white font-bold text-lg md:text-2xl">Dashi Group is deeply committed to utilising its expertise to work proactively with its Clients to deliver high-profile construction projects successfully.</h2>
                    <p className="text-white">
                        When you collaborate with Dashi Group, you&rsquo;re not just receiving a standalone service &ndash;
                        you&rsquo;re partnering with a dedicated, solutions-driven company committed to going above
                        and beyond to ensure the success of your project.
                        <br /><br />
                        We aim to seamlessly integrate with other contractors, offering the technical understanding
                        and personalised support necessary to bring your visions to life, all while maintaining a
                        safe working environment and adhering to the highest quality standards.
                        <br /><br />
                        Over the years, Dashi Group has earned an outstanding reputation for delivering innovative
                        solutions, consistently prioritising safety, quality, and progress, and honouring our commitments.
                        We are recognised as leaders in providing top-tier services to our clients, specialising in
                        RC detailing (civil engineering and consulting), RC installation, Groundwork and Falsework
                        for residential and commercial projects.
                    </p>
                </div>
            </div>
        </>
    )
}