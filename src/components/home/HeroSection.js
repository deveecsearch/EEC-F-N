'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ data }) {
    const herodata1 = data?.herodata1;
    const herodata2 = data?.herodata2;
    const herodata3 = data?.herodata3; // This data source is not used in this specific implementation.

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

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">

            {/* Modern background effects */}
            <div className="absolute inset-0 z-0">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-blue-50/40 to-indigo-100/30" />
 
                {/* Floating geometric shapes with golden yellow tones */}
                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 rounded-2xl rotate-12"
                    style={{ background: 'linear-gradient(45deg, #facc1b20, #fbd01e20)' }}
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute top-40 right-16 w-16 h-16 rounded-full"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '1s', background: 'linear-gradient(45deg, #facc1b15, #fbcf1d15)' }}
                />
                <motion.div
                    className="absolute bottom-32 left-20 w-12 h-12 rounded-lg rotate-45"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '2s', background: 'linear-gradient(45deg, #facc1b25, #fac91825)' }}
                />
                <motion.div
                    className="absolute bottom-20 right-32 w-24 h-24 rounded-3xl -rotate-12"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '0.5s', background: 'linear-gradient(45deg, #facc1b10, #fbcd1c10)' }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/4 w-14 h-14 rounded-xl rotate-30"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '1.5s', background: 'linear-gradient(45deg, #facc1b20, #faca1920)' }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-18 h-18 rounded-2xl -rotate-45"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '3s', background: 'linear-gradient(45deg, #facc1b15, #face1a15)' }}
                />
            </div>

            <motion.div
                className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Combined Headline */}
                <motion.h1
                    className="flex flex-col items-center leading-tight bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg"
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
                    <motion.p className="text-base sm:text-lg text-gray-700 font-medium drop-shadow-sm" variants={itemVariants}>
                        {herodata1?.bulletsItems[1]?.description?.th}
                    </motion.p>
                    <motion.p className="text-base sm:text-lg text-gray-700 font-medium drop-shadow-sm" variants={itemVariants}>
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
                                bg-gradient-to-br from-white/70 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl p-6 rounded-2xl border border-white/30 shadow-xl shadow-blue-500/10 
                                flex flex-col items-center justify-center text-center
                                transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-200/50
                            `}
                            variants={itemVariants}
                            whileHover={{
                                y: -5,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            <span className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">{item.title?.th}</span>
                            <span className="text-sm sm:text-base text-gray-700 font-medium">{item.description?.th}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-6 rounded-2xl border-2 border-blue-200/40 shadow-2xl shadow-blue-500/15 mx-auto w-fit
                               transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60 relative overflow-hidden group"
                    variants={itemVariants}
                    whileHover={{
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                    }}
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-3 right-3 w-8 h-8 border border-blue-300 rounded-full"></div>
                        <div className="absolute bottom-3 left-3 w-6 h-6 border border-indigo-300 rounded-lg rotate-45"></div>
                    </div>

                    <p className="text-base sm:text-lg text-gray-800 font-medium drop-shadow-sm relative z-10">
                        {herodata1?.bulletsItems[3]?.description?.th}
                    </p>
                </motion.div>

                <motion.p className="text-base sm:text-lg text-gray-700 font-medium drop-shadow-sm" variants={itemVariants}>
                    {herodata1?.bulletsItems[4]?.description?.th}
                </motion.p>

                {/* Grid for 8 Bullet Points */}
                <div className="flex justify-center">
                    <motion.div
                        className="bg-gradient-to-br from-white/60 via-blue-50/40 to-indigo-50/20 backdrop-blur-lg p-8 rounded-2xl border border-white/40 shadow-xl shadow-blue-500/10"
                        variants={containerVariants}
                    >
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:gap-x-8 md:gap-y-6 text-left">
                            {herodata1?.bulletsItems?.slice(5, 13).map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="group flex items-center space-x-3 text-left p-2 rounded-lg hover:bg-blue-50/50 transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300"></div>
                                    <span className="text-sm sm:text-base text-gray-700 font-medium group-hover:text-gray-800 transition-colors duration-300">{item.description?.th}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                {/* Container สำหรับทุกการ์ด */}
                <div className="flex flex-wrap justify-center mt-6 gap-6">
                    {/* Card 14 */}
                    {herodata1?.bulletsItems[14] && (
                        <motion.div
                            className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/40 shadow-2xl shadow-blue-500/15 text-center
                 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60 w-full sm:w-1/2 max-w-md"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                                {herodata1?.bulletsItems[14]?.description?.th}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700">
                                {herodata1?.bulletsItems[15]?.description?.th}
                            </p>
                            <p className="text-sm sm:text-base text-gray-700">
                                {herodata1?.bulletsItems[16]?.description?.th}
                            </p>
                        </motion.div>
                    )}

                    {/* Card 17 */}
                    {herodata1?.bulletsItems[17] && (
                        <motion.div
                            className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/40 shadow-2xl shadow-blue-500/15 text-center
                 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60 w-full sm:w-1/2 max-w-md"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                                {herodata1?.bulletsItems[17]?.description?.th}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700">
                                {herodata1?.bulletsItems[18]?.description?.th}
                            </p>
                            <p className="text-sm sm:text-base text-gray-700">
                                {herodata1?.bulletsItems[19]?.description?.th}
                            </p>
                            <p className="text-sm sm:text-base text-gray-700">
                                {herodata1?.bulletsItems[20]?.description?.th}
                            </p>
                        </motion.div>
                    )}

                    {/* Card 21 */}
                    {herodata1?.bulletsItems[21] && (
                        <motion.div
                            className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/40 shadow-2xl shadow-blue-500/15 text-center
                 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60 w-full sm:w-1/2 max-w-md"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                                {herodata1?.bulletsItems[21]?.description?.th}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700">
                                {herodata1?.bulletsItems[22]?.description?.th}
                            </p>
                        </motion.div>
                    )}

                    {/* Card 23 */}
                    {herodata1?.bulletsItems[23] && (
                        <motion.div
                            className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/40 shadow-2xl shadow-blue-500/15 text-center
                 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60 w-full sm:w-1/2 max-w-md"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                                {herodata1?.bulletsItems[23]?.description?.th}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700">
                                {herodata1?.bulletsItems[24]?.description?.th}
                            </p>
                        </motion.div>
                    )}

                    {/* Card 25 */}
                    {herodata1?.bulletsItems[25] && (
                        <motion.div
                            className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/40 shadow-2xl shadow-blue-500/15 text-center
                 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60 w-full sm:w-1/2 max-w-md"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                                {herodata1?.bulletsItems[25]?.description?.th}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700">
                                {herodata1?.bulletsItems[26]?.description?.th}
                            </p>
                        </motion.div>
                    )}

                    {/* Card 27 */}
                    {herodata1?.bulletsItems[27] && (
                        <motion.div
                            className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/40 shadow-2xl shadow-blue-500/15 text-center
                 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60 w-full sm:w-1/2 max-w-md"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                                {herodata1?.bulletsItems[27]?.description?.th}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700">
                                {herodata1?.bulletsItems[28]?.description?.th}
                            </p>
                        </motion.div>
                    )}

                    {/* Card 29 */}
                    {herodata1?.bulletsItems[29] && (
                        <motion.div
                            className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/40 shadow-2xl shadow-blue-500/15 text-center
                 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60 w-full sm:w-1/2 max-w-md"
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
                                {herodata1?.bulletsItems[29]?.description?.th}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-700">
                                {herodata1?.bulletsItems[30]?.description?.th}
                            </p>
                        </motion.div>
                    )}
                </div>

            </motion.div>
        </section>
    );
}