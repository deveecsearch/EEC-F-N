"use client";

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import BannerSection from "./BannerSection";
import HeroSection from "./HeroSection";
import { getCompanySections } from "../lib/APIservice";

export default function HomePage() {
  // const [bannerImages, setBannerImages] = useState({ desktop: "", mobile: "" });
  const [homeSections, setHomeSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCompanySections()
      .then((allSections) => {
        const homeSectionId = "ef0afe36-14c2-41ae-9a27-56bd5bee886b";
        const filtered = allSections.filter(
          (section) => section.sectionId === homeSectionId
        );
        console.log("Filtered sections:", filtered);
        setHomeSections(filtered);
      })
      .finally(() => setLoading(false));
  }, []);

  

  if (loading) return <LoadingOverlay />;

  return (
    <div className="bg-white text-black">
      {/* ถ้ามี BannerSection */}
      {/* <BannerSection images={bannerImages} /> */}
      <HeroSection data={homeSections} />
    </div>
  );
}
