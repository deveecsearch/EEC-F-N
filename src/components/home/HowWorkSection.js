import React from 'react';

export default function HowWorkSection({ data }) {
    const mainTitle = "หลักการทำงานของ HELAMIN®";
    const mainTitle2 = "HELAMIN® กับการทำความสะอาดออนไลน์";

    // ✅ ดึง URL ภาพจาก galleryItems ของ data
    const firstImage = data?.howworkimagedata?.galleryItems?.[0]?.image;

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">

            {/* Modern background effects */}
            <div className="absolute inset-0 z-0">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-blue-50/40 to-indigo-100/30" />
 
                {/* Floating geometric shapes with golden yellow tones */}
                <div
                    className="absolute top-20 left-10 w-20 h-20 rounded-2xl rotate-12 animate-pulse"
                    style={{ 
                        background: 'linear-gradient(45deg, rgba(250, 204, 27, 0.2), rgba(251, 208, 30, 0.2))',
                        animation: 'float1 4s ease-in-out infinite'
                    }}
                />
                <div
                    className="absolute top-40 right-16 w-16 h-16 rounded-full animate-pulse"
                    style={{ 
                        background: 'linear-gradient(45deg, rgba(250, 204, 27, 0.15), rgba(251, 207, 29, 0.15))',
                        animation: 'float2 4s ease-in-out infinite 1s'
                    }}
                />
                <div
                    className="absolute bottom-32 left-20 w-12 h-12 rounded-lg rotate-45 animate-pulse"
                    style={{ 
                        background: 'linear-gradient(45deg, rgba(250, 204, 27, 0.25), rgba(250, 201, 24, 0.25))',
                        animation: 'float3 4s ease-in-out infinite 2s'
                    }}
                />
                <div
                    className="absolute bottom-20 right-32 w-24 h-24 rounded-3xl -rotate-12 animate-pulse"
                    style={{ 
                        background: 'linear-gradient(45deg, rgba(250, 204, 27, 0.1), rgba(251, 205, 28, 0.1))',
                        animation: 'float4 4s ease-in-out infinite 0.5s'
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/4 w-14 h-14 rounded-xl rotate-30 animate-pulse"
                    style={{ 
                        background: 'linear-gradient(45deg, rgba(250, 204, 27, 0.2), rgba(250, 202, 25, 0.2))',
                        animation: 'float5 4s ease-in-out infinite 1.5s'
                    }}
                />
                <div
                    className="absolute top-1/3 right-1/4 w-18 h-18 rounded-2xl -rotate-45 animate-pulse"
                    style={{ 
                        background: 'linear-gradient(45deg, rgba(250, 204, 27, 0.15), rgba(250, 206, 26, 0.15))',
                        animation: 'float6 4s ease-in-out infinite 3s'
                    }}
                />
            </div>

            {/* Animated top line */}
            <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg animate-pulse"
                style={{ animation: 'lineAnimate 2.5s ease-in-out infinite' }}
            />

            <div className="relative z-30 flex flex-col items-center w-full">
                {/* กรอบภาพใหญ่ */}
                <div 
                    className="inline-block bg-gradient-to-br from-white/70 via-blue-50/50 to-indigo-50/30 backdrop-blur-xl border-2 border-blue-200/40 rounded-3xl mb-12 overflow-hidden w-[80%] md:w-[900px] shadow-2xl shadow-blue-500/15 transition-all duration-300 hover:scale-102 hover:shadow-3xl hover:shadow-blue-500/25"
                >
                    {firstImage ? (
                        <img
                            src={firstImage}
                            alt="Diagram illustrating the working principle of HELAMIN®"
                            className="w-full h-auto rounded-2xl"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    ) : (
                        <span className="text-gray-500 italic p-8 block text-center">ไม่พบภาพ</span>
                    )}
                </div>

                {/* การ์ดสองใบ */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                    {/* การ์ดแรก */}
                    <div className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-8 rounded-2xl border border-blue-200/40 shadow-2xl shadow-blue-500/15 transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60 hover:-translate-y-2">
                        <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg mb-2 text-center">
                            {mainTitle}
                        </h2>

                        {/* เส้นคั่น */}
                        <div className="w-5 sm:w-40 md:w-48 lg:w-56 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4 mb-6 rounded-full shadow-sm" />

                        <div className="space-y-4">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                                {data?.howworkdata?.bulletsItems?.[1]?.description?.th}
                            </p>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                                {data?.howworkdata?.bulletsItems?.[2]?.description?.th}
                            </p>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                                {data?.howworkdata?.bulletsItems?.[3]?.description?.th}
                            </p>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                                {data?.howworkdata?.bulletsItems?.[4]?.description?.th}
                            </p>
                        </div>
                    </div>

                    {/* การ์ดสอง */}
                    <div className="bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-50/40 backdrop-blur-xl p-8 rounded-2xl border border-blue-200/40 shadow-2xl shadow-blue-500/15 transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/25 hover:border-blue-300/60 self-start hover:-translate-y-2">
                        <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg mb-2 text-center">
                            {mainTitle2}
                        </h2>

                          {/* เส้นคั่น */}
                        <div className="w-55 sm:w-40 md:w-48 lg:w-56 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4 mb-6 rounded-full shadow-sm" />

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                            {data?.howworkdata?.bulletsItems?.[0]?.description?.th}
                        </p><br></br>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                            {data?.howworkdata?.bulletsItems?.[5]?.description?.th}
                        </p>
                    </div>
                </div>
            </div>

            {/* CSS Animations for floating elements */}
            <style jsx>{`
                @keyframes float1 {
                    0%, 100% { transform: translateY(-10px) rotate(12deg); }
                    50% { transform: translateY(10px) rotate(17deg); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translateY(-8px) rotate(0deg); }
                    50% { transform: translateY(12px) rotate(5deg); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translateY(-12px) rotate(45deg); }
                    50% { transform: translateY(8px) rotate(40deg); }
                }
                @keyframes float4 {
                    0%, 100% { transform: translateY(-6px) rotate(-12deg); }
                    50% { transform: translateY(14px) rotate(-17deg); }
                }
                @keyframes float5 {
                    0%, 100% { transform: translateY(-10px) rotate(30deg); }
                    50% { transform: translateY(10px) rotate(35deg); }
                }
                @keyframes float6 {
                    0%, 100% { transform: translateY(-8px) rotate(-45deg); }
                    50% { transform: translateY(12px) rotate(-40deg); }
                }
                @keyframes lineAnimate {
                    0%, 100% { transform: translateX(-50%) scaleX(0.7); opacity: 0.5; }
                    50% { transform: translateX(-50%) scaleX(1.2); opacity: 1; }
                }
                .hover\\:scale-102:hover {
                    transform: scale(1.02);
                }
            `}</style>
        </section>
    );
}