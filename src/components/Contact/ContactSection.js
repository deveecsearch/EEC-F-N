"use client";

import { Facebook, Globe } from "lucide-react";

export default function ContactSection({ data }) {
    const items = data[0]?.data?.bulletsItems || [];

    const filteredItems = items.filter(
        item => item.title.th === "Helamin" || item.title.th === "Facebook"
    );

    const getIcon = (title) => {
        if (title === "Facebook") return <Facebook className="w-7 h-7 text-[#fbab1b]" />;
        if (title === "Helamin") return <Globe className="w-6 h-6 text-[#fbab1b]" />;
        return null;
    };

    return (
        <div className="flex flex-wrap justify-center mt-10 gap-6">
            {filteredItems.map((item, idx) => {
                const isHelamin = item.title.th === "Helamin";
                const href = isHelamin ? "https://www.helamin.com/" : item.description.th;
                const displayText = isHelamin ? "Helamin" : "F&N Techno Co., Ltd.";

                return (
                    <a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center h-20 rounded-2xl px-4"
                    >
                        {/* ไอคอน */}
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm">
                            {getIcon(item.title.th)}
                        </div>

                        {/* ข้อความ */}
                        <span className="font-bold text-[#fbab1b] ml-4 text-lg md:text-xl lg:text-2xl leading-snug whitespace-nowrap hover:underline transition-all duration-200">
                            {displayText}
                        </span>
                    </a>
                );
            })}
        </div>
    );
}
