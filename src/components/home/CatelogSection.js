'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const lineVariants = {
  animate: {
    scaleX: [0.7, 1.2, 0.7],
    opacity: [0.5, 1, 0.5],
    transition: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
  },
};

export default function CatelogSection({ hBRW150Hdata, newcatalogdata }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const galleryItems = newcatalogdata?.galleryItems || [];
  const currentItem = galleryItems[currentIndex] || {};
  const imageUrl = currentItem?.image;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  return (
    <section className="relative pt-6 md:pt-8 pb-6 md:pb-8 overflow-hidden">

      {/* Background + floating shapes */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-blue-50 to-slate-50" />

        {/* Floating shapes */}
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

      {/* Animated top line */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
        variants={lineVariants}
        initial="animate"
        animate="animate"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold pb-10 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg z-10">
          ผลิตภัณฑ์
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl px-6">

          {/* Left: Carousel */}
          <div className="w-full md:w-1/2 h-[40rem] relative overflow-hidden rounded-3xl cursor-pointer" onClick={() => setModalOpen(true)}>
            <AnimatePresence initial={false} mode="wait">
              {imageUrl && (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={imageUrl}
                    alt={currentItem?.title?.th || 'Gallery Image'}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md shadow hover:bg-white z-20"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md shadow hover:bg-white z-20"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Right: HELAMIN BRW150H details */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl shadow-blue-500/15 border border-blue-200/40 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60">
            {hBRW150Hdata?.bulletsItems?.length > 0 && (
              <>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-sm">
                  {hBRW150Hdata.bulletsItems[0]?.title?.th || "ชื่อสินค้า"}
                </h3>
                <div className="flex flex-col md:flex-col items-center gap-4 md:gap-6">
                  <div className="flex justify-center gap-4 md:gap-6 flex-wrap mb-4">
                    {hBRW150Hdata.bulletsItems
                      .filter(item => item?.image)
                      .map((item, idx) => (
                        <div key={idx} className="w-36 h-36 md:w-40 md:h-40 overflow-hidden rounded-xl shadow-xl shadow-blue-500/10 flex-shrink-0 transition-transform duration-300 hover:scale-105 border border-blue-200/30">
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
                        ค่า pH : <span className="font-semibold text-blue-700">
                          {hBRW150Hdata.bulletsItems[1]?.description?.th?.replace('ค่า pH: ', '') || "-"}
                        </span>
                      </p>
                      <p className="text-sm md:text-base text-gray-700">
                        ส่วนประกอบ : <span className="font-semibold text-blue-700">
                          {hBRW150Hdata.bulletsItems[2]?.description?.th?.replace('ส่วนประกอบ: ', '') || "-"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Modal for full image */}
        {modalOpen && imageUrl && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center"
            onClick={() => setModalOpen(false)}
          >
            {/* Overlay ครอบทั้งหน้าเว็บ + เบลอทุกอย่างรวม Navbar */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* ปุ่มปิด */}
            <button
              className="absolute top-5 right-5 text-white p-2 bg-black/50 rounded-full hover:bg-black/70 z-[1000]"
              onClick={() => setModalOpen(false)}
            >
              <X size={28} />
            </button>

            {/* ภาพเต็ม */}
            <div className="relative w-full max-w-4xl h-[80vh] z-[1000]">
              <Image
                src={imageUrl}
                alt={currentItem?.title?.th || 'Gallery Image'}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}