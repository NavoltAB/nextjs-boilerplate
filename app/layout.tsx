import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ChatBubble from "./Components/ChatBubble";
import { Analytics } from "@vercel/analytics/next";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://navolt.se"),
  title: {
    default: "Marinelektronik & båtel i Göteborg | Navolt AB",
    template: "%s | Navolt",
  },
  description:
    "Vi löser elen ombord. Felsökning, uppgradering och nyinstallation av elektronik i din fritidsbåt, husbil eller campervan.",
  openGraph: {
    title: "Navolt AB – Marinelektronik",
    description:
      "Vi löser elen ombord. Felsökning, uppgradering och nyinstallation av elektronik i din fritidsbåt, husbil eller campervan.",
    url: "https://navolt.se",
    siteName: "Navolt AB",
    locale: "sv_SE",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: "Navolt AB",
  description:
    "Marinelektronik i Göteborg/Öckerö – felsökning, uppgradering och nyinstallation av el och elektronik i båt, husbil och campervan.",
  url: "https://navolt.se",
  email: "info@navolt.se",
  telephone: "+46730254555",
  vatID: "559475-1876",
  image: "https://navolt.se/img/hero-img.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tjolmenvägen",
    postalCode: "475 50",
    addressLocality: "Hälsö",
    addressRegion: "Västra Götaland",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 57.7320082,
    longitude: 11.6555968,
  },
  areaServed: [
    "Göteborg",
    "Öckerö",
    "Hälsö",
    "Hönö",
    "Marstrand",
    "Västkusten",
  ],
  sameAs: [
    "https://www.facebook.com/NavoltAB",
    "https://www.instagram.com/navolt.ab",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="sv">
      <body
        className={`${openSans.className} relative flex flex-col justify-between h-full`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <div className="mb-[112px]">
        <Navbar />
        {children}
        <ChatBubble />
        </div>
        <Footer />
        <Analytics />
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
