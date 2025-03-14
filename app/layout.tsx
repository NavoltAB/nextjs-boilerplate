import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ChatBubble from "./Components/ChatBubble";
import { Analytics } from "@vercel/analytics/next";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navolt AB",
  description: "Marinelektronik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${openSans.className} relative flex flex-col justify-between h-full`}
      >
        <div className="mb-[112px]">
        <Navbar />
        {children}
        <ChatBubble />
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
