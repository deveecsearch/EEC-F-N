'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { RefreshCcw, Eye, ExternalLink, TrendingUp } from 'lucide-react';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function VisitorCounter() {
    const [count, setCount] = useState(0);
    const hasIncremented = useRef(false);

    useEffect(() => {
        if (!hasIncremented.current && typeof window !== 'undefined') {
            const currentCount = parseInt(localStorage.getItem('visitorCount'), 10) || 0;
            const newCount = currentCount + 1;
            setCount(newCount);
            localStorage.setItem('visitorCount', newCount);
            hasIncremented.current = true;
        }
    }, []);

    const refreshCount = () => {
        if (typeof window !== 'undefined') {
            const currentCount = parseInt(localStorage.getItem('visitorCount'), 10) || 0;
            setCount(currentCount);
        }
    };

    const lineVariants = {
        animate: {
            scaleX: [0.7, 1.2, 0.7],
            opacity: [0.5, 1, 0.5],
            transition: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
        },
    };

    const floatingVariants = {
        animate: (customDelay = 0) => ({
            y: [-15, 15, -15],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
            transition: { 
                duration: 4, 
                ease: "easeInOut", 
                repeat: Infinity, 
                delay: customDelay 
            }
        })
    };

    const counterAnimation = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.8
            }
        }
    };

    const logoAnimation = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: 0.3
            }
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden py-16 md:py-24">

            {/* Animated top line */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent z-30 shadow-lg"
                variants={lineVariants}
                initial={false}
                animate="animate"
            />

            {/* Enhanced floating shapes */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-24 h-24 rounded-2xl rotate-12 opacity-60"
                    style={{ background: 'linear-gradient(135deg, rgba(250,204,27,0.3), rgba(251,208,30,0.2))' }}
                    variants={floatingVariants}
                    animate="animate"
                    custom={0}
                />
                <motion.div
                    className="absolute top-32 right-16 w-16 h-16 rounded-full opacity-40"
                    style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(147,197,253,0.15))' }}
                    variants={floatingVariants}
                    animate="animate"
                    custom={1.5}
                />
                <motion.div
                    className="absolute bottom-32 left-20 w-20 h-20 rounded-lg rotate-45 opacity-50"
                    style={{ background: 'linear-gradient(135deg, rgba(250,204,27,0.25), rgba(250,201,24,0.2))' }}
                    variants={floatingVariants}
                    animate="animate"
                    custom={2}
                />
                <motion.div
                    className="absolute bottom-20 right-32 w-28 h-28 rounded-3xl -rotate-12 opacity-30"
                    style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(165,180,252,0.1))' }}
                    variants={floatingVariants}
                    animate="animate"
                    custom={0.8}
                />
            </div>

            {/* Main container */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 w-full max-w-6xl mx-auto px-6">
                
                {/* Visitor Count Card */}
                <motion.div
                    className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-2xl p-8 lg:p-10 text-white shadow-2xl backdrop-blur-md border border-white/20 w-full lg:w-auto lg:min-w-[420px] relative overflow-hidden"
                    variants={counterAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full blur-2xl" />
                    
                    <div className="relative z-10 flex flex-col items-center justify-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                                <Eye className="w-6 h-6 text-white" /> 
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                                    จำนวนผู้เยี่ยมชม
                                </h3>
                                <p className="text-sm text-white/70 flex items-center gap-1">
                                    <TrendingUp className="w-4 h-4" />
                                    Visitor Counter
                                </p>
                            </div>
                        </div>
                        
                        <p className="text-base lg:text-lg text-white/90 text-center leading-relaxed">
                            ขอบคุณที่แวะเข้ามาเยี่ยมชมเว็บไซต์ของเรา
                        </p>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full border border-white/20">
                            <div className="flex items-center justify-center gap-4">
                                <motion.span 
                                    className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent"
                                    key={count}
                                    initial={{ scale: 1.2, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {count.toLocaleString()}
                                </motion.span>
                                <motion.button 
                                    onClick={refreshCount} 
                                    className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 180 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="รีเฟรชจำนวนผู้เยี่ยมชม"
                                >
                                    <RefreshCcw className="w-5 h-5" />
                                </motion.button>
                            </div>
                            <p className="text-center text-white/60 text-sm mt-2">Total Visitors</p>
                        </div>
                    </div>
                </motion.div>

                {/* HELAMIN Logo Card */}
                <motion.div
                    className="w-full lg:w-auto lg:min-w-[380px]"
                    variants={logoAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    <Link
                        href="https://www.helamin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        <motion.div 
                            className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 lg:p-10 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-full max-w-[280px] mb-6">
                                    <Image
                                        src="/image/logo-helamin-rectangulaire-complexe-1.png"
                                        alt="HELAMIN Logo"
                                        width={280}
                                        height={90}
                                        className="object-contain w-full h-auto filter group-hover:brightness-110 transition-all duration-300"
                                    />
                                </div>
                                
                                <div className="flex items-center gap-2 text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
                                    <span className="text-lg font-semibold">www.helamin.com</span>
                                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                                
                                <p className="text-sm text-gray-500 mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Click to visit our website
                                </p>
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}