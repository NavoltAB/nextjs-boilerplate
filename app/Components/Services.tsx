import Image from "next/image";
import ServicesImg from "@/public/img/services.png";
import StartImg2 from "@/public/img/startpage-2.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

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
          <h3 className="text-3xl md:text-4xl text-center lg:text-start font-semibold mb-4">VILL DU HA EN SOMMAR UTAN LANDSTRÖM?</h3>
          <Dialog>
          <DialogTrigger asChild>
            <Button className="w-fit lg:text-md text-sm hover:bg-white hover:scale-[1.02] bg-white rounded-full text-black uppercase font-bold md:py-6 py-2 px-6 md:px-8">Fråga oss om solpaneler</Button>
            </DialogTrigger>
         
            <DialogContent className="p-0 bg-[#111111] min-h-[60vh] overflow-y-auto  border-none !rounded-none py-2 px-2">
              <DialogTitle hidden>
                <h3>Fråga oss om solpaneler</h3>
              </DialogTitle>
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
            <div className="elfsight-app-508f623f-d371-4e3b-9777-6a5926970ebf" data-elfsight-app-lazy></div>
  </DialogContent>
            </Dialog>
    
        </div>
      </div>
    </section>
  );
}
