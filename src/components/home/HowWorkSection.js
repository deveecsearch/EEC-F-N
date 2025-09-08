'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ExpandableText({ text, maxHeight = 150 }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="relative">
            <motion.div
                initial={{ maxHeight: maxHeight }}
                animate={{ maxHeight: expanded ? 1000 : maxHeight }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
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

    // Updated lineVariants แบบไฟล์ AfterSection
    const lineVariants = {
        animate: {
            scaleX: [0.7, 1.2, 0.7],
            opacity: [0.5, 1, 0.5],
            transition: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
        },
    };
    
    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">

            {/* Animated top line แบบ AfterSection */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
                variants={lineVariants}
                initial="animate"
                animate="animate"
            />

            <div className="relative z-30 flex flex-col items-center w-full">

                {/* ภาพใหญ่ */}
                <div className="inline-block bg-gradient-to-br from-white/70 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl border-2 border-blue-200/40 rounded-3xl mb-12 overflow-hidden w-[80%] md:w-[900px] shadow-2xl shadow-blue-500/15 transition-all duration-300 ">
                    {firstImage ? (
                        <img src={firstImage} alt="Diagram" className="w-full h-auto rounded-2xl" />
                    ) : (
                        <span className="text-gray-500 italic p-8 block text-center">ไม่พบภาพ</span>
                    )}
                </div>

                {/* การ์ดสองใบ */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                    {/* การ์ดแรก */}
                    <div className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-8 rounded-2xl border border-blue-200/40 shadow-2xl shadow-blue-500/15 transition-all duration-500 ">
                        <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg mb-2 text-center">
                            {mainTitle}
                        </h2>
                        <div className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4 mb-6 rounded-full shadow-sm" />
                        <ExpandableText text={firstCardText} maxHeight={120} />
                    </div>

                    {/* การ์ดสอง */}
                    <div className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-8 rounded-2xl border border-blue-200/40 shadow-2xl shadow-blue-500/15 transition-all duration-500 ">
                        <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg mb-2 text-center">
                            {mainTitle2}
                        </h2>
                        <div className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4 mb-6 rounded-full shadow-sm" />
                        <ExpandableText text={secondCardText} maxHeight={120} />
                    </div>
                </div>
            </div>
        </section>
    );
}