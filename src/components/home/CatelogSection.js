'use client';

import React from 'react';
import Image from 'next/image';

export default function CatelogSection({ data }){
    return (
        <section className="relative bg-white flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
            {/* Product Catalog Section */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0085cd] to-[#33c2f6] z-0"></div>

            <div className="relative z-10 max-w-6xl w-full px-6 py-12">
                <div className="mt-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 border-b-2 border-white/40 pb-2 text-white">แคตตาล็อกผลิตภัณฑ์</h2>
                    <div className="space-y-12">
                        {/* HELAMIN BRW150H - Featured Section */}
                        <div className="text-left bg-white rounded-xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
                            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-black">HELAMIN® BRW150H</h3>
                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                {/* Image Container */}
                                <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-1/2">
                                    <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                        <p>Placeholder for image 1</p>
                                    </div>
                                    <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                        <p>Placeholder for image 2</p>
                                    </div>
                                </div>
                                {/* Details */}
                                <div className="space-y-4 text-left w-full md:w-1/2 text-gray-800">
                                    <p className="text-lg">สำหรับระบบไอน้ำและระบบน้ำร้อนที่น้ำป้อนเป็นน้ำดิบ หรือผ่านการบำบัดเล็กน้อย</p>
                                    <div className="pt-4 border-t border-gray-200">
                                        <p className="text-sm">ค่า pH: <span className="font-semibold">12</span></p>
                                        <p className="text-sm">ส่วนประกอบ: <span className="font-semibold">ส่วนผสมของฟิล์มโพลีเอมีน, เอมีนระเหยง่ายที่ทำให้เป็นด่าง, และสารช่วยกระจายตัวโพลีคาร์บอกซิเลทในสารละลายในน้ำ</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* หมวดหมู่: สำหรับระบบไอน้ำและระบบน้ำร้อน (other products) */}
                        <div className="text-left">
                            <h3 className="text-xl md:text-2xl font-semibold mb-6 border-b border-white/30 pb-2 text-white">ผลิตภัณฑ์อื่น ๆ สำหรับระบบไอน้ำและระบบน้ำร้อน</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* HELAMIN 906 H */}
                                <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                        <p>Placeholder for image</p>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-black">HELAMIN® 906 H</h4>
                                    <p className="text-sm text-gray-800 mb-2">สำหรับระบบไอน้ำและระบบน้ำร้อนที่น้ำป้อนเป็นน้ำอ่อน</p>
                                    <div className="mt-auto pt-4 border-t border-gray-200">
                                        <p className="text-sm text-gray-600">ค่า pH: <span className="font-semibold">12</span></p>
                                        <p className="text-sm text-gray-600">ส่วนประกอบ: <span className="font-semibold">ฟิล์มโพลีเอมีน, เอมีนระเหยง่าย, สารช่วยกระจายตัวโพลีคาร์บอกซิเลท</span></p>
                                    </div>
                                </div>

                                {/* HELAMIN 906 H TURB */}
                                <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                        <p>Placeholder for image</p>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-black">HELAMIN® 906 H TURB</h4>
                                    <p className="text-sm text-gray-800 mb-2">สำหรับระบบไอน้ำและระบบน้ำร้อนที่น้ำป้อนเป็นน้ำบริสุทธิ์ ไม่มีเกลือแร่ (รวมถึงกังหัน)</p>
                                    <div className="mt-auto pt-4 border-t border-gray-200">
                                        <p className="text-sm text-gray-600">ค่า pH: <span className="font-semibold">12</span></p>
                                        <p className="text-sm text-gray-600">ส่วนประกอบ: <span className="font-semibold">ฟิล์มโพลีเอมีน, เอมีนระเหยง่าย</span></p>
                                    </div>
                                </div>

                                {/* HELAMIN HAL AQ */}
                                <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                        <p>Placeholder for image</p>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-black">HELAMIN® HAL AQ</h4>
                                    <p className="text-sm text-gray-800 mb-2">สำหรับระบบไอน้ำและระบบน้ำร้อน (เหมาะสำหรับอุตสาหกรรมอาหาร)</p>
                                    <div className="mt-auto pt-4 border-t border-gray-200">
                                        <p className="text-sm text-gray-600">ค่า pH: <span className="font-semibold">≈ 12</span></p>
                                        <p className="text-sm text-gray-600">ส่วนประกอบ: <span className="font-semibold">สารดูดซับออกซิเจน, สารระเหยที่ทำให้เป็นด่าง, สารช่วยกระจายตัว</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* หมวดหมู่: สำหรับระบบทำความร้อนของเขต */}
                        <div className="text-left">
                            <h3 className="text-xl md:text-2xl font-semibold mb-6 border-b border-white/30 pb-2 text-white">สำหรับระบบทำความร้อนของเขต</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* HELAMIN HS 190H */}
                                <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                        <p>Placeholder for image</p>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-black">HELAMIN® HS 190H</h4>
                                    <p className="text-sm text-gray-800 mb-2">สำหรับระบบน้ำอุ่นและน้ำร้อนในเครือข่าย</p>
                                    <div className="mt-auto pt-4 border-t border-gray-200">
                                        <p className="text-sm text-gray-600">ค่า pH: <span className="font-semibold">12</span></p>
                                        <p className="text-sm text-gray-600">ส่วนประกอบ: <span className="font-semibold">ฟิล์มโพลีเอมีน, เอมีนระเหยง่าย, สารช่วยกระจายตัวโพลีคาร์บอกซิเลท</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* หมวดหมู่: สำหรับระบบระบายความร้อน */}
                        <div className="text-left">
                            <h3 className="text-xl md:text-2xl font-semibold mb-6 border-b border-white/30 pb-2 text-white">สำหรับใช้ในระบบระบายความร้อน</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* HELAMIN 9100 MK */}
                                <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                        <p>Placeholder for image</p>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-black">HELAMIN® 9100 MK</h4>
                                    <p className="text-sm text-gray-800 mb-2">สำหรับระบบระบายความร้อนแบบเปิด หอหล่อเย็น เครื่องเพิ่มความชื้นในอากาศ</p>
                                    <div className="mt-auto pt-4 border-t border-gray-200">
                                        <p className="text-sm text-gray-600">ค่า pH: <span className="font-semibold">≈ 3</span></p>
                                        <p className="text-sm text-gray-600">ส่วนประกอบ: <span className="font-semibold">โพลิอิเล็กโทรไลต์, สารช่วยกระจายตัว</span></p>
                                    </div>
                                </div>

                                {/* HELAMIN 9800 CT */}
                                <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                        <p>Placeholder for image</p>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-black">HELAMIN® 9800 CT</h4>
                                    <p className="text-sm text-gray-800 mb-2">สำหรับระบบระบายความร้อนแบบเปิด และหอหล่อเย็นที่ต้องมีการควบคุมจุลินทรีย์</p>
                                    <div className="mt-auto pt-4 border-t border-gray-200">
                                        <p className="text-sm text-gray-600">ค่า pH: <span className="font-semibold">≈ 7</span></p>
                                        <p className="text-sm text-gray-600">ส่วนประกอบ: <span className="font-semibold">โพลิอิเล็กโทรไลต์, สารช่วยกระจายตัว, ไบโอไซด์</span></p>
                                    </div>
                                </div>

                                {/* HELAMIN RW 47 H */}
                                <div className="bg-white/95 rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                                        <p>Placeholder for image</p>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-black">HELAMIN® RW 47 H</h4>
                                    <p className="text-sm text-gray-800 mb-2">สำหรับระบบระบายความร้อนแบบปิด</p>
                                    <div className="mt-auto pt-4 border-t border-gray-200">
                                        <p className="text-sm text-gray-600">ค่า pH: <span className="font-semibold">≈ 12</span></p>
                                        <p className="text-sm text-gray-600">ส่วนประกอบ: <span className="font-semibold">ฟิล์มโพลีเอมีน, เอมีนระเหยง่าย, สารช่วยกระจายตัวโพลีคาร์บอกซิเลท</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}