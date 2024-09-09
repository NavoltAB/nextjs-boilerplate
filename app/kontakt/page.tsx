import KontaktImg from "@/public/img/pexels-pixabay-275637.jpg";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center md:min-h-[calc(100vh-99px)]">
      <div className="absolute inset-0 z-0">
        <Image
          src={KontaktImg}
          className="object-cover brightness-50 max-h-[100vh] object-right-bottom " // No scale on smaller screens
          alt="landing-image"
          fill
          quality={100}
          priority
        />
      </div>
      <div className="relative w-full mb-[250px] px-6 flex-col items-center py-10 gap-4 flex justify-center z-60">
        <h1 className="text-white md:text-[56px] text-center text-[36px] font-semibold uppercase">
          Kontakta oss
        </h1>
        <div className="flex md:flex-row flex-col gap-4">
          <Link
            href="tel:0730254555"
            className="flex border items-center p-4 hover:bg-black/30 hover:backdrop-blur-lg cursor-pointer rounded-lg gap-4"
          >
            <Phone stroke="white" className="w-[30px] h-[30px]" />
            <p className="text-white text-[16px] md:text-[20px] font-semibold">
              073 025 45 55
            </p>
          </Link>
          <Link
            href="mailto:info@navolt.se"
            className="flex border items-center p-4 hover:bg-black/30 hover:backdrop-blur-lg cursor-pointer rounded-lg gap-4"
          >
            <Mail stroke="white" className="w-[30px] h-[30px]" />
            <p className="text-white text-[16px] md:text-[20px] font-semibold">
              Info@navolt.se
            </p>
          </Link>
        </div>
        <Link
          target="__blank"
          href="https://www.google.se/maps/place/Navolt+AB/@57.732011,11.6530219,17z/data=!3m1!4b1!4m6!3m5!1s0x224b476295a6a00f:0x7f83997bcd02039c!8m2!3d57.7320082!4d11.6555968!16s%2Fg%2F11y4ljmptd?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
          className="flex border items-center p-4 hover:bg-black/30 hover:backdrop-blur-lg cursor-pointer rounded-lg gap-4"
        >
          <MapPinHouse stroke="white" className="min-w-[30px] min-h-[30px]" />
          <p className="text-white text-[16px] md:text-[20px] font-semibold">
            Tjolmenvägen, 475 50 Hälsö
          </p>
        </Link>
      </div>
    </section>
  );
}
