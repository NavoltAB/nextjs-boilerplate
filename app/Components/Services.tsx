import Image from "next/image";
import ServicesImg from "@/public/img/services.png";
import { Caravan, Sailboat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
  return (
    <section className="relative min-h-[calc(100vh-99px)] w-full">
      <Image
        objectFit="cover"
        src={ServicesImg}
        alt="service-image"
        className="brightness-75 absolute h-full min-h-full object-cover w-full"
        quality={100}
      />
      <div className="z-80 md:px-10  w-full pb-[261px] py-6 px-4 md:py-10 top-0">
        <h2 className="font-semibold text-center relative z-60 text-white uppercase mb-6 text-[28px] md:text-[42px]">
          Våra tjänster
        </h2>
        <div className="flex md:flex-row flex-col z-20 gap-6 min-h-full items-center">
          <div className="bg-black/30 w-4/5 md:px-10 flex flex-col gap-4 items-center px-4 py-4 md:py-10 rounded-xl backdrop-blur-lg md:w-2/3 z-20">
            <div className=" border-white/60 border-2 rounded-full p-5">
              <Sailboat
                stroke="white"
                strokeWidth={1}
                className="md:h-[50px] md:w-[50px] h-[30px] w-[30px] "
              />
            </div>
            <h3 className="text-white font-semibold text-[24px] uppercase antialiased">
              Båtar
            </h3>
            <p className="text-white text-center md:text-md text-sm antialiased">
              Under konstruktion...
            </p>
            <Link href="/bat">
              <Button className="bg-white hover:bg-white hover:scale-[1.02] uppercase font-semibold text-black py-2 px-6 rounded-full">
                Visa mer
              </Button>
            </Link>
          </div>
          <div className="bg-black/30 md:px-10 flex w-4/5 flex-col gap-4 items-center py-10 rounded-xl backdrop-blur-lg md:w-2/3 h-fit z-20">
            <div className=" border-white/60 border-2 rounded-full p-5">
              <Caravan
                stroke="white"
                strokeWidth={1}
                className="md:h-[50px] md:w-[50px] h-[30px] w-[30px] "
              />
            </div>
            <h3 className="text-white font-semibold text-[24px] uppercase antialiased">
              Campervans
            </h3>
            <p className="text-white text-center text-sm antialiased">
              Under konstruktion...
            </p>
            <Link href="/campervan">
              <Button className="bg-white hover:bg-white hover:scale-[1.02] uppercase font-semibold text-black py-2 px-6 rounded-full">
                Visa mer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
