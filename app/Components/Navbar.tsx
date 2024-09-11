"use client";

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, X } from "lucide-react";

export default function Navbar() {
  const menuItems = [
    { text: "Hem", link: "/" },
    { text: "Båt", link: "/bat" },
    { text: "Campervan", link: "/campervan" },
    { text: "Kontakt", link: "/kontakt" },
  ];

  return (
    <section className="flex bg-black  bg-opacity-50 backdrop-blur-lg sticky top-0 z-40 flex-row md:px-10 px-4 py-2 md:py-3 justify-between w-full items-center">
      <div className="flex flex-col items-center">
        <Link href="/" className="text-center">
          <h1 className=" text-[24px] leading-[24px] md:leading-[36px] text-white md:text-[36px]  antialiased font-semibold uppercase">
            Navolt
          </h1>
          <h3 className=" text-[10px] md:text-[12px] antialiased text-white uppercase">
            Marinelektronik
          </h3>
        </Link>
      </div>

      <div className="w-1/3 hidden md:flex text-white justify-end flex-row gap-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-white text-[18px] antialiased uppercase hover:text-gray-400"
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <AlignJustify
              stroke="white"
              height={30}
              width={30}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="bg-opacity-20 border-none backdrop-blur-md bg-white">
            <SheetHeader className="flex items-center flex-row w-full justify-between">
              <SheetTitle className="text-[24px] text-white">Meny</SheetTitle>
              <SheetClose>
                <X stroke="white" />
              </SheetClose>
            </SheetHeader>
            <div className="flex pt-4 flex-col">
              {menuItems.map((item, index) => (
                <SheetClose asChild className="text-start py-1.5" key={index}>
                  <Link
                    href={item.link}
                    className="text-white text-[18px] antialiased uppercase hover:text-gray-400"
                  >
                    {item.text}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}
