'use client';

import React from 'react';
import Image from 'next/image';

export default function CatelogSection({
    hBRW150Hdata,
    h906Hdata,
    h906HTURBdata,
    hHALAQdata,
    hHS190Hdata,
    h9100MKdata,
    h9800CTdata,
    hRW47Hdata
}) {

    return (
        <section className="relative bg-white flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0085cd] to-[#33c2f6] z-0"></div>
            <div className="relative z-10 max-w-6xl w-full px-6 py-12">
                <div className="mt-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 border-b-2 border-white/40 pb-2 text-white">
                        แคตตาล็อกผลิตภัณฑ์
                    </h2>
                    <div className="space-y-12">

                        {/* HELAMIN BRW150H */}
                        {hBRW150Hdata && (
                            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-[1.02] max-w-4xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">
                                    {hBRW150Hdata.bulletsItems[0].title?.th}
                                </h3>

                                <div className="flex flex-col md:flex-row items-center gap-6">

                                    {/* Images */}
                                    <div className="flex justify-center gap-4 md:gap-6 mb-4 md:mb-0">
                                        {hBRW150Hdata.bulletsItems
                                            .filter(item => item.image)
                                            .map((item, idx) => (
                                                <div key={idx} className="w-36 h-36 md:w-40 md:h-40 overflow-hidden rounded-lg shadow-sm flex-shrink-0">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title?.th}
                                                        width={160}
                                                        height={160}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 space-y-3 text-center md:text-left text-gray-800">
                                        <p className="text-base md:text-lg">{hBRW150Hdata.bulletsItems[0].description?.th}</p>
                                        <div className="pt-3 border-t border-gray-200">
                                            <p className="text-sm md:text-base text-gray-600">
                                                ค่า pH : <span className="font-semibold">{hBRW150Hdata.bulletsItems[1].description?.th.replace('ค่า pH: ', '')}</span>
                                            </p>
                                            <p className="text-sm md:text-base text-gray-600">
                                                ส่วนประกอบ : <span className="font-semibold">{hBRW150Hdata.bulletsItems[2].description?.th.replace('ส่วนประกอบ: ', '')}</span>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}



                        {/* ระบบอื่น ๆ สำหรับไอน้ำและน้ำร้อน */}
                        <div className="text-left">
                            <h3 className="text-xl md:text-2xl font-semibold mb-6 border-b border-white/30 pb-2 text-white">
                                ผลิตภัณฑ์อื่น ๆ สำหรับระบบไอน้ำและระบบน้ำร้อน
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                {h906Hdata && (
                                    <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                            {h906Hdata.bulletsItems[0].image ? (
                                                <Image src={h906Hdata.bulletsItems[0].image} alt={h906Hdata.bulletsItems[0].title?.th} width={150} height={150} />
                                            ) : <p>{h906Hdata.bulletsItems[0].title?.th}</p>}
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 text-black">{h906Hdata.bulletsItems[0].title?.th}</h4>
                                        <p className="text-sm text-gray-800 mb-2">{h906Hdata.bulletsItems[0].description?.th}</p>
                                        <div className="mt-auto pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600">ค่า pH : <span className="font-semibold">{h906Hdata.bulletsItems[1].description?.th.replace('ค่า pH: ', '')}</span></p>
                                            <p className="text-sm text-gray-600">ส่วนประกอบ : <span className="font-semibold">{h906Hdata.bulletsItems[2].description?.th.replace('ส่วนประกอบ: ', '')}</span></p>
                                        </div>
                                    </div>
                                )}

                                {h906HTURBdata && (
                                    <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                            {h906HTURBdata.bulletsItems[0].image ? (
                                                <Image src={h906HTURBdata.bulletsItems[0].image} alt={h906HTURBdata.bulletsItems[0].title?.th} width={150} height={150} />
                                            ) : <p>{h906HTURBdata.bulletsItems[0].title?.th}</p>}
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 text-black">{h906HTURBdata.bulletsItems[0].title?.th}</h4>
                                        <p className="text-sm text-gray-800 mb-2">{h906HTURBdata.bulletsItems[0].description?.th}</p>
                                        <div className="mt-auto pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600">ค่า pH : <span className="font-semibold">{h906HTURBdata.bulletsItems[1].description?.th.replace('ค่า pH: ', '')}</span></p>
                                            <p className="text-sm text-gray-600">ส่วนประกอบ : <span className="font-semibold">{h906HTURBdata.bulletsItems[2].description?.th.replace('ส่วนประกอบ: ', '')}</span></p>
                                        </div>
                                    </div>
                                )}

                                {hHALAQdata && (
                                    <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                            {hHALAQdata.bulletsItems[0].image ? (
                                                <Image src={hHALAQdata.bulletsItems[0].image} alt={hHALAQdata.bulletsItems[0].title?.th} width={150} height={150} />
                                            ) : <p>{hHALAQdata.bulletsItems[0].title?.th}</p>}
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 text-black">{hHALAQdata.bulletsItems[0].title?.th}</h4>
                                        <p className="text-sm text-gray-800 mb-2">{hHALAQdata.bulletsItems[0].description?.th}</p>
                                        <div className="mt-auto pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600">ค่า pH: <span className="font-semibold">{hHALAQdata.bulletsItems[1].description?.th.replace('ค่า pH: ', '')}</span></p>
                                            <p className="text-sm text-gray-600">ส่วนประกอบ: <span className="font-semibold">{hHALAQdata.bulletsItems[2].description?.th.replace('ส่วนประกอบ: ', '')}</span></p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                        {/* สำหรับระบบทำความร้อนของเขต */}
                        {hHS190Hdata && (
                            <div className="text-left">
                                <h3 className="text-xl md:text-2xl font-semibold mb-6 border-b border-white/30 pb-2 text-white">
                                    สำหรับระบบทำความร้อนของเขต
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                            {hHS190Hdata.bulletsItems[0].image ? (
                                                <Image src={hHS190Hdata.bulletsItems[0].image} alt={hHS190Hdata.bulletsItems[0].title?.th} width={150} height={150} />
                                            ) : <p>{hHS190Hdata.bulletsItems[0].title?.th}</p>}
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 text-black">{hHS190Hdata.bulletsItems[0].title?.th}</h4>
                                        <p className="text-sm text-gray-800 mb-2">{hHS190Hdata.bulletsItems[0].description?.th}</p>
                                        <div className="mt-auto pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600">ค่า pH : <span className="font-semibold">{hHS190Hdata.bulletsItems[1].description?.th.replace('ค่า pH: ', '')}</span></p>
                                            <p className="text-sm text-gray-600">ส่วนประกอบ : <span className="font-semibold">{hHS190Hdata.bulletsItems[2].description?.th.replace('ส่วนประกอบ: ', '')}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* สำหรับระบบระบายความร้อน */}
                        <div className="text-left">
                            <h3 className="text-xl md:text-2xl font-semibold mb-6 border-b border-white/30 pb-2 text-white">
                                สำหรับใช้ในระบบระบายความร้อน
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                {h9100MKdata && (
                                    <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                            {h9100MKdata.bulletsItems[0].image ? (
                                                <Image src={h9100MKdata.bulletsItems[0].image} alt={h9100MKdata.bulletsItems[0].title?.th} width={150} height={150} />
                                            ) : <p>{h9100MKdata.bulletsItems[0].title?.th}</p>}
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 text-black">{h9100MKdata.bulletsItems[0].title?.th}</h4>
                                        <p className="text-sm text-gray-800 mb-2">{h9100MKdata.bulletsItems[0].description?.th}</p>
                                        <div className="mt-auto pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600">ค่า pH : <span className="font-semibold">{h9100MKdata.bulletsItems[1].description?.th.replace('ค่า pH: ', '')}</span></p>
                                            <p className="text-sm text-gray-600">ส่วนประกอบ : <span className="font-semibold">{h9100MKdata.bulletsItems[2].description?.th.replace('ส่วนประกอบ: ', '')}</span></p>
                                        </div>
                                    </div>
                                )}

                                {h9800CTdata && (
                                    <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                            {h9800CTdata.bulletsItems[0].image ? (
                                                <Image src={h9800CTdata.bulletsItems[0].image} alt={h9800CTdata.bulletsItems[0].title?.th} width={150} height={150} />
                                            ) : <p>{h9800CTdata.bulletsItems[0].title?.th}</p>}
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 text-black">{h9800CTdata.bulletsItems[0].title?.th}</h4>
                                        <p className="text-sm text-gray-800 mb-2">{h9800CTdata.bulletsItems[0].description?.th}</p>
                                        <div className="mt-auto pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600">ค่า pH : <span className="font-semibold">{h9800CTdata.bulletsItems[1].description?.th.replace('ค่า pH: ', '')}</span></p>
                                            <p className="text-sm text-gray-600">ส่วนประกอบ : <span className="font-semibold">{h9800CTdata.bulletsItems[2].description?.th.replace('ส่วนประกอบ: ', '')}</span></p>
                                        </div>
                                    </div>
                                )}

                                {hRW47Hdata && (
                                    <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                        <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                            {hRW47Hdata.bulletsItems[0].image ? (
                                                <Image src={hRW47Hdata.bulletsItems[0].image} alt={hRW47Hdata.bulletsItems[0].title?.th} width={150} height={150} />
                                            ) : <p>{hRW47Hdata.bulletsItems[0].title?.th}</p>}
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 text-black">{hRW47Hdata.bulletsItems[0].title?.th}</h4>
                                        <p className="text-sm text-gray-800 mb-2">{hRW47Hdata.bulletsItems[0].description?.th}</p>
                                        <div className="mt-auto pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600">ค่า pH : <span className="font-semibold">{hRW47Hdata.bulletsItems[1].description?.th.replace('ค่า pH: ', '')}</span></p>
                                            <p className="text-sm text-gray-600">ส่วนประกอบ : <span className="font-semibold">{hRW47Hdata.bulletsItems[2].description?.th.replace('ส่วนประกอบ: ', '')}</span></p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
