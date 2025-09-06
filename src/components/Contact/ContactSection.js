"use client";

import { useEffect, useState } from "react";
import { Facebook, Globe } from "lucide-react";

export default function ContactSection({ data }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const items = data[0]?.data?.bulletsItems || [];

    const filteredItems = items.filter(
        item => item.title.th === "Helamin" || item.title.th === "Facebook"
    );

    const getIcon = (title) => {
        if (title === "Facebook") return <Facebook className="w-6 h-6 text-[#fbab1b]" />;
        if (title === "Helamin") return <Globe className="w-6 h-6 text-[#fbab1b]" />;
        return null;
    };

    return (
        <div className="flex flex-wrap justify-center mt-10 ">
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
                        className={`flex flex-row items-center w-56 h-20 rounded-2xl bg-white shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl
    ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    >
                        {/* ไอคอน */}
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm ml-3">
                            {getIcon(item.title.th)}
                        </div>

                        {/* ข้อความ */}
                        <p className="font-semibold text-[#fbab1b] text-left ml-4 text-base md:text-lg leading-snug">
                            {isHelamin ? "Helamin" : (
                                <>
                                    F&N <br /> Techno Co., Ltd.
                                </>
                            )}
                        </p>
                    </a>

                );
            })}
        </div>
    );
}
