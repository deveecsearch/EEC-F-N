'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

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

export default function AfterSection({ data }) {
    const mainTitle = "หลังใช้ HELAMIN®";
    const galleryItems = data?.galleryItems || [];
    const carouselRef = useRef();
    const controls = useAnimation();
    const [scrollWidth, setScrollWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (carouselRef.current) {
            const totalWidth = carouselRef.current.scrollWidth;
            const visibleWidth = carouselRef.current.offsetWidth;
            const maxScroll = totalWidth - visibleWidth;
            setScrollWidth(maxScroll > 0 ? maxScroll : 0);
        }
    }, [galleryItems]);

    useEffect(() => {
        // เริ่มเลื่อนอัตโนมัติวนเรื่อยๆ ถ้าไม่ได้ลาก
        if (scrollWidth > 0 && !isDragging) {
            controls.start({
                x: [-scrollWidth, 0], // จากขวาไปซ้ายแล้วกลับไปเริ่มใหม่
                transition: { 
                    duration: scrollWidth / 50,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        }
    }, [scrollWidth, isDragging, controls]);

    return (
        <section className="relative bg-gradient-to-br from-indigo-100 via-blue-50 to-slate-50 flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">

            {/* Animated top line */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
                variants={lineVariants}
                initial="animate"
                animate="animate"
            />

            {/* Floating golden yellow shapes */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-20 right-10 w-20 h-20 rounded-2xl -rotate-12"
                    style={{ background: 'linear-gradient(45deg, #facc1b20, #fbd01e20)' }}
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute top-40 left-16 w-16 h-16 rounded-full"
                    style={{ background: 'linear-gradient(45deg, #facc1b15, #fbcf1d15)' }}
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-32 right-20 w-12 h-12 rounded-lg -rotate-45"
                    style={{ background: 'linear-gradient(45deg, #facc1b25, #fac91825)' }}
                    variants={floatingVariants}
                    animate="animate"
                />
            </div>

            {/* Section title */}
            <motion.div
                className="text-center mb-12 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } }}
            >
                <h2 className="text-4xl md:text-5xl font-extrabold pb-3 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg">
                    {mainTitle}
                </h2>
            </motion.div>

            {/* Carousel */}
            <div className="w-full overflow-hidden px-6 z-10">
                <motion.div
                    ref={carouselRef}
                    className="flex space-x-6 cursor-grab"
                    animate={controls}
                    drag="x"
                    dragConstraints={{ left: -scrollWidth, right: 0 }}
                    dragElastic={0.1}
                    onDragStart={() => {
                        setIsDragging(true);
                        controls.stop();
                    }}
                    onDragEnd={() => {
                        setIsDragging(false);
                        controls.start({
                            x: [-scrollWidth, 0],
                            transition: { 
                                duration: scrollWidth / 50, 
                                ease: "linear", 
                                repeat: Infinity,
                            },
                        });
                    }}
                >
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[16rem] h-64 rounded-2xl overflow-hidden border border-blue-200/30 shadow-xl shadow-blue-500/10 flex-shrink-0 relative hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <img
                                src={item.image}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}