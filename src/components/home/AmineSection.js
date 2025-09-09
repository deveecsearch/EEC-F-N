'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AmineSection({ monoaminedata, polyaminedata }) {
    // Animation variants
    const lineVariants = {
        animate: {
            scaleX: [0.7, 1.2, 0.7],
            opacity: [0.5, 1, 0.5],
            transition: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 15 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: -50, scale: 0.9 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 100, delay: 0.2 } }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, delay: 0.4 } }
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            transition: { duration: 4, ease: "easeInOut", repeat: Infinity }
        }
    };

    // Helper to get title
    const getTitle = (data, defaultText) => {
        if (!data) return defaultText;
        if (data?.bulletsItems?.[0]?.title?.th) return data.bulletsItems[0].title.th;
        if (data?.bulletsItems?.[0]?.title?.en) return data.bulletsItems[0].title.en;
        if (data.title?.th) return data.title.th;
        if (data.title?.en) return data.title.en;
        if (typeof data.title === 'string') return data.title;
        if (data.name?.th) return data.name.th;
        if (data.name?.en) return data.name.en;
        if (typeof data.name === 'string') return data.name;
        return defaultText;
    };

    // Default titles
    const monoTitle = getTitle(monoaminedata, "การสร้างฟิล์มด้วยโมโนเอมีน");
    const polyTitle = getTitle(polyaminedata, "การสร้างฟิล์มด้วยโพลิเอมีน");

    // Render a single section (Monoamine or Polyamine)
    // ... imports และ function เหมือนเดิม

    const renderSection = (data, titleText) => (
        <div className="flex flex-col items-center gap-12 lg:gap-16">
            {/* Content */}
            <motion.div
                className="w-full"
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="relative group">
                    <div className="bg-gradient-to-br from-white/70 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/30 shadow-2xl shadow-blue-500/10 transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/20 hover:border-blue-200/50">
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-6 right-6 w-16 h-16 border-2 border-blue-300 rounded-full"></div>
                            <div className="absolute bottom-8 left-8 w-12 h-12 border border-indigo-300 rounded-lg rotate-45"></div>
                        </div>

                        <div className="relative z-10">
                            <motion.div
                                className="text-center mb-8"
                                variants={titleVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-4">
                                    {titleText}
                                </h2>
                            </motion.div>

                            {data?.bulletsItems?.length > 0 ? (
                                <ul className="space-y-4">
                                    {data.bulletsItems.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="w-3 h-3 rounded-full bg-[#fbab18] mt-2 mr-3 flex-shrink-0"></span>
                                            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                                                {item?.description?.th || item?.description?.en || item?.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 text-center">Content Placeholder</p>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Image */}
            <motion.div
                className="w-fit max-w-5xl lg:max-w-10xl"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {data?.bulletsItems?.[0]?.image ? (
                    <div className="relative rounded-2xl border-2 border-blue-300/50 overflow-hidden">
                        <Image
                            src={data.bulletsItems[0].image}
                            alt={data?.bulletsItems?.[0]?.title?.th || "Image"}
                            width={500}
                            height={600}
                            className="w-full object-contain transition-transform duration-500 "
                            priority
                        />
                        {/* Optional gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-transparent to-blue-100/20 pointer-events-none"></div>
                    </div>
                ) : (
                    <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center rounded-2xl border-2 border-blue-300/50">
                        <p className="text-gray-500">Image Placeholder</p>
                    </div>
                )}
            </motion.div>


        </div>
    );


    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">
            {/* Top animated line */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
                variants={lineVariants}
                initial="animate"
                animate="animate"
            />

            {/* Floating shapes */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-blue-50/40 to-indigo-100/30" />
                <motion.div className="absolute top-20 left-10 w-20 h-20 rounded-2xl rotate-12"
                    style={{ background: 'linear-gradient(45deg, #facc1b20, #fbd01e20)' }}
                    variants={floatingVariants} animate="animate" />
                <motion.div className="absolute top-40 right-16 w-16 h-16 rounded-full"
                    style={{ background: 'linear-gradient(45deg, #facc1b15, #fbcf1d15)' }}
                    variants={floatingVariants} animate="animate" />
                <motion.div className="absolute bottom-32 left-20 w-12 h-12 rounded-lg rotate-45"
                    style={{ background: 'linear-gradient(45deg, #facc1b25, #fac91825)' }}
                    variants={floatingVariants} animate="animate" />
                <motion.div className="absolute bottom-20 right-32 w-24 h-24 rounded-3xl -rotate-12"
                    style={{ background: 'linear-gradient(45deg, #facc1b10, #fbcd1c10)' }}
                    variants={floatingVariants} animate="animate" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-20 space-y-20">
                {/* Monoamine Section */}
                {renderSection(monoaminedata, monoTitle)}

                {/* Polyamine Section */}
                {renderSection(polyaminedata, polyTitle)}
            </div>
        </section>
    );
}
