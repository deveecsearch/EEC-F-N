'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ data }) {
    const herodata1 = data?.herodata1;
    const herodata2 = data?.herodata2;

    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <section className="relative bg-[#00b4f4] flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">

            {/* Gradient Overlay for modern look */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0081ca]/95 via-[#0081ca]/70 to-white/20 z-10"></div>
            <motion.div
                className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Combined Headline */}
                <motion.h1
                    className="flex flex-col items-center leading-tight text-white drop-shadow-lg"
                    variants={itemVariants}
                >
                    <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                        {herodata1?.bulletsItems[0]?.title?.th}
                    </span>
                    <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
                        {herodata1?.bulletsItems[0]?.description?.th}
                    </span>
                </motion.h1>

                {/* Feature Details */}
                <motion.div className="flex flex-col gap-2 mt-4" variants={containerVariants}>
                    <motion.p className="text-base sm:text-lg text-white/90 drop-shadow" variants={itemVariants}>
                        {herodata1?.bulletsItems[1]?.description?.th}
                    </motion.p>
                    <motion.p className="text-base sm:text-lg text-white/90 drop-shadow" variants={itemVariants}>
                        {herodata1?.bulletsItems[2]?.description?.th}
                    </motion.p>
                </motion.div>

                {/* Highlight Points as a responsive grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6"
                    variants={containerVariants}
                >
                    {herodata2?.bulletsItems?.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`
                                bg-white/30 p-6 rounded-2xl flex flex-col items-center justify-center text-center
                                transition duration-300 transform hover:scale-105 hover:bg-white/50 hover:shadow-2xl
                            `}
                            variants={itemVariants}
                        >
                            <span className="text-3xl mb-2 text-white font-bold">{item.title?.th}</span>
                            <span className="text-sm sm:text-base text-white/90">{item.description?.th}</span>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className="bg-white/20 p-4 rounded-xl border border-white/50 backdrop-blur-sm shadow-lg mx-auto w-fit
                               transition duration-300 transform hover:scale-105 hover:bg-white/30 hover:shadow-2xl"
                    variants={itemVariants}
                >
                    <p className="text-base sm:text-lg text-white/90 drop-shadow">
                        {herodata1?.bulletsItems[3]?.description?.th}
                    </p>
                </motion.div>
                <motion.p className="text-base sm:text-lg text-white/90 drop-shadow" variants={itemVariants}>
                    {herodata1?.bulletsItems[4]?.description?.th}
                </motion.p >
                {/* Grid for 8 Bullet Points */}
                <div className="flex justify-center">
                    <motion.div
                        className="grid grid-cols-2 gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-4 text-left mx-auto"
                        variants={containerVariants}
                    >
                        {herodata1?.bulletsItems?.slice(5, 13).map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-2 text-left"
                                variants={itemVariants}
                            >
                                <span className="w-2.5 h-2.5 bg-white rounded-full flex-shrink-0"></span>
                                <span className="text-sm sm:text-base text-white/90">{item.description?.th}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}