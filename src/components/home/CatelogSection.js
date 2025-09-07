'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CatelogSection({ hBRW150Hdata }) {
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
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-12 md:py-16">

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

            <div className="relative z-10 max-w-6xl w-full px-6">
                <motion.div
                    className="mt-0 pt-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg mb-12 pb-2 border-b-2 border-blue-300/50 text-center"
                        variants={itemVariants}
                    >
                    แคตตาล็อกผลิตภัณฑ์
                    </motion.h1>
                    <div className="space-y-12">
                        {/* HELAMIN BRW150H */}
                        {hBRW150Hdata?.bulletsItems?.length > 0 && (
                            <motion.div
                                className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl shadow-blue-500/15 border border-blue-200/40 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60 max-w-4xl mx-auto"
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                            >
                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-sm">
                                    {hBRW150Hdata.bulletsItems[0]?.title?.th || "ชื่อสินค้า"}
                                </h3>

                                {/* Images and Details */}
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex justify-center gap-4 md:gap-6 mb-4 md:mb-0">
                                        {hBRW150Hdata.bulletsItems
                                            .filter(item => item?.image)
                                            .map((item, idx) => (
                                                <div key={idx} className="w-36 h-36 md:w-40 md:h-40 overflow-hidden rounded-xl shadow-xl shadow-blue-500/10 flex-shrink-0 transition-transform duration-300 hover:scale-105 border border-blue-200/30">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title?.th || "Image"}
                                                        width={160}
                                                        height={160}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                    </div>

                                    <div className="flex-1 space-y-3 text-center md:text-left text-gray-800">
                                        <p className="text-base md:text-lg font-medium">
                                            {hBRW150Hdata.bulletsItems[0]?.description?.th || "รายละเอียดสินค้า"}
                                        </p>
                                        <div className="pt-3 border-t border-blue-200/50">
                                            <p className="text-sm md:text-base text-gray-700">
                                                ค่า pH : <span className="font-semibold text-blue-700">
                                                    {hBRW150Hdata.bulletsItems[1]?.description?.th?.replace('ค่า pH: ', '') || "-"}
                                                </span>
                                            </p>
                                            <p className="text-sm md:text-base text-gray-700">
                                                ส่วนประกอบ : <span className="font-semibold text-blue-700">
                                                    {hBRW150Hdata.bulletsItems[2]?.description?.th?.replace('ส่วนประกอบ: ', '') || "-"}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
