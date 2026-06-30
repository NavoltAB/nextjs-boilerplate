import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {

const socialMedia = [
  {
    id: 1,
    name: "Följ oss på Facebook",
    icon: <Facebook stroke="white" />,
    link: "https://www.facebook.com/NavoltAB"
  },
  {
    id: 2,
    name: "Följ oss på Instagram",
    icon: <Instagram stroke="white" />,
    link: "https://www.instagram.com/navolt.ab"
  },
  
]

  return (
    <section className="flex bg-black absolute bottom-0 flex-col bg-opacity-50 backdrop-blur-lg  gap-4 !z-40 md:px-6 px-4 py-4 justify-center md:py-6 w-full items-center">
      <div className="flex flex-col justify-center w-full items-center">
        <span className="block leading-[26px]  text-white text-[26px] antialiased font-semibold uppercase">
          Navolt
        </span>
        <span className="block text-[9px]  antialiased text-white uppercase">
          Marinelektronik
        </span>
      </div>
      <div className="!text-white md:mt-auto flex flex-col md:flex-row md:w-4/5 justify-end h-fit  md:justify-center md:gap-8 text-center md:items-end">
        <p className="md:text-xs antialiased text-[12px]">
          Org. nummer: 559475-1876
        </p>
        <p className="md:text-xs antialiased text-[12px]">
          Bolaget är godkänt för F-skatt
        </p>
        
      </div>
      <div className="flex flex-row gap-4 justify-between w-full">
          {socialMedia.map((item) => (
            <Link key={item.id} href={item.link} target="_blank"  className="flex items-center gap-1">
              {item.icon}
              <p className="text-[12px] antialiased text-white">{item.name}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}
