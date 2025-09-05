"use client";

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import { getCompanySections } from "../lib/APIservice";
import Person1Section from "./Person1Section";
import Person2Section from "./Person2Section";

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
    <div className="bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0081c9] mb-8">Contact Us</h2>
        <p className="text-gray-600 mb-12">
          ติดต่อเราได้ผ่านช่องทางด้านล่าง ทีมงานพร้อมตอบกลับคุณ
        </p>
      </div>
      {/* <ContactCardNSection data={imageData} />
      <ContactSection data={contactDataNatcha} /> */}
      <Person1Section image={imageData} data={contactData} />
      <Person2Section image={imageData} data={contactData} />
      
    </div>
  );
}
