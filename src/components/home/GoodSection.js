'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Reusable Variants ---
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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12,
        },
    },
};

// Variants สำหรับ floating elements (same as HeroSection)
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

// --- Sub-component for a single content card ---
function ContentCard({ headerItem, items }) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
        >
            <div className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/30 shadow-xl shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Header */}
                {headerItem && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-xl border border-blue-200/30">
                        <p className="text-base sm:text-lg font-medium text-gray-800 drop-shadow-sm">
                            {headerItem?.description?.th}
                        </p>
                    </div>
                )}

                {/* List items */}
                <ul className="flex flex-col gap-3">
                    {items.map((item, index) => (
                        <motion.li
                            key={index}
                            variants={itemVariants}
                            className="flex items-start text-base sm:text-lg text-gray-700 drop-shadow-sm group hover:text-gray-800 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                        >
                            <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0 mt-2 mr-3 shadow-sm group-hover:shadow-md transition-all duration-300"></div>
                            {item?.description?.th}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

// --- Main Component ---
export default function GoodSection({ data }) {
    const mainTitle = "ทำไมควรเลือก HELAMIN®";
    const allBulletItems = Array.isArray(data?.bulletsItems) ? data.bulletsItems : [];

    // Separate items: headers and list items like the original structure
    let currentIndex = 0;

    const leftHeaderItem = allBulletItems[currentIndex];
    const leftItems = allBulletItems.slice(currentIndex + 1, currentIndex + 6);
    currentIndex += 6;

    const rightHeaderItem = allBulletItems[currentIndex];
    const rightItems = allBulletItems.slice(currentIndex + 1, currentIndex + 5);
    currentIndex += 5;

    const leftHeaderItem2 = allBulletItems[currentIndex];
    const leftItems2 = allBulletItems.slice(currentIndex + 1, currentIndex + 7);
    currentIndex += 7;

    const rightHeaderItem2 = allBulletItems[currentIndex];
    const rightItems2 = allBulletItems.slice(currentIndex + 1, currentIndex + 8);
    currentIndex += 8;

    const leftHeaderItem3 = allBulletItems[currentIndex];
    const leftItems3 = allBulletItems.slice(currentIndex + 1, currentIndex + 6);
    currentIndex += 6;

    
    return (
        <section className="relative bg-gradient-to-br from-indigo-100 via-blue-50 to-slate-50 flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">

            {/* Animated top line */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
                variants={lineVariants}
                initial="animate"
                animate="animate"
            />

            {/* Modern background effects with golden yellow floating objects */}
            <div className="absolute inset-0 z-0">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tl from-white/60 via-blue-50/40 to-indigo-100/30" />

                {/* Floating geometric shapes with golden yellow tones (same as HeroSection but mirrored positions) */}
                <motion.div
                    className="absolute top-20 right-10 w-20 h-20 rounded-2xl -rotate-12"
                    style={{ background: 'linear-gradient(45deg, #facc1b20, #fbd01e20)' }}
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute top-40 left-16 w-16 h-16 rounded-full"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '1s', background: 'linear-gradient(45deg, #facc1b15, #fbcf1d15)' }}
                />
                <motion.div
                    className="absolute bottom-32 right-20 w-12 h-12 rounded-lg -rotate-45"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '2s', background: 'linear-gradient(45deg, #facc1b25, #fac91825)' }}
                />
                <motion.div
                    className="absolute bottom-20 left-32 w-24 h-24 rounded-3xl rotate-12"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '0.5s', background: 'linear-gradient(45deg, #facc1b10, #fbcd1c10)' }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/4 w-14 h-14 rounded-xl -rotate-30"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '1.5s', background: 'linear-gradient(45deg, #facc1b20, #faca1920)' }}
                />
                <motion.div
                    className="absolute top-1/3 left-1/4 w-18 h-18 rounded-2xl rotate-45"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '3s', background: 'linear-gradient(45deg, #facc1b15, #face1a15)' }}
                />
                <motion.div
                    className="absolute top-3/4 right-1/3 w-16 h-16 rounded-full -rotate-60"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '2.5s', background: 'linear-gradient(45deg, #facc1b12, #fbce1c12)' }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/3 w-10 h-10 rounded-lg rotate-30"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '0.8s', background: 'linear-gradient(45deg, #facc1b20, #faca1a20)' }}
                />
            </div>

            <motion.div
                className="relative z-10 w-full px-4 md:px-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Section title */}
                <motion.div
                    className="text-center mb-12"
                    variants={itemVariants}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold pb-3 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg">
                        {mainTitle}
                    </h2>
                </motion.div>

                {/* Main content grid for two columns */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl"
                    variants={containerVariants}
                >
                    <ContentCard headerItem={leftHeaderItem} items={leftItems} />
                    <ContentCard headerItem={rightHeaderItem} items={rightItems} />
                    <ContentCard headerItem={leftHeaderItem2} items={leftItems2} />
                    <ContentCard headerItem={rightHeaderItem2} items={rightItems2} />
                    <ContentCard headerItem={leftHeaderItem3} items={leftItems3} />
                </motion.div>
            </motion.div>
        </section>
    );
}