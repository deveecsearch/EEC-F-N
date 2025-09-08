'use client';
import { useState, useEffect } from 'react';
import { Cookie, Check, X, Settings, Shield, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const STORAGE_KEY = 'cookie_consent';
    const VALUE_ACCEPT = 'accepted';
    const VALUE_DENY = 'denied';

    useEffect(() => {
        const consent = localStorage.getItem(STORAGE_KEY);

        if (!consent) setShowBanner(true);
        else if (consent === VALUE_ACCEPT) enableOptionalCookies();

        setIsLoaded(true);

        const handleEscape = (e) => {
            if (e.key === 'Escape' && showBanner) setShowBanner(false);
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [showBanner]);

    const enableOptionalCookies = () => {
        console.log('Optional cookies enabled');
    };

    const handleAccept = () => {
        localStorage.setItem(STORAGE_KEY, VALUE_ACCEPT);
        localStorage.setItem(STORAGE_KEY + '_ts', String(Date.now()));
        enableOptionalCookies();
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem(STORAGE_KEY, VALUE_DENY);
        localStorage.setItem(STORAGE_KEY + '_ts', String(Date.now()));
        setShowBanner(false);
    };

    const handleManage = () => {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_KEY + '_ts');
        setShowBanner(true);
    };

    const bannerVariants = {
        hidden: { y: 120, opacity: 0, transition: { duration: 0.3 } },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, type: 'spring', stiffness: 100, damping: 20 } },
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95, transition: { duration: 0.1 } },
    };

    if (!isLoaded) return null;

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    className="fixed inset-x-0 bottom-4 z-50 px-4 sm:px-6 lg:px-8 max-h-[90vh] overflow-y-auto"
                    variants={bannerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    role="dialog"
                    aria-live="polite"
                    aria-label="การใช้คุกกี้ (Cookie Consent)"
                >
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-blue-900/80 to-transparent backdrop-blur-lg pointer-events-none" />

                    {/* Content container */}
                    <div className="relative max-w-7xl mx-auto py-4 sm:py-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                            <div className="px-4 py-6 sm:px-6 sm:py-8">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                        <Cookie className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                            🍪 การใช้คุกกี้ (Cookie Consent)   
                                        </h3>
                                        <div className="text-white/90 text-sm sm:text-base leading-relaxed space-y-2">
                                            <p>
                                                <strong className="text-yellow-300">บริษัท เอฟแอนด์เอ็น เทคโน จำกัด</strong>{' '}
                                                เลขทะเบียนนิติบุคคล: <strong className="text-yellow-300">0205566010863</strong>{' '}
                                                (นำเข้าล้างตะกรัน) ชลบุรี
                                            </p>
                                            <p>
                                                เราใช้คุกกี้เพื่อให้เว็บไซต์ของเราทำงานได้อย่างมีประสิทธิภาพ จัดเก็บการตั้งค่า พัฒนาประสบการณ์การใช้งาน และนำเสนอข้อมูลหรือโฆษณาที่ตรงกับความสนใจของคุณ
                                            </p>
                                            <p>
                                                คุกกี้ที่จำเป็นจะถูกบันทึกไว้ในเบราว์เซอร์ของคุณเสมอ เพื่อให้ระบบทำงานได้ตามปกติ โดย{' '}
                                                <strong className="text-green-300">ไม่เก็บข้อมูลที่สามารถระบุตัวบุคคลได้</strong>
                                                ส่วนคุกกี้อื่น ๆ เช่น คุกกี้เพื่อการวิเคราะห์และการตลาด จะถูกใช้งานก็ต่อเมื่อคุณให้ความยินยอมเท่านั้น คุณสามารถเลือก “ยอมรับ” หรือ “ไม่ยอมรับ” ได้ตามต้องการ ทั้งนี้ การปิดใช้งานคุกกี้บางประเภทอาจส่งผลต่อประสบการณ์การใช้งานเว็บไซต์ของคุณ
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 order-2 sm:order-1">
                                        <motion.button
                                            onClick={handleAccept}
                                            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center gap-2 min-w-[140px] justify-center"
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <Check className="w-4 h-4" /> ยอมรับ
                                        </motion.button>

                                        <motion.button
                                            onClick={handleDecline}
                                            className="bg-white/20 hover:bg-white/30 border-2 border-white/60 text-black/90 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 min-w-[140px] justify-center shadow-md"
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <X className="w-4 h-4" /> ไม่ยอมรับ
                                        </motion.button>
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-4 text-sm text-white/80 order-1 sm:order-2">
                                        <button
                                            onClick={handleManage}
                                            className="hover:text-yellow-300 transition-colors flex items-center gap-1"
                                        >
                                            <Settings className="w-4 h-4" /> การตั้งค่าคุกกี้
                                        </button>
                                        <Link
                                            href="/privacy"
                                            className="hover:text-blue-300 transition-colors flex items-center gap-1"
                                        >
                                            <Shield className="w-4 h-4" /> นโยบายความเป็นส่วนตัว
                                        </Link>
                                        <Link
                                            href="/cookie-policy"
                                            className="hover:text-blue-300 transition-colors flex items-center gap-1"
                                        >
                                            <FileText className="w-4 h-4" /> นโยบายคุกกี้
                                        </Link>
                                    </div>
                                </div>
                                {/* Close hint */}
                                <div className="mt-2 py-2 px-4 sm:px-6 border-t border-white/20 text-center">
                                    <p className="text-white/60 text-xs">
                                        กด <kbd className="px-2 py-1 bg-white/20 rounded text-white/80">Esc</kbd> เพื่อปิดชั่วคราว
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
