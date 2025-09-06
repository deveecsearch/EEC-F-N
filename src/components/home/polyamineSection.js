'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PolyamineSection({ data }) {
    // กำหนดค่าเริ่มต้นให้กับ data เพื่อป้องกัน error
    const polyaminedata = data || {};

    // Variants สำหรับการ animate หัวข้อ
    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    // Variants สำหรับการ animate ภาพ
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                delay: 0.3
            }
        }
    };

    // Variants สำหรับการ animate เนื้อหา
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                delay: 0.5
            }
        }
    };

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-[#00b4f4]">

            {/* พื้นหลัง Gradient Overlay ที่มีการสลับการไล่สี */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#0081ca]/70 to-[#0081ca]/95 z-10"></div>

            {/* Container หลักสำหรับเนื้อหาทั้งหมด */}
            <div className="container mx-auto px-4 text-center relative z-20">
                {/* ส่วนของหัวข้อ */}
                <motion.div
                    className="mb-8"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {polyaminedata.title && (
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {polyaminedata.title.th}
                        </h2>
                    )}
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    {/* ส่วนของภาพ */}
                    <motion.div
                        className="w-full md:w-1/2"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {polyaminedata.imageUrl && (
                            <img
                                src={polyaminedata.imageUrl}
                                alt={polyaminedata.title?.th || "Polyamine Section Image"}
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        )}
                    </motion.div>

                    {/* ส่วนของเนื้อหาพร้อมกรอบ */}
                    <motion.div
                        className="bg-white/20 p-4 rounded-xl border border-white/50 backdrop-blur-sm shadow-lg w-full md:w-1/2 transition duration-300 transform hover:scale-105 hover:bg-white/30 hover:shadow-2xl text-left"
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {polyaminedata.description && (
                            <p className="text-lg text-white/90 leading-relaxed">
                                {polyaminedata.description.th}
                            </p>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}