import { Button } from "@/components/ui/button";
import BatImg from "@/public/img/Boat-Img.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Bat() {
  return (
    <section className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center md:min-h-[calc(100vh-99px)]">
      <div className="absolute inset-0 z-0">
        <Image
          src={BatImg}
          className="object-cover brightness-50 object-bottom max-h-[100vh] " // No scale on smaller screens
          alt="landing-image"
          fill
          quality={100}
        />
      </div>
      <div className="relative w-full mb-[250px] flex-col items-center py-10 gap-4 flex justify-center z-60">
        <h1 className="text-white text-center md:text-[56px] text-[36px] font-semibold uppercase">
          Under konstruktion...
        </h1>
        <Link href="/kontakt">
          <Button className="md:py-7 py-4 px-8 md:px-10 hover:bg-white hover:scale-[1.02] text-black text-sm md:text-lg uppercase font-bold bg-white rounded-full">
            Kontakta oss
          </Button>
        </Link>
      </div>
    </section>
  );
}
