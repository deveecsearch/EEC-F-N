'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ExpandableText({ text, maxHeight = 150 }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="relative">
            <motion.div
                initial={{ maxHeight: maxHeight }}
                animate={{ maxHeight: expanded ? 2000 : maxHeight }}
                transition={{
                    duration: expanded ? 0.2 : 0, // ขยายใช้ 0.2s, พับทันที
                    ease: "easeInOut"
                }}
                className="overflow-hidden"
            >
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium whitespace-pre-line">
                    {text}
                </p>
            </motion.div>
            {text?.length > 100 && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-blue-600 font-semibold mt-2 hover:underline"
                >
                    {expanded ? "แสดงน้อยลง" : "อ่านเพิ่มเติม"}
                </button>
            )}
        </div>
    );
}

export default function HowWorkSection({ data }) {
    const mainTitle = "หลักการทำงานของ HELAMIN®";
    const mainTitle2 = "HELAMIN® กับการทำความสะอาดออนไลน์";

    const firstImage = data?.howworkimagedata?.galleryItems?.[0]?.image;
    const firstCardText = data?.howworkdata?.bulletsItems?.slice(1).map(item => item?.description?.th).join("\n\n");
    const secondCardText = data?.howworkdata?.bulletsItems?.[0]?.description?.th;

    // Animated line
    const lineVariants = {
        animate: {
            scaleX: [0.7, 1.2, 0.7],
            opacity: [0.5, 1, 0.5],
            transition: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
        },
    };


    // Floating shapes animation with delay support
    const floatingVariants = {
        animate: (customDelay = 0) => ({
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            transition: { duration: 4, ease: "easeInOut", repeat: Infinity, delay: customDelay }
        })
    };

    // Motion for scroll
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay }
        })
    };

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">

            {/* Animated top line */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
                variants={lineVariants}
                initial="animate"
                animate="animate"
            />

            {/* Floating shapes */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 rounded-2xl rotate-12"
                    style={{ background: 'linear-gradient(45deg, #facc1b20, #fbd01e20)' }}
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute top-40 right-16 w-16 h-16 rounded-full"
                    style={{ background: 'linear-gradient(45deg, #facc1b15, #fbcf1d15)' }}
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-32 left-20 w-12 h-12 rounded-lg rotate-45"
                    style={{ background: 'linear-gradient(45deg, #facc1b25, #fac91825)' }}
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-20 right-32 w-24 h-24 rounded-3xl -rotate-12"
                    style={{ background: 'linear-gradient(45deg, #facc1b10, #fbcd1c10)' }}
                    variants={floatingVariants}
                    animate="animate"
                />
            </div>

            <div className="relative z-30 flex flex-col items-center w-full">

                {/* ภาพใหญ่ */}
                <motion.div
                    className="inline-block bg-gradient-to-br from-white/70 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl border-2 border-blue-200/40 rounded-3xl mb-12 overflow-hidden w-[80%] md:w-[900px] shadow-2xl shadow-blue-500/15 transition-all duration-300"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={0}
                >
                    {firstImage ? (
                        <img src={firstImage} alt="Diagram" className="w-full h-auto rounded-2xl" />
                    ) : (
                        <span className="text-gray-500 italic p-8 block text-center">ไม่พบภาพ</span>
                    )}
                </motion.div>

                {/* การ์ดสองใบ */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                    {/* การ์ดแรก */}
                    <motion.div
                        className="flex flex-col bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 
               backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-blue-200/40 
               shadow-2xl shadow-blue-500/15 transition-all duration-500 
               w-full h-fit"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={0.2}
                    >
                        <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r 
                   from-gray-800 via-blue-700 to-indigo-800 bg-clip-text 
                   text-transparent drop-shadow-lg mb-2 text-center">
                            {mainTitle}
                        </h2>
                        <div className="w-40 sm:w-52 md:w-64 lg:w-72 h-1.5 
                    bg-gradient-to-r from-yellow-400 to-orange-500 
                    mx-auto mt-3 mb-5 rounded-full shadow-sm" />
                        <ExpandableText text={firstCardText} maxHeight={120} />
                    </motion.div>
                    <motion.div
                        className="flex flex-col bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40
               backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-blue-200/40
               shadow-2xl shadow-blue-500/15 transition-all duration-500
               w-full h-fit"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={0.4}
                    >
                        <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r 
                   from-gray-800 via-blue-700 to-indigo-800 bg-clip-text 
                   text-transparent drop-shadow-lg mb-2 text-center">
                            {mainTitle2}
                        </h2>
                        <div className="w-40 sm:w-52 md:w-64 lg:w-72 h-1.5 
                    bg-gradient-to-r from-yellow-400 to-orange-500 
                    mx-auto mt-3 mb-5 rounded-full shadow-sm" />
                        <ExpandableText text={secondCardText} maxHeight={120} />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
