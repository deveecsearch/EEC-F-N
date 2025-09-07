'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HowWorkSection({ data }) {
    const mainTitle = "หลักการทำงานของ HELAMIN®";
    const mainTitle2 = "HELAMIN® กับการทำความสะอาดออนไลน์";

    // ✅ ดึง URL ภาพจาก galleryItems
    const imageUrl = data?.data?.galleryItems?.[0]?.image || null;


    // เนื้อหาสำหรับการ์ด (สมมติยังใช้ bulletsItems เดิม)
   
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

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">

            {/* Animated top line */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
                variants={lineVariants}
                initial="animate"
                animate="animate"
            />

            {/* กรอบภาพใหญ่ */}
            <div className="w-full max-w-6xl h-72 md:h-96 bg-blue-200/30 border-2 border-blue-300 rounded-3xl mb-12 flex items-center justify-center relative overflow-hidden">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt="Diagram illustrating the working principle of HELAMIN®"
                        fill
                        className="object-contain"
                        unoptimized
                    />
                ) : (
                    <span className="text-gray-500 italic">ไม่พบภาพ</span>
                )}
            </div>


            {/* การ์ดสองใบ */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6">

                {/* การ์ดแรก */}
                <motion.div
                    className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-white/30 shadow-xl"
                    whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg mb-4 text-center">
                        {mainTitle}
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                        
                    </p>
                </motion.div>

                {/* การ์ดสอง */}
                <motion.div
                    className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-white/30 shadow-xl"
                    whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg mb-4 text-center">
                        {mainTitle2}
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                        
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
