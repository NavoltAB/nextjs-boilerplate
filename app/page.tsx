import Image from "next/image";
import HeroImg from "../public/img/pexels-flodahm-2420412.jpg"
import Link from "next/link";
import { Mail } from 'lucide-react';
import { Phone } from "lucide-react";


export default function Home() {
  return (
    <section className="relative w-full h-screen">
      {/* Image as background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImg}
          alt="landing-image"
          layout="fill" // Ensures the image covers the entire section
          objectFit="cover" // Ensures the image maintains its aspect ratio while covering the section
          quality={100} // Optional: to ensure the image quality is high
        />
      </div>

      {/* Text overlay */}
      <div className="relative gap-8 z-10 flex items-center h-full flex-col justify-center ">
        <div className="flex flex-col items-center">
     <h1 className="lg:text-[84px] leading-[64px] text-white text-[64px] lg:leading-[84px] antialiased font-semibold uppercase">Navolt</h1>
     <h3 className="text-[18px] antialiased text-white uppercase">Marinelektronik</h3>
     </div>
      <p className="w-3/4 antialiased lg:text-[16px] text-[14px] text-center">Vi hjälper dig med felsökning, uppgradering och nyinstallation av elektronik i din fritidsbåt, husbil eller campervan. 
        </p>
      <div>
<h4 className="uppercase text-white text-center font-semibold mb-2 mt-10 text-[24px] z-10">Kontakt</h4>
<div className="flex flex-col items-center gap-2">
<p className="flex items-center gap-2"> <Phone />073 025 45 55</p>
<Link href="mailto:info@navolt.se" className="flex items-center gap-2"> <Mail height={30} width={30} stroke="white"/>info@navolt.se</Link>
</div>
      </div>
      <div className="[&>p]:text-xs text-white/70 absolute bottom-3 right-3 [&>p]:antialiased ">
        <p>Navolt AB</p>
        <p>Org. nummer: 559475-1876</p>
        <p>Postadress: Kapellevägen 15B</p>
        <p>451 44 Uddevalla</p>
        <p>Bolaget är godkänt för F-skatt</p>
      </div>
      </div>
    </section>
  );
}