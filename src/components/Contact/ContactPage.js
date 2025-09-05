"use client";

import { useEffect, useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import ContactSection from "./ContactSection";

export default function ContactPage({ }) {


  // ใช้ธงโหลดแยก แล้วรวมตอนแสดง
//   const [loading, setLoading] = useState(true);

  // Fetch banner images
//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await fetch(
//           "https://eec-cms.vercel.app/api/company/info?id=sj-electrical-engineering-kgqh-mekyj8m1"
//         );
//         if (!res.ok) throw new Error("Failed to fetch banner images");
//         const data = await res.json();
//         setBannerImages({
//           desktop: data?.bannerImage?.desktop || [],
//           mobile: data?.bannerImage?.mobile || [],
//         });
//       } catch (err) {
//         console.error("Error fetching banner images:", err);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

  // if (loading) {
  //   return <LoadingOverlay />;
  // }

  return (
    <div className=" bg-white text-black">
      <ContactSection />
      {/* <LoadingOverlay />; */}
    </div>
  );
}
