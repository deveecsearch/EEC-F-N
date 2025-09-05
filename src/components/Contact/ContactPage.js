"use client";

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import ContactSection from "./ContactSection";
import { getCompanySections } from "../lib/APIservice";

export default function ContactPage({ }) {
  const [loading, setLoading] = useState(true);
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    getCompanySections()
      .then((allSections) => {
        const ContactSectionId = "ef0afe36-14c2-41ae-9a27-56bd5bee886b";
        const filtered = allSections.filter(
          (section) => section.sectionId === ContactSectionId
        );
        setContactData(filtered);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingOverlay />;

  return (
    <div className=" bg-white text-black">
      <ContactSection data={contactData}/>
    </div>
  );
}
