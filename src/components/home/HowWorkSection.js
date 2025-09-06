'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HowWorkSection({ data }) {
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

    // Variants for floating elements
    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
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
    const mainTitle = "HELAMIN® ทำงานอย่างไร: หลักการ";

    // Check if data.bulletsItems exists before slicing to prevent errors
    const allBulletItems = data?.bulletsItems || [];

    // Assuming first item is the left box, and subsequent items are for lists
    // We'll separate items for left box, left list, and right list for clarity
    const leftBoxData = allBulletItems[0]; // First item for the left animated box
    const leftListItems = allBulletItems.slice(1, 6); // Items 1 to 5 for the left list
    const rightBoxData = allBulletItems[6]; // Item 6 for the right animated box
    const rightListItems = allBulletItems.slice(7, 11); // Items 7 to 10 for the right list

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">
            {/* Animated top line */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
                variants={lineVariants}
                initial="animate"
                animate="animate"
            />
            {/* Modern background effects */}
            <div className="absolute inset-0 z-0">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-blue-50/40 to-indigo-100/30" />

                {/* Floating geometric shapes */}
                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl rotate-12"
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute top-40 right-16 w-16 h-16 bg-gradient-to-r from-indigo-400/15 to-purple-400/15 rounded-full"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '1s' }}
                />
                <motion.div
                    className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-r from-cyan-400/25 to-blue-500/25 rounded-lg rotate-45"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '2s' }}
                />
                <motion.div
                    className="absolute bottom-20 right-32 w-24 h-24 bg-gradient-to-r from-blue-300/10 to-indigo-300/10 rounded-3xl -rotate-12"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '0.5s' }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/4 w-14 h-14 bg-gradient-to-r from-violet-400/20 to-indigo-400/20 rounded-xl rotate-30"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '1.5s' }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-18 h-18 bg-gradient-to-r from-cyan-300/15 to-blue-400/15 rounded-2xl -rotate-45"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '3s' }}
                />
            </div>

            <motion.div
                className="relative z-30 max-w-6xl w-full px-6 py-24 md:py-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Section title with enhanced styling */}
                <motion.div
                    className="max-w-4xl mx-auto flex justify-center text-center space-y-4 mb-12 md:mb-16"
                    variants={itemVariants}
                >
                    <div className="relative">
                        <h2 className="text-3xl md:text-5xl font-extrabold pb-3 drop-shadow-lg bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                            {mainTitle}
                        </h2>
                        {/* Enhanced decorative underline */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-600/80 to-transparent rounded-full"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent rounded-full"></div>
                    </div>
                </motion.div>

                {/* Main content area for two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {/* Left Column Content */}
                    <motion.div variants={containerVariants} className="flex flex-col gap-6">
                        {/* Enhanced animated paragraph box (Left) */}
                        {leftBoxData && (
                            <motion.div
                                className="bg-gradient-to-br from-white/70 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl p-6 rounded-2xl border border-white/30 shadow-xl shadow-blue-500/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-200/50 relative overflow-hidden group"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                            >
                                {/* Subtle background pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute top-3 right-3 w-8 h-8 border border-blue-300 rounded-full"></div>
                                    <div className="absolute bottom-3 left-3 w-6 h-6 border border-indigo-300 rounded-lg rotate-45"></div>
                                </div>
                                <p className="text-base sm:text-lg text-gray-800 font-medium drop-shadow-sm relative z-10 leading-relaxed">
                                    {leftBoxData.description?.th}
                                </p>
                            </motion.div>
                        )}

                        {/* Enhanced Feature Details (Left List) */}
                        <div className="bg-gradient-to-br from-white/60 via-blue-50/40 to-indigo-50/20 backdrop-blur-lg p-8 rounded-2xl border border-white/40 shadow-xl shadow-blue-500/10">
                            <div className="flex flex-col gap-4">
                                {leftListItems.map((item, index) => (
                                    <motion.div
                                        key={`left-${index}`}
                                        className="flex items-start space-x-3 group hover:bg-blue-50/50 p-2 rounded-lg transition-all duration-300"
                                        variants={itemVariants}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-3 h-3 rounded-full flex-shrink-0 mt-2 shadow-sm group-hover:shadow-md transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                                        <p className="text-base sm:text-lg text-gray-700 font-medium drop-shadow-sm group-hover:text-gray-800 transition-colors duration-300">
                                            {item?.description?.th}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column Content */}
                    <motion.div variants={containerVariants} className="flex flex-col gap-6">
                        {/* Enhanced animated paragraph box (Right) */}
                        {rightBoxData && (
                            <motion.div
                                className="bg-gradient-to-br from-white/70 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl p-6 rounded-2xl border border-white/30 shadow-xl shadow-blue-500/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-200/50 relative overflow-hidden group"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                            >
                                {/* Subtle background pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute top-3 left-3 w-8 h-8 border border-blue-300 rounded-full"></div>
                                    <div className="absolute bottom-3 right-3 w-6 h-6 border border-indigo-300 rounded-lg -rotate-45"></div>
                                </div>
                                <p className="text-base sm:text-lg text-gray-800 font-medium drop-shadow-sm relative z-10 leading-relaxed">
                                    {rightBoxData.description?.th}
                                </p>
                            </motion.div>
                        )}

                        {/* Enhanced Feature Details (Right List) */}
                        <div className="bg-gradient-to-br from-white/60 via-blue-50/40 to-indigo-50/20 backdrop-blur-lg p-8 rounded-2xl border border-white/40 shadow-xl shadow-blue-500/10">
                            <div className="flex flex-col gap-4">
                                {rightListItems.map((item, index) => (
                                    <motion.div
                                        key={`right-${index}`}
                                        className="flex items-start space-x-3 group hover:bg-blue-50/50 p-2 rounded-lg transition-all duration-300"
                                        variants={itemVariants}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-3 h-3 rounded-full flex-shrink-0 mt-2 shadow-sm group-hover:shadow-md transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                                        <p className="text-base sm:text-lg text-gray-700 font-medium drop-shadow-sm group-hover:text-gray-800 transition-colors duration-300">
                                            {item?.description?.th}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}