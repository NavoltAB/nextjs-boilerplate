import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Bat() {
  return (
    <section className="min-h-[calc(100dvh-79px)] flex flex-col items-center justify-center bg-black md:min-h-[calc(100vh-94px)]">
      <div 
        className="absolute inset-0 z-0 bg-[url('../public/img/services.png')] bg-cover bg-bottom brightness-50"
        role="img"
        aria-label="landing-image"
      />
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
