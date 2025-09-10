'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TagSection({ data }) {
    const bullets = data?.bulletsItems || [];

    // Animated top line
    const lineVariants = {
        animate: {
            scaleX: [0.7, 1.2, 0.7], // ขยาย/หดตามแนว X
            opacity: [0.5, 1, 0.5],  // โปร่งใสสลับ
            transition: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
        },
    };

    // Floating shapes
    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            transition: { duration: 4, ease: 'easeInOut', repeat: Infinity },
        },
    };

    return (
        <section className="relative pt-12 pb-12 overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-100 rounded-2xl">

            {/* Animated top line */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
                variants={lineVariants}
                initial="animate"
                animate="animate"
            />

            {/* Floating shapes */}
            <motion.div
                className="absolute top-20 left-10 w-28 h-28 rounded-2xl rotate-12"
                style={{ background: 'linear-gradient(45deg, #facc1b20, #fbd01e20)' }}
                variants={floatingVariants}
                animate="animate"
            />
            <motion.div
                className="absolute top-40 right-16 w-24 h-24 rounded-full"
                style={{ background: 'linear-gradient(45deg, #facc1b15, #fbcf1d15)' }}
                variants={floatingVariants}
                animate="animate"
            />
            <motion.div
                className="absolute bottom-32 left-20 w-16 h-16 rounded-lg rotate-45"
                style={{ background: 'linear-gradient(45deg, #facc1b25, #fac91825)' }}
                variants={floatingVariants}
                animate="animate"
            />

            {/* Section title */}
            <div className="flex flex-col items-center relative z-10 px-4 md:px-0">
                {/* Section title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 pb-10 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg leading-snug text-center">
                    F&N Techno Co., Ltd. <br className="block sm:hidden" />
                    พร้อมให้บริการ
                </h2>

                {/* Tag grid */}
                <div className="flex flex-col w-full max-w-[90%] gap-6">
                    {bullets.map((bullet, idx) => {
                        const items = bullet.description.th
                            .split(',')
                            .map(item => item.trim())
                            .filter(item => item);

                        return (
                            <div key={idx}>
                                <div className="flex flex-wrap gap-3">
                                    {items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 rounded-full text-sm shadow-md cursor-default transition-transform duration-300 hover:scale-105"
                                            style={{
                                                color: '#333333', // อ่านง่าย
                                            }}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}