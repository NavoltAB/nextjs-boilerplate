"use client";

import Image from "next/image";
import HeroImg from "../public/img/hero-img.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Services from "./Components/Services";

export default function Home() {
  return (
    <section className="w-full h-full ">
      {/* Image as background */}
      <div className="md:h-[calc(100vh-99px)] h-[calc(100vh-70px)]">
        <div className="absolute inset-0 z-0">
          <Image
            src={HeroImg}
            className="object-cover brightness-75 max-h-[100vh] object-left-bottom md:scale-x-neg-1" // No scale on smaller screens
            alt="landing-image"
            fill
            priority
          />
        </div>

        {/* Text overlay */}
        <div className="relative [&>*]:text-white gap-4 z-10 max-h-[calc(100vh-99px)]  flex items-center md:items-start px-10 h-full flex-col justify-center ">
          <h1 className="text-[36px] md:text-[56px] text-center antialiased leading-[36px] md:leading-[56px] uppercase font-semibold">
            Vi löser elen ombord
          </h1>
          <p className="md:w-1/2 text-center md:text-start antialiased text-md">
            Vi hjälper dig med felsökning, uppgradering och nyinstallation av
            elektronik i din fritidsbåt, husbil eller campervan.
          </p>
          <div className=" flex md:flex-row flex-col items-center pt-4 gap-4 ">
            <Link href="/kontakt">
              <Button className="md:py-7 py-4 px-8 md:px-10 hover:bg-white hover:scale-[1.02] text-black text-sm md:text-lg uppercase font-bold bg-white rounded-full">
                Kontakt
              </Button>
            </Link>

            <Button
              className="md:py-7 py-4 px-8 md:px-10 hover:bg-white hover:scale-[1.02] text-black text-sm md:text-lg uppercase font-bold bg-white rounded-full"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Våra tjänster
            </Button>
          </div>
        </div>
      </div>
      <Services />
    </section>
  );
}
