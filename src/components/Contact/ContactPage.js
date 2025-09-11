'use client';

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import { getCompanySections } from "../lib/APIservice";
import Person1Section from "./Person1Section";
import Person2Section from "./Person2Section";
import ContactSection from "./ContactSection";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [contactData, setContactData] = useState([]);
  const [imageData, setImageData] = useState([]);

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

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  useEffect(() => {
    getCompanySections()
      .then((allSections) => {
        const contactDataId = "ef0afe36-14c2-41ae-9a27-56bd5bee886b";
        const imageSectionId = "48c0f54c-563b-4c08-b154-0f58ea527b44";

        const filteredContact = allSections.filter(
          (section) => section.sectionId === contactDataId
        );
        const filteredImage = allSections.filter(
          (section) => section.sectionId === imageSectionId
        );
        setContactData(filteredContact);
        setImageData(filteredImage);

      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingOverlay />;

  return (
    <section className="relative py-10  overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Animated top line */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
        variants={lineVariants}
        initial="animate"
        animate="animate"
      />

      {/* Floating shapes */}
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        
        {/* Contact Section */}
        <ContactSection data={contactData} />

        {/* Person cards */}
        <div className="mt-4 md:mt-4 max-w-6xl w-full flex flex-col md:flex-row justify-center items-start gap-4 md:gap-2">
          <div className="w-full md:w-1/2">
            <Person1Section image={imageData} data={contactData} />
          </div>
          <div className="w-full md:w-1/2">
            <Person2Section image={imageData} data={contactData} />
          </div>
        </div>

        <div className="h-6 md:h-10"></div>
      </div>
    </section>
  );
}
