"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Person1Section({ image, data }) {
  const items = data[0]?.data?.bulletsItems?.slice(0, 2) || [];
  const secondImage = image[0]?.data?.galleryItems?.[0];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getIcon = (title) => {
    if (!title) return null;
    title = title.toLowerCase();
    if (title.includes("tell")) return <Phone className="w-6 h-6 text-[#0081c9]" />;
    if (title.includes("e-mail") || title.includes("email")) return <Mail className="w-6 h-6 text-[#0081c9]" />;
    return null;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 p-8 rounded-3xl shadow-2xl bg-white border border-[#0081c9] max-w-md mx-auto ">

      {/* รูปภาพ */}
      {secondImage && (
        <div
          className={`w-full max-w-sm rounded-2xl overflow-hidden shadow-lg transform transition-all duration-700 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Image
            src={secondImage.image}
            alt={secondImage.title.th || "Image 2"}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* ข้อมูลติดต่อ */}
      <div className="flex flex-col gap-5 w-full max-w-sm">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center space-x-4 p-5 bg-[#f0f8ff] rounded-2xl shadow-md border-l-4 border-[#0684ca] transform transition-all duration-700 ease-out
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              hover:scale-105 hover:shadow-xl`}
          >
            <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
              {getIcon(item.title.th)}
            </div>
            <div>
              <h3 className="font-semibold text-[#0081c9] text-base md:text-lg">
                {item.title.th}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.description.th}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
