'use client';

import React from 'react';
import { motion } from 'framer-motion';


export default function GoodSection({ data }) {
    // Variants for the moving line
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

    // Variants for animating items (e.g., the paragraph box)
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <section className="relative bg-[#0085cd] flex flex-col items-center justify-center overflow-hidden pt-0 pb-0">

            {/* Moving line at the top */}
            <motion.div
                className="absolute top-0 mx-auto w-96 h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent z-20 shadow-md"
                variants={lineVariants}
                initial={{ scaleX: 0.7, opacity: 0.5 }}
                animate="animate"
            ></motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#33c2f6] to-[#0085cd] z-0"></div>

            <div className="relative z-10 max-w-6xl w-full px-6 py-24 md:py-32">
                <div className="max-w-4xl mx-auto text-left text-white space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 pb-3">ทำไมต้องเลือก HELAMIN®</h2>
                </div>
            </div>

            {/* Animated paragraph box */}
            <motion.div
                className="bg-white/20 p-4 rounded-xl border border-white/50 backdrop-blur-sm shadow-lg mx-auto w-fit
                               transition duration-300 transform hover:scale-105 hover:bg-white/30 hover:shadow-2xl"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                <p className="text-base sm:text-lg text-white/90 drop-shadow">
                    {data?.bulletsItems[0]?.description?.th}
                </p>
            </motion.div>
        </section>
    );
}