'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function AfterSection({ data }) {
  const mainTitle = "หลังใช้ HELAMIN®";
  const galleryItems = data?.galleryItems || [];
  const carouselRef = useRef();
  const controls = useAnimation();
  const [scrollWidth, setScrollWidth] = useState(0);

  const lineVariants = {
    animate: {
      scaleX: [0.7, 1.2, 0.7],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity }
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      const maxScroll = totalWidth - visibleWidth;
      setScrollWidth(maxScroll > 0 ? maxScroll : 0);

      const autoScroll = async () => {
        if (maxScroll > 0) {
          await controls.start({
            x: -maxScroll,
            transition: { duration: maxScroll / 50, ease: "linear" },
          });
        }
      };

      autoScroll();
    }
  }, [controls, galleryItems]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Animated top line */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
        variants={lineVariants}
        initial="animate"
        animate="animate"
      />

      {/* Floating golden shapes */}
      <div className="absolute inset-0 z-0">
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

      {/* Carousel content */}
      <div className="relative z-10 flex flex-col items-center w-full">
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
      </div>
    </section>
  );
}
