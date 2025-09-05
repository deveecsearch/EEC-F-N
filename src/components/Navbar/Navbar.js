'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Image from "next/image";
import navItemsMap from "./navItemsMap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = navItemsMap.th;

  return (
    <nav className="sticky top-0 z-50 font-prompt">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* โลโก้ */}
            <Link href={`/`} title="Home Page" className="inline-flex items-center">
              <Image
                src={"/logo_FN.png"}
                alt="FN"
                width={48}
                height={48}
                className="rounded-full object-cover"
                loading="lazy"
              />
            </Link>

            {/* เมนูเดสก์ท็อป */}
            <div className="hidden lg:flex items-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  className={`relative px-3 py-2 text-[15px] font-medium text-gray-800 transition
                              hover:text-[#fbab18] after:block after:h-[2px] after:w-0 after:bg-[#fbab18] after:mt-1 after:transition-all hover:after:w-full`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* ปุ่มเมนูมือถือ */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden text-gray-800 hover:text-[#fbab18] hover:bg-gray-100 rounded-md p-2"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* เมนูมือถือ */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="mt-2 pb-4 flex flex-col bg-white px-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  onClick={() => setIsOpen(false)}
                  className={`relative px-3 py-2 text-gray-800 transition
                              hover:text-[#fbab18] after:block after:h-[2px] after:w-0 after:bg-[#fbab18] after:mt-1 after:transition-all hover:after:w-full`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
