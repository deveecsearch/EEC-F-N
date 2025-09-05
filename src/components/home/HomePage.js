"use client";

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import BannerSection from "./BannerSection";
import HeroSection from "./HeroSection";
import AboutSection from "./aboutSection";
import CatelogSection from "./CatelogSection";
import { getCompanySections, getCompanyInfo } from "../lib/APIservice";

export default function HomePage() {
  const [homeSections, setHomeSections] = useState([]);
  const [bannerImages, setBannerImages] = useState([]);
  const [sectionsData, setSectionsData] = useState({ herodata1: null, herodata2: null });
  const [loading, setLoading] = useState(true);
  const COMPANY_ID = process.env.NEXT_PUBLIC_COMPANY_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch company sections
        const allSections = await getCompanySections();
        const homeSectionId = "ef0afe36-14c2-41ae-9a27-56bd5bee886b";
        const filteredHome = allSections.filter(section => section.sectionId === homeSectionId);
        setHomeSections(filteredHome);

        const hero1 = "dbd075e5-72ab-4409-9ed7-69014b1f77a1";
        const hero2 = "d7cfae37-5142-4cf8-b9ef-ab1752500190";

        const heroSection1 = allSections.find(section => section.sectionId === hero1);
        const heroSection2 = allSections.find(section => section.sectionId === hero2);

        setSectionsData({
          herodata1: heroSection1?.data,
          herodata2: heroSection2?.data,
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
      <BannerSection images={bannerImages} />
      <HeroSection data={homeSections} />
      <AboutSection text={''} />
      <CatelogSection data={''} />
    </div>
  );
}
