'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PolyamineSection({ data }) {
    // กำหนดค่าเริ่มต้นให้กับ data เพื่อป้องกัน error
    const polyaminedata = data || {};

    // Debug: ตรวจสอบ structure ของ data
    console.log('PolyamineSection data:', data);
    console.log('Title structure:', data?.title);

    // Variants สำหรับการ animate เส้นด้านบน
    const lineVariants = {
        animate: {
            scaleX: [0.7, 1.2, 0.7],
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    };

    // Variants สำหรับการ animate หัวข้อ
    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 120,
                damping: 15
            }
        }
    };

    // Variants สำหรับการ animate ภาพ
    const imageVariants = {
        hidden: { opacity: 0, x: -50, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                delay: 0.2
            }
        }
    };

    // Variants สำหรับการ animate เนื้อหา
    const contentVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                delay: 0.4
            }
        }
    };

    // Variants สำหรับ floating elements
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

    // ฟังก์ชันสำหรับดึง title แบบ flexible
    const getTitle = () => {
        // ลองหาจาก structure ที่เป็นไปได้หลายแบบ
        if (polyaminedata.title?.th) return polyaminedata.title.th;
        if (polyaminedata.title?.en) return polyaminedata.title.en;
        if (typeof polyaminedata.title === 'string') return polyaminedata.title;
        if (polyaminedata.name?.th) return polyaminedata.name.th;
        if (polyaminedata.name?.en) return polyaminedata.name.en;
        if (typeof polyaminedata.name === 'string') return polyaminedata.name;
        return null;
    };

    const titleText = getTitle();

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
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
            </div>

            {/* Container หลักสำหรับเนื้อหาทั้งหมด */}
            <div className="container mx-auto px-6 lg:px-12 relative z-20">
                {/* ส่วนของหัวข้อ */}
                <motion.div
                    className="text-center mb-16"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {titleText ? (
                        <div className="relative inline-block">
                            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-4">
                                {titleText}
                            </h2>
                            {/* Decorative underline */}
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                        </div>
                    ) : (
                        <div className="relative inline-block">
                            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-4">
                                การสร้างฟิล์มด้วยโพลีเอมีน (HELAMIN®)
                            </h2>
                            <p className="text-gray-500 mt-2">
                            </p>
                        </div>
                    )}
                </motion.div>


                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* ส่วนของภาพ - ด้านซ้าย */}
                    <motion.div
                        className="w-full lg:w-1/2 order-2 lg:order-1"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-500/20 border border-white/20 backdrop-blur-sm">
                                {polyaminedata?.bulletsItems?.[0]?.image ? (
                                    <div className="relative w-full h-64 md:h-80">
                                        <Image
                                            src={polyaminedata?.bulletsItems?.[0]?.image}
                                            alt={polyaminedata?.bulletsItems?.[0]?.title?.th || "Polyamine Image"}
                                            fill
                                            className="object-cover rounded-2xl shadow-lg"
                                            sizes="(max-width: 768px) 100vw, 32rem"
                                            priority
                                        />
                                    </div>
                                ) : (
                                    // Placeholder ถ้าไม่มีรูป
                                    <div className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-100 via-indigo-50 to-cyan-100 flex items-center justify-center rounded-3xl border-2 border-dashed border-blue-300/50">
                                        <div className="text-center">
                                            <svg className="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-blue-500 font-medium">Image Placeholder</p>
                                        </div>
                                    </div>
                                )}
                                {/* Decorative overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Floating decoration */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full shadow-lg"></div>
                        </div>
                    </motion.div>

                    {/* ส่วนของเนื้อหา - ด้านขวา */}
                    <motion.div
                        className="w-full lg:w-1/2 order-1 lg:order-2"
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="relative group">
                            {/* Modern glassmorphism card */}
                            <div className="bg-gradient-to-br from-white/70 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/30 shadow-2xl shadow-blue-500/10 transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/20 hover:border-blue-200/50">
                                {/* Content background pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute top-6 right-6 w-16 h-16 border-2 border-blue-300 rounded-full"></div>
                                    <div className="absolute bottom-8 left-8 w-12 h-12 border border-indigo-300 rounded-lg rotate-45"></div>
                                </div>

                                <div className="relative z-10">
                                    {polyaminedata?.bulletsItems?.[0]?.description?.th ||
                                        polyaminedata?.bulletsItems?.[0]?.description?.en ||
                                        (typeof polyaminedata?.bulletsItems?.[0]?.description === 'string' ? polyaminedata.bulletsItems[0].description : null) ? (
                                        <div className="space-y-6">
                                            {/* Icon */}
                                            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>

                                            {/* Content text */}
                                            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed ">
                                                {polyaminedata?.bulletsItems[1].description?.th ||
                                                    polyaminedata?.bulletsItems[1].description?.en ||
                                                    polyaminedata?.bulletsItems[1].description}
                                            </p>
                                            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed ">
                                                {polyaminedata?.bulletsItems[0].description?.th ||
                                                    polyaminedata?.bulletsItems[0].description?.en ||
                                                    polyaminedata?.bulletsItems[0].description}
                                            </p>

                                            {/* Decorative line */}
                                            <div className="flex items-center gap-4 pt-4">
                                                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                                                <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent"></div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-8">
                                            <div className="w-16 h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-500 font-medium">Content Placeholder</p>
                                            <p className="text-sm text-red-500 mt-2">Debug: Content not found in bulletsItems[0].description</p>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}