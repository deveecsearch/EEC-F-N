'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BeforeSection({ data }) {
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

  const floatingVariants = {
    animate: (customDelay = 0) => ({
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity, delay: customDelay }
    })
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Custom variants for single large image
  const singleImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-12">

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
          className="absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 rounded-2xl rotate-12"
          style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.2), rgba(251,208,30,0.2))' }}
          variants={floatingVariants}
          animate="animate"
          custom={0}
        />
        <motion.div
          className="absolute top-40 right-4 sm:right-16 w-12 sm:w-16 h-12 sm:h-16 rounded-full"
          style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.15), rgba(251,207,29,0.15))' }}
          variants={floatingVariants}
          animate="animate"
          custom={1}
        />
        <motion.div
          className="absolute bottom-32 left-4 sm:left-20 w-10 sm:w-12 h-10 sm:h-12 rounded-lg rotate-45"
          style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.25), rgba(250,201,24,0.25))' }}
          variants={floatingVariants}
          animate="animate"
          custom={2}
        />
        <motion.div
          className="absolute bottom-20 right-4 sm:right-32 w-20 sm:w-24 h-20 sm:h-24 rounded-3xl -rotate-12"
          style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.1), rgba(251,205,28,0.1))' }}
          variants={floatingVariants}
          animate="animate"
          custom={0.5}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto">

        {/* Section title */}
        <motion.div
          className="text-center mb-12 px-2"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold pb-3 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg">
            {mainTitle}
          </h2>
        </motion.div>

        {/* Gallery grid */}
        <div className={`grid w-full ${galleryItems.length === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'}`}>
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden border border-white/30 shadow-lg backdrop-blur-md 
             w-auto h-auto max-w-full flex items-center justify-center bg-white/40"
              variants={galleryItems.length === 1 ? singleImageVariants : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={item.image}
                alt={item.title?.th || `Image ${index + 1}`}
                width={800}   // ให้ Next.js จัดการขนาดจริงของภาพ
                height={600}
                className="rounded-2xl object-contain"
                priority={index < 2}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
              />
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}