// ไฟล์: HomePage.js
"use client";

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import BannerSection from "./BannerSection";
import HeroSection from "./HeroSection";
import GoodSection from "./GoodSection";
import CatelogSection from "./CatelogSection";
import { getCompanySections, getCompanyInfo } from "../lib/APIservice";

export default function HomePage() {
  const [homeSections, setHomeSections] = useState([]);
  const [bannerImages, setBannerImages] = useState([]);
  const [sectionsData, setSectionsData] = useState({
    herodata1: null,
    herodata2: null,
    gooddata1: null, // เพิ่ม gooddata1 ใน initial state
  });
  const [loading, setLoading] = useState(true);
  const COMPANY_ID = process.env.NEXT_PUBLIC_COMPANY_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch company sections
        const allSections = await getCompanySections();
        const homeSectionId = "ef0afe36-14c2-41ae-9a27-56bd5bee886b";
        const filteredHome = allSections.filter(
          (section) => section.sectionId === homeSectionId
        );
        setHomeSections(filteredHome);

        const hero1 = "dbd075e5-72ab-4409-9ed7-69014b1f77a1";
        const hero2 = "d7cfae37-5142-4cf8-b9ef-ab1752500190";
        const good1 = "416071e4-a4aa-4faf-ba0f-ac8e857c33d3";

        const heroSection1 = allSections.find(
          (section) => section.sectionId === hero1
        );
        const heroSection2 = allSections.find(
          (section) => section.sectionId === hero2
        );
        const goodSection1 = allSections.find(
          (section) => section.sectionId === good1
        );

        setSectionsData({
          herodata1: heroSection1?.data,
          herodata2: heroSection2?.data,
          gooddata1: goodSection1?.data,
        });

        // Fetch company info
        const companyInfo = await getCompanyInfo();
        if (companyInfo.companyId === COMPANY_ID) {
          setBannerImages(companyInfo.bannerImage);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingOverlay />;

  return (
    <div className="bg-white text-black">
      {/* Banner Section */}
      <BannerSection images={bannerImages} />

      {/* Hero Section + Overlay */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0081ca]/90 to-[#00b4f4]/90"></div>
        <div className="relative z-10">
          <HeroSection data={sectionsData} />
        </div>
      </section>

      {/* Good Section + Overlay */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/80 to-white/80"></div>
        <div className="relative z-10">
          <GoodSection data={sectionsData.gooddata1} />
        </div>
      </section>

      {/* Catelog Section + Overlay */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ff]/80 to-white/80"></div>
        <div className="relative z-10">
          <CatelogSection data={""} />
        </div>
      </section>
    </div>
  );
}