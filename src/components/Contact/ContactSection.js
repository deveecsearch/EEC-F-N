"use client";

import { Phone, Mail, Facebook, Globe } from "lucide-react";

export default function ContactSection({ data }) {
  const items = data[0]?.data?.bulletsItems || [];

  const getIcon = (title) => {
    if (title.includes("โทร")) return <Phone className="w-6 h-6 text-[#0081c9]" />;
    if (title.toLowerCase().includes("email")) return <Mail className="w-6 h-6 text-[#0081c9]" />;
    if (title.toLowerCase().includes("facebook")) return <Facebook className="w-6 h-6 text-[#0081c9]" />;
    return <Globe className="w-6 h-6 text-[#0081c9]" />;
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-sky-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0081c9] mb-8">Contact Us</h2>
        <p className="text-gray-600 mb-12">
          ติดต่อเราได้ผ่านช่องทางด้านล่าง ทีมงานพร้อมตอบกลับคุณ
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md border-l-4 border-[#fbab18] hover:shadow-lg transition"
            >
              <div className="flex-shrink-0">{getIcon(item.title.th)}</div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">{item.title.th}</h3>
                {item.description.th.startsWith("http") ? (
                  <a
                    href={item.description.th}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0081c9] hover:underline break-all"
                  >
                    {item.description.th}
                  </a>
                ) : (
                  <p className="text-gray-700">{item.description.th}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
