'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Variants ---
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

// --- Sub-component for a single column ---
function GoodSectionColumn({ boxItem, listItems }) {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-4">
            {/* Animated paragraph box */}
            {boxItem && (
                <motion.div
                    className="bg-white/20 p-4 rounded-xl border border-white/50 backdrop-blur-sm shadow-lg w-fit transition duration-300 transform hover:scale-105 hover:bg-white/30 hover:shadow-2xl"
                    variants={itemVariants}
                >
                    <p className="text-base sm:text-lg text-white/90 drop-shadow">
                        {boxItem.description?.th}
                    </p>
                </motion.div>
            )}

            {/* Feature Details List */}
            <div className="flex flex-col gap-2">
                {listItems.map((item, index) => (
                    <motion.p
                        key={`list-item-${index}`}
                        className="text-base sm:text-lg text-white/90 drop-shadow pl-4"
                        variants={itemVariants}
                    >
                        {item?.description?.th}
                    </motion.p>
                ))}
            </div>
        </motion.div>
    );
}

// --- Main Component ---
export default function GoodSection({ data }) {
    const mainTitle = "ทำไมต้องเลือก HELAMIN®";

    // Check if data.bulletsItems exists before slicing to prevent errors
    const allBulletItems = Array.isArray(data?.bulletsItems) ? data.bulletsItems : [];

    // Separate items for left box, left list, and right list for clarity
    const leftBoxData = allBulletItems[0];
    const leftListItems = allBulletItems.slice(1, 6);
    const rightBoxData = allBulletItems[6];
    const rightListItems = allBulletItems.slice(7, 11);

    return (
        <section className="relative bg-[#0085cd] flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
            {/* Animated line at the top */}
            <motion.div
                className="absolute top-0 w-[95%] h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent z-20 shadow-md"
                variants={lineVariants}
                initial="animate"
                animate="animate"
            ></motion.div>

            {/* Gradient background overlay - CHANGED TO SOLID COLOR HERE */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#33c2f6] to-[#33c2f6] z-0"></div>

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
           <div className="relative z-10 w-full">
    {/* Section title - ตรงกลาง */}
    <div className="max-w-4xl mx-auto flex justify-center text-white space-y-4 mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold pb-3 drop-shadow-md">
            {mainTitle}
        </h2>
    </div>

    {/* Main content area for two columns - ขยับไปขวา 80% */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%] ml-auto">
        <GoodSectionColumn boxItem={leftBoxData} listItems={leftListItems} />
        <GoodSectionColumn boxItem={rightBoxData} listItems={rightListItems} />
    </div>
</div>





        </section>
    );
}