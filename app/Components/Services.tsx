import Image from "next/image";
import ServicesImg from "@/public/img/services.png";
import StartImg2 from "@/public/img/startpage-2.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section className="relative min-h-[calc(100vh-94px)] w-full flex flex-col">
      <div className="h-[calc(100vh-400px)] w-full relative">
        <div className="bg-[url('../public/img/startpage-2.jpg')] bg-cover bg-bottom brightness-75 absolute inset-0" />
        <div className="relative h-full flex flex-col justify-center lg:items-start items-center px-4 lg:px-10 text-white">
          <h2 className="text-2xl md:text-4xl text-center lg:text-start font-semibold mb-4">SKRÄDDARSYTT ELSYSTEM I DIN CAMPERVAN</h2>
          <Link href="/campervan">
            <Button className="w-fit lg:text-md text-sm hover:bg-white hover:scale-[1.02] bg-white rounded-full text-black uppercase font-bold md:py-6 py-2 px-6 md:px-8">Visa mer</Button>
          </Link>
        </div>
      </div>
      <div className="h-[calc(100vh-400px)] w-full relative">
        <div className="bg-[url('../public/img/startpage-3.jpg')] bg-cover bg-bottom brightness-50 absolute inset-0" />
        <div className="relative h-full flex flex-col justify-center lg:items-start items-center px-4 lg:px-10 text-white">
          <h2 className="text-3xl md:text-4xl text-center lg:text-start font-semibold mb-4">VILL DU HA EN SOMMAR UTAN LANDSTRÖM?</h2>
          <Link href="/kontakt">
            <Button className="w-fit lg:text-md text-sm hover:bg-white hover:scale-[1.02] bg-white rounded-full text-black uppercase font-bold md:py-6 py-2 px-6 md:px-8">Fråga oss om solpaneler</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
