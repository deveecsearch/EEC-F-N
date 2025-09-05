'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroSection({ data }) {
    console.log("HeroSection Data:", data);

    const herodata1 = data?.herodata1;
    const herodata2 = data?.herodata2;

    return (
        <section className="relative bg-[#0081ca] text-white flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-12">
                {/* Headline */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {herodata1?.title?.th || 'Helamin BRW150H'} <br />
                    นวัตกรรมสีเขียวเพื่อการป้องกันการกัดกร่อนและตะกรัน
                </h1>

                {/* Subheadline */}
                <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
                    {herodata1?.description?.th || ''}
                </p>

                {/* Highlight Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                    {herodata2?.bulletsItems?.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/10 p-6 rounded-lg flex flex-col items-center hover:bg-white/20 transition"
                        >
                            <span className="text-2xl mb-2">{item.title?.th}</span>
                            <span>{item.description?.th}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
