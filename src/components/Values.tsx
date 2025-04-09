import { motion } from "framer-motion";
import { Crown, Lightbulb, Shield, TrendingUp, ThumbsUp, Leaf } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Values() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <>
            <div 
                ref={ref}
                className="w-full flex flex-col px-4 md:px-28 mt-16 justify-center items-center md:justify-start gap-6"
            >
                <motion.h2 
                    className="text-dark-grey/80 block text-5xl lg:text-6xl font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                >
                    About Our Values
                </motion.h2>
                <div className="flex gap-2 md:gap-12 text-lg">
                    <motion.ul 
                        className="text-white"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <motion.li 
                            className="min-h-20 flex items-center gap-2 mb-4 p-3 bg-primary-orange rounded-lg  transition-all cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Crown className="h-5 w-5 text-white" />
                            <span>Strong Leadership</span>
                        </motion.li>
                        <motion.li 
                            className="min-h-20 flex items-center gap-2 mb-4 p-3 bg-primary-orange rounded-lg  transition-all cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Lightbulb className="h-5 w-5 text-white" />
                            <span>Quality and Innovation</span>
                        </motion.li>
                        <motion.li 
                            className="min-h-20 flex items-center gap-2 mb-4 p-3 bg-primary-orange rounded-lg border  transition-all cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Shield className="h-5 w-5 text-white" />
                            <span>Safety Vision Statement</span>
                        </motion.li>
                    </motion.ul>
                    <motion.ul 
                        className="text-white"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <motion.li 
                            className="min-h-20 flex items-center gap-2 mb-4 p-3 bg-primary-orange rounded-lg  transition-all cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <TrendingUp className="h-5 w-5 text-white" />
                            <span>Continuous Improvement</span>
                        </motion.li>
                        <motion.li 
                            className="min-h-20 flex items-center gap-2 mb-4 p-3 bg-primary-orange rounded-lg  transition-all cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ThumbsUp className="h-5 w-5 text-white" />
                            <span>Positive Attitude</span>
                        </motion.li>
                        <motion.li 
                            className="min-h-20 flex items-center gap-2 mb-4 p-3 bg-primary-orange rounded-lg  transition-all cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Leaf className="h-5 w-5 text-white" />
                            <span>Environment Friendly</span>
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </>
    )
}
