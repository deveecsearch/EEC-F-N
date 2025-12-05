// HomePageServer.js
// Importing React components for the home page layout.
import BannerSection from "./BannerSection";
import HeroSection from "./HeroSection";
import GoodSection from "./GoodSection";
import CatelogSection from "./CatelogSection";
import HowWorkSection from "./HowWorkSection";
import TestSection from "./testSection";
import BeforeSection from "./BeforeSection";
import TagSection from "./TagSection";
import FloatingChat from "./FloatingChat";
import VisitorCounter from "./ViewerSection";
import AmineSection from "./AmineSection";
// Importing server-side data fetching functions.
import { getCompanySections, getCompanyInfo } from "../lib/APIservice";

// Define a single object to map descriptive names to section IDs.
// This improves readability and maintainability.
const SECTION_IDS = {
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
  newcatalog: "a016580b-16e2-494c-9873-e40c3dd6c4fa",
  tag: "9d604dfb-49fe-4ff8-986e-2adae3e59ac1",
  nomoamine: "cfdf5536-dd78-4019-b741-2e47de31bc5c",
};

export default async function HomePageServer() {
  // Fetch data on the server side to be passed to components.
  const allSections = await getCompanySections();
  const companyInfo = await getCompanyInfo();

  // Helper function to find a section by its ID,
  // making the data retrieval part more concise and reusable.
  const getSectionData = (id) => {
    const section = allSections.find((s) => s.sectionId === id);
    return section?.data || null; // Return null if data is not found
  };

  const sectionsData = {
    herodata1: getSectionData(SECTION_IDS.hero1),
    herodata2: getSectionData(SECTION_IDS.hero2),
    gooddata1: getSectionData(SECTION_IDS.good1),
    polyaminedata: getSectionData(SECTION_IDS.polyamine),
    testSection: getSectionData(SECTION_IDS.testSection),
    polyaminedata2: getSectionData(SECTION_IDS.polyamine2),
    beforedata: getSectionData(SECTION_IDS.before),
    afterdata: getSectionData(SECTION_IDS.after),
    hBRW150Hdata: getSectionData(SECTION_IDS.HELAMIN_BRW150H),
    howworkimagedata: getSectionData(SECTION_IDS.howworkimage),
    howworkdata: getSectionData(SECTION_IDS.howworkdata),
    herodata3: getSectionData(SECTION_IDS.howwokimage2),
    newcatalogdata: getSectionData(SECTION_IDS.newcatalog),
    tagdata: getSectionData(SECTION_IDS.tag),
    monoaminedata: getSectionData(SECTION_IDS.nomoamine),
  };

  return (
    <div className="bg-white text-black">
      {/* Banner Section */}
      <BannerSection images={companyInfo.bannerImage || []} />

      {/* Hero Section */}
      <section className="relative">
        {/* Pass individual hero data instead of the whole object */}
        <HeroSection data={sectionsData} />
      </section>

      {/* Catalog Section */}
      <section className="relative">
        <CatelogSection
          hBRW150Hdata={sectionsData.hBRW150Hdata}
          newcatalogdata={sectionsData.newcatalogdata}
        />
      </section>

      {/* Good Section + Overlay */}
      <section className="relative">
        <GoodSection data={sectionsData.gooddata1} />
      </section>

      {/* Amine Section */}
      <section className="relative">
        <AmineSection
          monoaminedata={sectionsData.monoaminedata}
          polyaminedata={sectionsData.polyaminedata}
        />
      </section>

      {/* How It Works Section */}
      <section className="relative">
        <HowWorkSection data={sectionsData} />
      </section>

      {/* Test Section */}
      <section className="relative">
        <TestSection data={sectionsData.testSection} />
      </section>

      {/* Before Section */}
      <section className="relative">
        <BeforeSection data={sectionsData.beforedata} />
      </section>

      {/* Visitor Counter Section */}
      <section className="relative">
        <VisitorCounter />
      </section>

      {/* Tag Section */}
      <section className="relative">
        <TagSection data={sectionsData.tagdata} />
      </section>

      <FloatingChat />
    </div>
  );
}