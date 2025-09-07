'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
  }
};

export default function NewCatalogSection({ data }) {
  const galleryItems = data?.galleryItems || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));

  if (!galleryItems.length) return <p className="text-center text-gray-500 py-16">ไม่มีภาพ</p>;

  const currentItem = galleryItems[currentIndex];
  const imageUrl = currentItem?.image || null;

  return (
    <section className="relative flex flex-col items-center py-32 md:py-40 overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-50">

      {/* Floating shapes ขนาดใหญ่ */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-16 right-16 w-40 h-40 rounded-3xl -rotate-12"
          style={{ background: 'linear-gradient(45deg, #facc1b30, #fbd01e30)' }}
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-48 left-24 w-32 h-32 rounded-full"
          style={{ background: 'linear-gradient(45deg, #facc1b25, #fbcf1d25)' }}
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-40 right-32 w-24 h-24 rounded-lg -rotate-45"
          style={{ background: 'linear-gradient(45deg, #facc1b35, #fac91835)' }}
          variants={floatingVariants}
          animate="animate"
        />
      </div>



      {/* Carousel ขนาดใหญ่ */}
      <div className="w-full max-w-5xl h-[40rem] relative overflow-hidden rounded-3xl z-10">
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

        {/* ปุ่มเลื่อนซ้าย */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md shadow hover:bg-white z-20"
        >
          <ChevronLeft size={28} />
        </button>

        {/* ปุ่มเลื่อนขวา */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md shadow hover:bg-white z-20"
        >
          <ChevronRight size={28} />
        </button>

      </div>

      {/* ลิงก์ไปยัง Helamin */}
      <div className="mt-7 flex flex-col items-center z-10">
        {/* ข้อความด้านบนรูป */}
        <span className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
          รายละเอียดเพิ่มเติม คลิก
        </span>


        {/* ลิงก์ */}
        <a
          href="https://www.helamin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-xl"
        >
          {/* โลโก้ */}
          <Image
            src="/image/logo-helamin-rectangulaire-complexe-1.png"
            alt="Helamin"
            width={280}
            height={120}
            className="object-contain hover:scale-105 transition-transform duration-300"
          />

        </a>
      </div>


    </section>

  );
}
