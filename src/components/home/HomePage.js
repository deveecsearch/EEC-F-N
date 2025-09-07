// ไฟล์: HomePage.js
"use client";

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import BannerSection from "./BannerSection";
import HeroSection from "./HeroSection";
import GoodSection from "./GoodSection";
import CatelogSection from "./CatelogSection";
import { getCompanySections, getCompanyInfo } from "../lib/APIservice";
import HowWorkSection from "./HowWorkSection";
import TestSection from "./testSection";
import BeforeSection from "./BeforeSection";
import AfterSection from "./AFterSection";
import PolyamineSection from "./polyamineSection";

// สร้าง object สำหรับเก็บ section IDs เพื่อไม่ให้ hardcode
const SECTION_IDS = {
  home: "ef0afe36-14c2-41ae-9a27-56bd5bee886b",
  hero1: "dbd075e5-72ab-4409-9ed7-69014b1f77a1",
  hero2: "d7cfae37-5142-4cf8-b9ef-ab1752500190",
  good1: "416071e4-a4aa-4faf-ba0f-ac8e857c33d3",
  polyamine: "cc3ba68a-cd6f-4da6-a19f-5b71dee81829",
  testSection: "155a78c3-8e1b-405b-ae73-38f5ec21dfca",
  polyamine2: "c82806c2-c241-4d35-9518-8f3ea8672ac3",
  before: "c5db1f11-6786-47a2-9127-b9fb802fc4df",
  after: "b585b2bf-0f7d-4ea3-8323-02bed2a13142",
  HELAMIN_BRW150H: "4bc48cb0-af4f-45b3-a6a5-073951df2d56",
  howworkimage: "9c7e0a4e-4a3f-45bc-8006-2f23480d0863",
  howworkdata: "ee71dc36-5cd8-4a48-9346-e5c85722bbfe",
  howwokimage2: "ef287191-8f35-467e-abb7-86b84bd839e7",
  newcatalog: "a016580b-16e2-494c-9873-e40c3dd6c4fa"
};

export default function HomePage() {
  const [bannerImages, setBannerImages] = useState([]);
  const [sectionsData, setSectionsData] = useState({
    herodata1: null,
    herodata2: null,
    gooddata1: null,
    polyaminedata: null,
    testSection: null,
    polyaminedata2: null,
    beforedata: null,
    afterdata: null,
    hBRW150Hdata: null,
    howworkimagedata: null,
    howworkdata: null,
    howwokimage2: null,
    newcatalogdata: null,
  });
  const [loading, setLoading] = useState(true);
  const COMPANY_ID = process.env.NEXT_PUBLIC_COMPANY_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allSections = await getCompanySections();
        const companyInfo = await getCompanyInfo();

        const heroSection1 = allSections.find(
          (section) => section.sectionId === SECTION_IDS.hero1
        );
        const heroSection2 = allSections.find(
          (section) => section.sectionId === SECTION_IDS.hero2
        );
        const goodSection1 = allSections.find(
          (section) => section.sectionId === SECTION_IDS.good1
        );
        const polyamineSection = allSections.find(
          (section) => section.sectionId === SECTION_IDS.polyamine
        );
        const testSection = allSections.find(
          (section) => section.sectionId === SECTION_IDS.testSection
        );

        const polyamineSection2 = allSections.find(
          (section) => section.sectionId === SECTION_IDS.polyamine2
        );
        const beforeSection = allSections.find(
          (section) => section.sectionId === SECTION_IDS.before
        );
        const afterSection = allSections.find(
          (section) => section.sectionId === SECTION_IDS.after
        );
        const HELAMIN_BRW150H_Section = allSections.find(
          (section) => section.sectionId === SECTION_IDS.HELAMIN_BRW150H
        );
        const howworkSection = allSections.find(
          (section) => section.sectionId === SECTION_IDS.howworkimage
        );
        const howworkdataSection = allSections.find(
          (section) => section.sectionId === SECTION_IDS.howworkdata
        );
        const howwokimage2Section = allSections.find(
          (section) => section.sectionId === SECTION_IDS.howwokimage2
        );
        const newcatalogdataSection = allSections.find(
          (section) => section.sectionId === SECTION_IDS.newcatalog
        );

        setSectionsData({
          herodata1: heroSection1?.data,
          herodata2: heroSection2?.data,
          gooddata1: goodSection1?.data,
          polyaminedata: polyamineSection?.data,
          testSection: testSection?.data,
          polyaminedata2: polyamineSection2?.data,
          beforedata: beforeSection?.data,
          afterdata: afterSection?.data,
          hBRW150Hdata: HELAMIN_BRW150H_Section?.data,
          howworkimagedata: howworkSection?.data,
          howworkdata: howworkdataSection?.data,
          herodata3: howwokimage2Section?.data,
          newcatalogdata: newcatalogdataSection?.data,
        });


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
  }, [COMPANY_ID]); // เพิ่ม COMPANY_ID เข้าไปใน dependency array

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
 
      {/* Polyamine Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ff]/80 to-white/80"></div>
        <div className="relative z-10">
          <PolyamineSection data={sectionsData.polyaminedata}
          />

        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ff]/80 to-white/80"></div>
        <div className="relative z-10">
          <HowWorkSection data = {sectionsData} />
        </div>
      </section>

      {/* Test Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ff]/80 to-white/80"></div>
        <div className="relative z-10">
          <TestSection data={sectionsData.testSection} />
        </div>
      </section>

      {/* Before Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ff]/80 to-white/80"></div>
        <div className="relative z-10">
          <BeforeSection data={sectionsData.beforedata} />
        </div>
      </section>

      {/* After Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ff]/80 to-white/80"></div>
        <div className="relative z-10">
          <AfterSection data={sectionsData.afterdata} />
        </div>
      </section>

      {/* Catalog Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ff]/80 to-white/80"></div>
        <div className="relative z-10">
          <CatelogSection hBRW150Hdata={sectionsData.hBRW150Hdata} newcatalogdata = {sectionsData.newcatalogdata} />
        </div>
      </section>

    </div>
  );
}