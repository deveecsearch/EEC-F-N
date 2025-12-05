'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection({ text }){
    return (
        <section className="relative bg-[#0081ca] text-white flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
            {/* About Us */}
            
             <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-12"></div>
                <div className="max-w-4xl mx-auto text-left text-white space-y-2 mt-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 border-b-2 border-white/40 pb-2">เกี่ยวกับเรา</h2>
                    <p>
                        HELAMIN® Technology Holding Group เป็นผู้คิดค้นและพัฒนาผลิตภัณฑ์บำบัดน้ำแบบ “สีเขียว” สำหรับวงจรน้ำ/ไอน้ำในระบบบอยเลอร์ รวมถึงระบบหมุนเวียนน้ำเย็น ผลิตภัณฑ์เหล่านี้ถูกจัดจำหน่ายและจดสิทธิบัตรภายใต้แบรนด์ HELAMIN®
                    </p>
                    <p>
                        การดำเนินงานเชิงพาณิชย์ของ HELAMIN® เริ่มขึ้นในปี 1986 การใช้งาน HELAMIN® ขยายไปยังโรงงานหลายแห่งในหลายประเทศทั่วโลก
                    </p>
                    <p>
                        HELAMIN® ได้รับคำแนะนำจากผู้ผลิตบอยเลอร์หลายราย เช่น Standardkessel GmbH, Baumgarte Boiler Systems GmbH เป็นต้น
                    </p>
                    <p>
                        HELAMIN® ถูกใช้งานในทุกภูมิภาคทั่วโลก เช่น ยุโรป ตะวันออกกลางและอ่าวเปอร์เซีย แอฟริกา เอเชียตะวันออกไกล และอเมริกา
                    </p>
                </div>

        </section>
    );
}