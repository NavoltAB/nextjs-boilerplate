"use client";

import Image from "next/image";
import HeroImg from "../public/img/hero-img.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Services from "./Components/Services";
import Brands from "./Components/Brands";
import Insta from "./Components/Insta";

export default function Home() {
  const scrollToServices = () => {
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 768;
    const scrollPosition = isMobile
      ? windowHeight - 79
      : document.documentElement.scrollHeight - windowHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full h-full">
      <div className="relative md:h-[calc(100vh-94px)] h-[calc(100dvh-79px)]">
          <Image
            objectFit="cover"
            src={HeroImg}
            alt="hero-image"
            className="brightness-75 absolute -top-[94px] h-[calc(100%+94px)] min-h-[calc(100%+94px)] object-cover w-full sm:scale-x-[-1] scale-x-100"
          />
        <div className="relative [&>*]:text-white gap-4 max-h-[calc(100vh-78px)] flex items-center md:items-start px-4 lg:px-10 h-full flex-col justify-center">
          <h1 className="text-[32px] md:text-[56px] text-center antialiased leading-[32px] md:leading-[56px] uppercase font-semibold">
            Vi löser elen ombord
          </h1>
          <p className="md:w-1/2 text-center md:text-start antialiased text-md">
            Vi hjälper dig med felsökning, uppgradering och nyinstallation av
            elektronik i din fritidsbåt, husbil eller campervan.
          </p>
          <div className="flex md:flex-row flex-col items-center pt-4 gap-4">
            <Link href="/bat">
              <Button className="md:py-7 py-4 px-8 md:px-10 hover:bg-white hover:scale-[1.02] text-black text-sm md:text-lg uppercase font-bold bg-white rounded-full">
                Båt
              </Button>
            </Link>

            <Link href="/campervan">
              <Button
                className="md:py-7 py-4 px-8 md:px-10 hover:bg-white hover:scale-[1.02] text-black text-sm md:text-lg uppercase font-bold bg-white rounded-full"
            
            >
              Campervan
              </Button>
            </Link>
            <Link href="/batrutor">
              <Button
                className="md:py-7 py-4 px-8 md:px-10 hover:bg-white hover:scale-[1.02] text-black text-sm md:text-lg uppercase font-bold bg-white rounded-full"
            
            >
                Båtrutor
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Services />
      <Insta />
      <Brands />
      <section className="py-16 px-4 md:px-10">
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          className="elfsight-app-cb71a3bb-2e76-475b-9681-437157e214be"
          data-elfsight-app-lazy
        ></div>
      </section>
    </section>
  );
}
