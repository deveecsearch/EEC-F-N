'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { RefreshCcw, Eye, ExternalLink, TrendingUp } from 'lucide-react';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function VisitorCounter() {
    const [count, setCount] = useState(0);
    const hasFetched = useRef(false); // กัน fetch ซ้ำตอน mount

    // ดึง count ตอน mount (ครั้งแรก)
    const fetchVisitorCountOnce = async () => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        try {
            const res = await fetch("https://eec-cms.vercel.app/api/track-visitor?id=f-n-techno-co-ltd-mf6p1vr5");
            const data = await res.json();
            setCount(data.count || data.views || 0);
        } catch (err) {
            console.error("ดึงข้อมูลล้มเหลว:", err);
        }
    };

    // ดึง count ใหม่ (ใช้กับปุ่ม Refresh)
    const refreshCount = async () => {
        try {
            const res = await fetch("https://eec-cms.vercel.app/api/track-visitor?id=f-n-techno-co-ltd-mf6p1vr5");
            const data = await res.json();
            setCount(data.count || data.views || 0);
        } catch (err) {
            console.error("รีเฟรชล้มเหลว:", err);
        }
    };

    useEffect(() => {
        fetchVisitorCountOnce();
    }, []);

    // Animation variants
    const lineVariants = {
        animate: {
            scaleX: [0.7, 1, 0.7],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const floatingVariants = {
        animate: custom => ({
            y: [0, 10, 0],
            x: [0, 5 * custom, 0],
            rotate: [0, 5, -5, 0],
            transition: { duration: 4 + custom, repeat: Infinity, ease: "easeInOut" }
        })
    };

    const counterCardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const logoCardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-12">

            {/* Animated top line */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
                variants={lineVariants}
                initial={false}
                animate="animate"
            />

            {/* Floating decorative shapes */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    className="absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 rounded-2xl rotate-12"
                    style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.3), rgba(251,208,30,0.25))' }}
                    variants={floatingVariants}
                    animate="animate"
                    custom={0}
                />
                <motion.div
                    className="absolute top-40 right-4 sm:right-16 w-12 sm:w-16 h-12 sm:h-16 rounded-full"
                    style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.25), rgba(251,207,29,0.2))' }}
                    variants={floatingVariants}
                    animate="animate"
                    custom={1}
                />
                <motion.div
                    className="absolute bottom-32 left-4 sm:left-20 w-10 sm:w-14 h-10 sm:h-14 rounded-lg rotate-45"
                    style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.35), rgba(250,201,24,0.3))' }}
                    variants={floatingVariants}
                    animate="animate"
                    custom={2}
                />
                <motion.div
                    className="absolute bottom-20 right-4 sm:right-32 w-18 sm:w-24 h-18 sm:h-24 rounded-3xl -rotate-12"
                    style={{ background: 'linear-gradient(45deg, rgba(250,204,27,0.2), rgba(251,205,28,0.15))' }}
                    variants={floatingVariants}
                    animate="animate"
                    custom={0.5}
                />
            </div>

            {/* Main container */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-[1200px]">

                {/* Cards container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-2 sm:px-0">

                    {/* Visitor Counter Card */}
                    <motion.div
                        className="relative w-full rounded-2xl overflow-hidden border border-white/30 shadow-2xl backdrop-blur-md"
                        variants={counterCardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="absolute inset-0 bg-blue-900/90 backdrop-blur-sm" />
                        <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />

                        <div className="relative z-10 p-6 lg:p-8">
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex items-center gap-3 w-full justify-center">
                                    <motion.div
                                        className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Eye className="w-7 h-7 text-blue-900" />
                                    </motion.div>
                                    <div className="text-center">
                                        <h2 className="text-xl lg:text-2xl font-bold text-white">
                                            จำนวนผู้เยี่ยมชม
                                        </h2>
                                        <p className="text-xs text-white/70 flex items-center gap-1 justify-center">
                                            <TrendingUp className="w-3 h-3 text-yellow-400" />
                                            Visitor Counter
                                        </p>
                                    </div>
                                </div>

                                <p className="text-sm lg:text-base text-white/90 text-center leading-relaxed">
                                    ขอบคุณที่แวะเข้ามาเยี่ยมชมเว็บไซต์ของเรา
                                </p>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full border border-white/20 relative overflow-hidden">
                                    <div className="relative flex items-center justify-center gap-4">
                                        <motion.span
                                            className="text-3xl lg:text-5xl font-extrabold text-yellow-400"
                                            key={count}
                                            initial={{ scale: 1.2, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5, type: "spring" }}
                                        >
                                            {count.toLocaleString()}
                                        </motion.span>
                                        <motion.button
                                            onClick={refreshCount}
                                            className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border border-white/20"
                                            whileHover={{ scale: 1.1, rotate: 180 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label="รีเฟรชจำนวนผู้เยี่ยมชม"
                                        >
                                            <RefreshCcw className="w-6 h-6" />
                                        </motion.button>
                                    </div>
                                    <p className="text-center text-white/60 text-xs mt-3">Total Visitors</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Logo and Link Card */}
                    <motion.div
                        className="relative w-full transition-all duration-300"
                        variants={logoCardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Link
                            href="https://www.helamin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block w-full h-full"
                        >
                            <motion.div
                                className="relative w-full h-full p-6 lg:p-8 transition-all duration-300 min-h-[280px] flex flex-col justify-center"
                                whileHover={{ scale: 1.02, y: -2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                    <div className="w-full max-w-[200px] mb-4 filter drop-shadow-lg">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src="/image/logo-helamin-rectangulaire-complexe-1.png"
                                                alt="HELAMIN Logo"
                                                width={200}
                                                height={60}
                                                className="object-contain w-full h-auto"
                                            />
                                        </motion.div>
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-900 transition-colors duration-300 mb-2">
                                        <span className="text-base font-semibold">www.helamin.com</span>
                                        <motion.div
                                            initial={{ x: 0, opacity: 0.7 }}
                                            whileHover={{ x: 5, opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </motion.div>
                                    </div>
                                    <motion.p
                                        className="text-xs text-blue-800 text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ y: 10 }}
                                        whileHover={{ y: 0 }}
                                    >
                                        คลิกเพื่อเยี่ยมชมเว็บไซต์ของเรา<br />
                                        Click to visit our website
                                    </motion.p>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
