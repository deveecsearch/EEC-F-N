"use client";

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import BannerSection from "./BannerSection";
import HeroSection from "./HeroSection";
import { getCompanySections, getCompanyInfo } from "../lib/APIservice";

export default function HomePage() {
  // const [bannerImages, setBannerImages] = useState({ desktop: "", mobile: "" });
  const [homeSections, setHomeSections] = useState([]);
  const [bannerImages , setBannerImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const COMPANY_ID = process.env.NEXT_PUBLIC_COMPANY_ID;

  useEffect(() => {
    getCompanySections()
      .then((allSections) => {
        const homeSectionId = "ef0afe36-14c2-41ae-9a27-56bd5bee886b";
        const filtered = allSections.filter(
          (section) => section.sectionId === homeSectionId
        );
        setHomeSections(filtered);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
  getCompanyInfo()
    .then((companyInfo) => {
      const companyId = process.env.NEXT_PUBLIC_COMPANY_ID;
      if (companyInfo.companyId === companyId) {
        console.log("Banner images:", companyInfo.bannerImage);
        setBannerImages(companyInfo.bannerImage);
      }
    })
    .finally(() => setLoading(false));
}, []);


  

  if (loading) return <LoadingOverlay />;



  
  return (
    <div className="bg-white text-black">
      {/* ถ้ามี BannerSection */}
      <BannerSection images={bannerImages} />
      <HeroSection data={homeSections} />
    </div>
  );
}
