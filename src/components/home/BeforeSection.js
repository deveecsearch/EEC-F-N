'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TestSection({ data }) {
  const galleryItems = data?.galleryItems || [];
  const mainTitle = data?.galleryItems?.[0]?.title?.th;

  // Top line animation
  const lineVariants = {
    animate: {
      scaleX: [0.7, 1.2, 0.7],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Floating shapes animation
  const floatingVariants = {
    animate: (customDelay = 0) => ({
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity, delay: customDelay }
    })
  };

  // Card scroll animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Detect mobile for title floating
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // Title floating animation
  const titleFloating = {
    animate: {
      y: isMobile ? [0, 0, 0] : [-8, 8, -8],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">

      {/* Animated top line */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
        variants={lineVariants}
        initial={false}
        animate="animate"
      />

      {/* Floating golden shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-2xl rotate-12"
          style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.2), rgba(251,208,30,0.2))' }}
          variants={floatingVariants}
          animate="animate"
          custom={0}
        />
        <motion.div
          className="absolute top-40 right-16 w-16 h-16 rounded-full"
          style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.15), rgba(251,207,29,0.15))' }}
          variants={floatingVariants}
          animate="animate"
          custom={1}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-12 h-12 rounded-lg rotate-45"
          style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.25), rgba(250,201,24,0.25))' }}
          variants={floatingVariants}
          animate="animate"
          custom={2}
        />
        <motion.div
          className="absolute bottom-20 right-32 w-24 h-24 rounded-3xl -rotate-12"
          style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.1), rgba(251,205,28,0.1))' }}
          variants={floatingVariants}
          animate="animate"
          custom={0.5}
        />
      </div>

      <div className="flex flex-col items-center w-full">
        {/* Section title with floating motion */}
        {/* Section title */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold pb-3 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg">
            {mainTitle}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-[90%]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[400px] md:w-[600px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/30 shadow-lg backdrop-blur-md relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={item.image}
                alt={item.title?.th || `Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
