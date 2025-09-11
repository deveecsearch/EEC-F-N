import { Geist, Geist_Mono, Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CookieConsent from "@/components/CookieConsent"; // เพิ่มบรรทัดนี้

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"]
});

export const metadata = {
  title: "F&N Techno Co., Ltd. | ผู้นำเข้าน้ำยา Helamin BRW150H และฟิล์มโพลีเอมีน",
  description: "บริษัท เอฟแอนด์เอ็น เทคโน จำกัด (F&N Techno Co., Ltd.) ผู้นำเข้าน้ำยา Helamin BRW150H และสารเคมีบำบัดน้ำจากสวิตเซอร์แลนด์และฝรั่งเศส พร้อมเทคโนโลยีฟิล์มโพลีเอมีน ปลอดภัยต่อสิ่งแวดล้อม เหมาะสำหรับระบบอุตสาหกรรม",
  icons: {
    icon: "/image/Logo_FN.png",        
    apple: "/image/Logo_FN.png",       
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${prompt.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
