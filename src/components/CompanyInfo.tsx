"use client"

import Indicators from "./Indicators"
import TransitionCard from "./TransitionCard"
import { motion } from 'framer-motion';

export default function CompanyInfo() {
    return (
        <>
            <Indicators />

            <div className="flex flex-col lg:flex-row w-full items-center justify-center py-[120px] px-8 md:px-24 gap-32">
                <div className="w-full lg:w-2/5">
                    <TransitionCard />
                </div>

                <div className="flex flex-col gap-11 w-full lg:w-3/5">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                    <div className="flex flex-col">
                        <span className="text-primary-orange block text-5xl lg:text-6xl font-bold">
                            Execute large-scale,
                        </span>
                        <span className="text-white block text-5xl lg:text-6xl font-bold">
                            high-impact projects
                        </span>
                    </div>
                    </motion.div>
                    <p className="text-white">
                        At Dashi Group, we are committed to leveraging our expertise to proactively collaborate with our clients, ensuring the successful delivery of high-profile construction projects.
                        <br /><br />
                        Partnering with us means more than just receiving a service—it&apos;s about working with a dedicated, solutions-driven team that goes above and beyond to guarantee your project&apos;s success. We seamlessly integrate with other contractors, providing the technical expertise and personalized support needed to bring your vision to life, all while upholding the highest standards of safety and quality.
                    </p>
                </div>
            </div>
        </>
    )
}