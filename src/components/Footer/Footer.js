"use client";

import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import navItemsMap from "../Navbar/navItemsMap";

const ACCENT = "#fbab18"; // สีขีดและ hover

const Footer = () => {
  const content = {
    about: "บริษัท เอฟแอนด์เอ็น เทคโน จำกัด \n ผู้นำเข้าชั้นนำของน้ำยา Helamin BRW150H จากประเทศฝรั่งเศส \n เป็นมิตรต่อสิ่งเเวดล้อม พร้อมเทคโนโลยีฟิล์มโพลีเอมีนเฉพาะตัว ",
    contact: {
      address: "123/45 หมู่ที่ 8 ตำบลห้วยใหญ่ อำเภอบางละมุง จังหวัดชลบุรี 20150",
      people: [
        {
          name: "คุณณัชชา",
          phone: "098-285-8746",
          email: "natcha.p2558.nn@gmail.com",
        },
        {
          name: "Frank Berghaeuser",
          phone: "089-488-5798",
          email: "f.berghaeuser@gmail.com",
        },
      ],
      website: "https://www.helamin.com/",
      additionalWebsite: "#################################",
      workingHours: "#################################",
    },
  };

  return (
    <footer className="bg-white text-gray-800 px-6 md:px-20 lg:px-32 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* คอลัมน์ 1: โลโก้ + Social */}
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <Image
            src={"/image/Logo_FN.png"}
            alt="FN Logo"
            width={180}
            height={180}
            className="object-contain rounded-full"
          />
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=100041323733259"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition duration-300 hover:text-[${ACCENT}] hover:scale-110`}
            >
              <Image
                src={"/image/Facebook_icon.png"}
                alt="Facebook"
                width={24}
                height={24}
              />
              Facebook
            </a>
            <a
              href="https://line.me/ti/p/[LINE_ID]"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition duration-300 hover:text-[${ACCENT}] hover:scale-110`}
            >
              <Image
                src={"/image/LINE_icon.png"}
                alt="Line"
                width={24}
                height={24}
              />
              Line
            </a>
          </div>
        </div>

        {/* คอลัมน์ 2: เกี่ยวกับเรา */}
        <div>
          <h3
            className={`text-lg font-bold border-b-2 border-[${ACCENT}] inline-block pb-1 mb-4`}
          >
            เกี่ยวกับเรา
          </h3>
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {content.about}
          </p>
        </div>
 
        {/* คอลัมน์ 3: ติดต่อเรา */}
        <div>
          <h3
            className={`text-lg font-bold border-b-2 border-[${ACCENT}] inline-block pb-1 mb-4`}
          >
            ติดต่อเรา
          </h3>
          <div className="text-sm space-y-3">
            {/* People */}
            {content.contact.people.map((person, idx) => (
              <div key={idx} className="space-y-2">
                {/* ชื่อ (ตัวหนา) */}
                <p className="font-bold text-gray-800">{person.name}</p>

                {/* เบอร์โทร */}
                <p className="flex gap-2">
                  <Phone className={`w-4 h-4 text-[${ACCENT}] flex-shrink-0`} />
                  <a
                    href={`tel:${person.phone}`}
                    className={`hover:underline hover:text-[${ACCENT}] transition-colors`}
                  >
                    {person.phone}
                  </a>
                </p>

                {/* อีเมล */}
                <p className="flex gap-2">
                  <Mail className={`w-4 h-4 text-[${ACCENT}] flex-shrink-0`} />
                  <a
                    href={`mailto:${person.email}`}
                    className={`hover:underline hover:text-[${ACCENT}] transition-colors`}
                  >
                    {person.email}
                  </a>
                </p>
              </div>
            ))}

            {/* Address */}
            <p className="flex gap-2 ">
              <MapPin className={`w-4 h-4 text-[${ACCENT}] flex-shrink-0 mt-0.5`} />
              <span>{content.contact.address}</span>
            </p>

            {/* Website */}
            <p className="flex gap-2">
              <Globe className={`w-4 h-4 text-[${ACCENT}] flex-shrink-0`} />
              <a
                href={content.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:underline hover:text-[${ACCENT}] transition-colors`}
              >
                {content.contact.website.replace(/^https?:\/\//, '')}
              </a>
            </p>
          </div>
        </div>


        {/* คอลัมน์ 4: เมนูหลัก */}
        <div>
          <h3
            className="text-lg font-bold inline-block pb-1 mb-4"
            style={{ borderBottom: `2px solid ${ACCENT}` }}
          >
            เมนูหลัก
          </h3>
          <ul className="space-y-2 text-sm">
            {navItemsMap.th
              .filter(
                (item) =>
                  item.title !== "Download" && item.title !== "ดาวน์โหลด"
              )
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    title={item.title}
                    className="transition duration-300 inline-block"
                    style={{ color: "#333" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-300 pt-6">
        Copyright &copy; {new Date().getFullYear()} - eecsearch.co.th
      </div>
    </footer>
  );
};

export default Footer;
