"use client";

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import { getCompanySections } from "../lib/APIservice";
import Person1Section from "./Person1Section";
import Person2Section from "./Person2Section";
import ContactSection from "./ContactSection";

export default function ContactPage({ }) {
  const [loading, setLoading] = useState(true);
  const [contactData, setContactData] = useState([]);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    getCompanySections()
      .then((allSections) => {
        const contactData = "ef0afe36-14c2-41ae-9a27-56bd5bee886b";
        const imageSectionId = "48c0f54c-563b-4c08-b154-0f58ea527b44";

        const filteredContac = allSections.filter(
          (section) => section.sectionId === contactData
        );
        const filteredImage = allSections.filter(
          (section) => section.sectionId === imageSectionId
        );
        setContactData(filteredContac);
        setImageData(filteredImage);

      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingOverlay />;

  return (
    <>
      <div className="text-black bg-gradient-to-b from-[#f0f9ff] via-[#c0e4ff] to-[#0081c9]">

        <div className="h-1"></div>

        <div className=" max-w-4xl mx-auto text-center px-4">
          {/* เส้นเล็กด้านบน */}
          <div className="h-1 w-24 bg-[#0081c9] mx-auto rounded-full mt-10 mb-4"></div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0081c9] mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            ติดต่อเราได้ผ่านช่องทางด้านล่าง ทีมงานพร้อมตอบกลับคุณ
          </p>
        </div>

        {/* Contact Section */}
        <div >
          <ContactSection data={contactData} />
        </div>

        {/* นามบัตร */}
        <div className="mt-8 md:mt-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-start px-2 md:px-4 gap-4 md:gap-2">
          <div className="w-full md:w-1/2">
            <Person1Section image={imageData} data={contactData} />
          </div>
          <div className="w-full md:w-1/2">
            <Person2Section image={imageData} data={contactData} />
          </div>
        </div>
        <div className="h-6 md:h-10"></div>


      </div>

    </>
  );

}
