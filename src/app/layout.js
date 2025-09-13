import { Geist, Geist_Mono, Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

const baseUrl = "https://www.fntechno.co.th";
const ogImage = "https://www.fntechno.co.th/image/mata-image-fn.jpg";

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

  return {
    metadataBase: new URL(baseUrl),
    title: "F&N Techno Co., Ltd.",
    description: "บริษัท เอฟแอนด์เอ็น เทคโน จำกัด",
    icons: { icon: "/image/Logo_FN.png" },
    openGraph: {
      title: "F&N Techno Co., Ltd.",
      description: "บริษัท เอฟแอนด์เอ็น เทคโน จำกัด",
      url: baseUrl,
      siteName: "F&N Techno Co., Ltd.",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "F&N Techno Co., Ltd." }],
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "F&N Techno Co., Ltd.",
      description: "บริษัท เอฟแอนด์เอ็น เทคโน จำกัด",
      images: [ogImage],
    },
    other: {
      "og:image": ogImage,
      "og:image:secure_url": ogImage,
      "og:image:width": "1200",
      "og:image:height": "630",
      "twitter:image": ogImage,
    },
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* 🔒 Force LINE/FB/Twitter to use this image */}
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />

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
