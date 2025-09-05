"use client";

import Image from "next/image";
import { Phone, Mail, Facebook, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function Person2Section({ image, data }) {
  const items = data[0]?.data?.bulletsItems?.slice(0, 2) || [];
  const secondImage = image[0]?.data?.galleryItems?.[0];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // delay เพื่อให้อนิเมชันเห็น effect
    return () => clearTimeout(timer);
  }, []);

  const getIcon = (title) => {
    if (title.includes("โทร")) return <Phone className="w-5 h-5 text-[#0081c9]" />;
    if (title.toLowerCase().includes("เมล") || title.toLowerCase().includes("email"))
      return <Mail className="w-5 h-5 text-[#0081c9]" />;
    if (title.toLowerCase().includes("facebook")) return <Facebook className="w-5 h-5 text-[#0081c9]" />;
    return <Globe className="w-5 h-5 text-[#0081c9]" />;
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-2xl shadow-xl">
      
      {/* รูปภาพ */}
      {secondImage && (
        <div
          className={`flex-shrink-0 w-full md:w-1/3 max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            hover:scale-105`}
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
      <div className="flex flex-col gap-4 w-full md:w-1/2 max-w-xs">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center space-x-3 p-4 bg-white rounded-xl shadow-md border-l-4 border-[#fbab18] transform transition-all duration-700 ease-out
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              hover:shadow-xl hover:scale-105`}
          >
            <div className="flex-shrink-0">{getIcon(item.title.th)}</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">{item.title.th}</h3>
              <p className="text-gray-700 text-sm">{item.description.th}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
