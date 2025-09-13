import { Geist, Geist_Mono, Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

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
  weight: ["400", "500", "700", "800"],
});

// Using next generateMetadata nakub
export async function generateMetadata() {
  const baseUrl = "https://www.fntechno.co.th";

  return {
    metadataBase: new URL(baseUrl),
    title: "F&N Techno Co., Ltd.",
    description: "บริษัท เอฟแอนด์เอ็น เทคโน จำกัด",
    icons: {
      icon: "/image/Logo_FN.png",
    },
    openGraph: {
      title: "F&N Techno Co., Ltd.",
      description: "บริษัท เอฟแอนด์เอ็น เทคโน จำกัด",
      url: baseUrl,
      siteName: "F&N Techno Co., Ltd.",
      images: [
        {
          url: "https://www.fntechno.co.th/image/New-Logo-F-N2.jpg",
          width: 1200,
          height: 630,
          alt: "F&N Techno Co., Ltd.",
        },
      ],
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "F&N Techno Co., Ltd.",
      description: "บริษัท เอฟแอนด์เอ็น เทคโน จำกัด",
      images: ["https://www.fntechno.co.th/image/New-Logo-F-N2.jpg"],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        {/* Google tag (gtag.js)  */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y73WDQ4G86"
        ></Script>
        <Script id="google-analytics">
          {`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Y73WDQ4G86');
    `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${prompt.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
