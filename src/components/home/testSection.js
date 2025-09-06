'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TestSection({ data }) {
    // Variants for the animated line
    const lineVariants = {
        animate: {
            scaleX: [0.7, 1.2, 0.7],
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    };

    // Variants for animating each item (like a bullet point or a paragraph box)
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            }
        }
    };
    
    // Variants for the container to orchestrate staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    // Variants for the sparkling background lines
    const sparkleVariants = {
        animate: {
            rotate: 360,
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
            transition: {
                duration: 10,
                ease: "linear",
                repeat: Infinity,
            }
        }
    };
    
    // Extracting data for the title and all bullet points
    const mainTitle = "ทดลอง";
    
    // Check if data.bulletsItems exists before slicing to prevent errors
    const allBulletItems = data?.bulletsItems || [];

    // Assuming first item is the left box, and subsequent items are for lists
    // We'll separate items for left box, left list, and right list for clarity
    const leftBoxData = allBulletItems[0]; // First item for the left animated box
    const leftListItems = allBulletItems.slice(1, 6); // Items 1 to 5 for the left list
    const rightBoxData = allBulletItems[6]; // Item 6 for the right animated box
    const rightListItems = allBulletItems.slice(7, 11); // Items 7 to 10 for the right list

    return (
        <section className="relative bg-[#0085cd] flex flex-col items-center justify-center overflow-hidden pt-0 pb-0">
            {/* Animated line at the top */}
            <motion.div
                className="absolute top-0 mx-auto w-190 h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent z-20 shadow-md"
                variants={lineVariants}
                initial={{ scaleX: 0.7, opacity: 0.5 }}
                animate="animate"
            ></motion.div>

            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#33c2f6] to-[#0085cd] z-0"></div>
            
            {/* Animated sparkle lines in the background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#33c2f6] to-transparent w-full h-full opacity-20"
                variants={sparkleVariants}
                initial="animate"
                animate="animate"
            ></motion.div>
            <motion.div
                className="absolute inset-0 bg-gradient-to-tl from-[#0085cd] to-transparent w-full h-full opacity-20"
                variants={sparkleVariants}
                initial="animate"
                animate="animate"
            ></motion.div>

            <div className="relative z-10 max-w-6xl w-full px-6 py-24 md:py-32">
                {/* Section title */}
                <div className="max-w-4xl mx-auto flex justify-center text-white space-y-4 mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 pb-3 drop-shadow-md">{mainTitle}</h2>
                </div>
                
                {/* Main content area for two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column Content */}
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-4">
                        {/* Animated paragraph box (Left) */}
                        {leftBoxData && (
                            <motion.div
                                className="bg-white/20 p-4 rounded-xl border border-white/50 backdrop-blur-sm shadow-lg w-fit transition duration-300 transform hover:scale-105 hover:bg-white/30 hover:shadow-2xl"
                                variants={itemVariants}
                            >
                                <p className="text-base sm:text-lg text-white/90 drop-shadow">
                                    {leftBoxData.description?.th}
                                </p>
                            </motion.div>
                        )}
                        
                        {/* Feature Details (Left List) */}
                        <div className="flex flex-col gap-2">
                            {leftListItems.map((item, index) => (
                                <motion.p key={`left-${index}`} className="text-base sm:text-lg text-white/90 drop-shadow pl-4" variants={itemVariants}>
                                    {item?.description?.th}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column Content */}
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-4">
                        {/* Animated paragraph box (Right) */}
                        {rightBoxData && (
                            <motion.div
                                className="bg-white/20 p-4 rounded-xl border border-white/50 backdrop-blur-sm shadow-lg w-fit mr-auto transition duration-300 transform hover:scale-105 hover:bg-white/30 hover:shadow-2xl"
                                variants={itemVariants}
                            >
                                <p className="text-base sm:text-lg text-white/90 drop-shadow">
                                    {rightBoxData.description?.th}
                                </p>
                            </motion.div>
                        )}
                        
                        {/* Feature Details (Right List) */}
                        <div className="flex flex-col gap-2">
                            {rightListItems.map((item, index) => (
                                <motion.p key={`right-${index}`} className="text-base sm:text-lg text-white/90 drop-shadow pl-4" variants={itemVariants}>
                                    {item?.description?.th}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}