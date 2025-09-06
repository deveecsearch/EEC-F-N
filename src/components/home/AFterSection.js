'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function AfterSection({ data }) {
  const mainTitle = "หลังใช้ HELAMIN®";
  const galleryItems = data?.galleryItems || [];
  const carouselRef = useRef();
  const controls = useAnimation();
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      const maxScroll = totalWidth - visibleWidth;
      setScrollWidth(maxScroll > 0 ? maxScroll : 0);

      // เลื่อนอัตโนมัติช้า ๆ ไปจนสุด
      const autoScroll = async () => {
        if (maxScroll > 0) {
          await controls.start({
            x: -maxScroll,
            transition: { duration: maxScroll / 50, ease: "linear" }, // ปรับ speed ได้
          });
        }
      };

      autoScroll();
    }
  }, [controls, galleryItems]);

  return (
    <section className="relative bg-gradient-to-b from-[#0085cd] to-[#00b4f4] flex flex-col items-center justify-center py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">{mainTitle}</h2>
      </div>

      <div className="w-full overflow-hidden px-6">
        <motion.div
          ref={carouselRef}
          className="flex space-x-6 cursor-grab"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -scrollWidth, right: 0 }}
          dragElastic={0.1}
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[16rem] h-64 rounded-2xl overflow-hidden border border-white/30 shadow-lg flex-shrink-0 relative hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
