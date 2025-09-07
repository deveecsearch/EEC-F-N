'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TestSection({ data }) {
    const galleryItems = data?.galleryItems || [];

    const lineVariants = {
        animate: {
            scaleX: [0.7, 1.2, 0.7],
            opacity: [0.5, 1, 0.5],
            transition: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
        },
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            transition: { duration: 4, ease: "easeInOut", repeat: Infinity }
        }
    };

    const mainTitle = "ทดลอง";

    return (
        <section className="relative pt-6 md:pt-8 pb-6 md:pb-8 overflow-hidden bg-gradient-to-br from-indigo-100 via-blue-50 to-slate-50">


            {/* Animated top line */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
                variants={lineVariants}
                initial="animate"
                animate="animate"
            />

            {/* Floating golden shapes */}
            <div className="absolute inset-0 z-0">
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
            </div>

            <div className="flex flex-col items-center w-full">
                {/* Section title */}
                <h2 className="text-4xl md:text-5xl font-extrabold mt-4 pb-10 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg">
                    {mainTitle}
                </h2>


                {/* Grid */}
                <div className="flex flex-wrap justify-center items-center gap-6 max-w-[90%]">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="w-64 h-64 rounded-2xl overflow-hidden border border-white/30 shadow-lg backdrop-blur-md relative hover:scale-105 transition-transform duration-300"
                        >
                            <Image
                                src={item.image}
                                alt={item.title?.th || `Image ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
