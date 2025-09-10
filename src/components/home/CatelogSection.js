'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';


export default function CatelogSection({ hBRW150Hdata, newcatalogdata }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryItems = newcatalogdata?.galleryItems || [];
  const currentItem = galleryItems[currentIndex] || {};
  const imageUrl = currentItem?.image;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  // --- Top line variant ---
  const lineVariants = {
    animate: {
      scaleX: [0.7, 1.2, 0.7],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
    },
  };

  // --- Fade-in up variant for scroll effect ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-100 via-blue-50 to-slate-50 flex flex-col items-center justify-center overflow-hidden py-20 md:py-24">

      {/* Animated top line */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
        variants={lineVariants}
        initial="animate"
        animate="animate"
      />

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold pb-10 text-center bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg z-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        แคตตาล็อกผลิตภัณฑ์
      </motion.h2>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl px-6">
        {/* Left: Carousel */}
        <motion.div
          className="w-full md:w-1/2 h-[40rem] relative overflow-hidden rounded-3xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={currentItem?.title?.th || 'Gallery Image'}
              fill
              className="object-contain"
              unoptimized
            />
          )}

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md shadow hover:bg-white z-20"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md shadow hover:bg-white z-20"
          >
            <ChevronRight size={28} />
          </button>
        </motion.div>

        {/* Right: HELAMIN BRW150H details + logo */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl shadow-blue-500/15 border border-blue-200/40 transition-all duration-500 w-full">
            {hBRW150Hdata?.bulletsItems?.length > 0 && (
              <>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-sm">
                  {hBRW150Hdata.bulletsItems[0]?.title?.th || "ชื่อสินค้า"}
                </h3>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex justify-center gap-6 flex-wrap mb-4">
                    {hBRW150Hdata.bulletsItems
                      .filter(item => item?.image)
                      .map((item, idx) => (
                        <div
                          key={idx}
                          className="w-36 h-36 md:w-40 md:h-40 overflow-hidden rounded-xl shadow-xl shadow-blue-500/10 flex-shrink-0 transition-transform duration-300 border border-blue-200/30"
                        >
                          <Image
                            src={item.image}
                            alt={item.title?.th || "Image"}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                  </div>
                  <div className="space-y-3 text-center md:text-left text-gray-800">
                    <p className="text-base md:text-lg font-medium">
                      {hBRW150Hdata.bulletsItems[0]?.description?.th || "รายละเอียดสินค้า"}
                    </p>
                    <div className="pt-3 border-t border-blue-200/50">
                      <p className="text-sm md:text-base text-gray-700">
                        ค่า pH :{" "}
                        <span className="font-semibold text-blue-700">
                          {hBRW150Hdata.bulletsItems[1]?.description?.th?.replace("ค่า pH: ", "") || "-"}
                        </span>
                      </p>
                      <p className="text-sm md:text-base text-gray-700">
                        ส่วนประกอบ :{" "}
                        <span className="font-semibold text-blue-700">
                          {hBRW150Hdata.bulletsItems[2]?.description?.th?.replace("ส่วนประกอบ: ", "") || "-"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}