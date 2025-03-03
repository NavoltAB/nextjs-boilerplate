import Image from "next/image";
import BG from "@/public/icons/brands/B&G.png";
import BEP from "@/public/icons/brands/BEP.png";
import BLUESEA from "@/public/icons/brands/BLUE SEA SYSTEMS.png";
import DOMETIC from "@/public/icons/brands/DOMETIC.png";
import EBERSPACHER from "@/public/icons/brands/EBERSPÄCHER.png";
import GARMIN from "@/public/icons/brands/GARMIN.png";
import LOWRANCE from "@/public/icons/brands/LOWRANCE.png";
import NEXA from "@/public/icons/brands/NEXA.png";
import RAYMARINE from "@/public/icons/brands/RAYMARINE.png";
import SIMRAD from "@/public/icons/brands/SIMRAD.png";
import SKYLLERMARKS from "@/public/icons/brands/SKYLLERMARKS.png";
import SUTARS from "@/public/icons/brands/SUTARS.png";
import TELTONIKA from "@/public/icons/brands/TELTONIKA.png";
import VICTRON from "@/public/icons/brands/VICTRON ENERGY.png";

const brands = [
    { name: "B&G", logo: BG },
    { name: "BEP", logo: BEP },
    { name: "Blue Sea Systems", logo: BLUESEA },
    { name: "Dometic", logo: DOMETIC },
    { name: "Eberspächer", logo: EBERSPACHER },
    { name: "Garmin", logo: GARMIN },
    { name: "Lowrance", logo: LOWRANCE },
    { name: "Nexa", logo: NEXA },
    { name: "Raymarine", logo: RAYMARINE },
    { name: "Simrad", logo: SIMRAD },
    { name: "Skyllermarks", logo: SKYLLERMARKS },
    { name: "Sutars", logo: SUTARS },
    { name: "Teltonika", logo: TELTONIKA },
    { name: "Victron Energy", logo: VICTRON }
];

export default function Brands() {
    return (
        <section className="py-16 mb-[8rem] px-4 md:px-10">
            <h2 className="text-2xl md:text-4xl font-semibold text-center uppercase mb-12">Våra varumärken</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-items-center">
                {brands.map((brand) => (
                    <div key={brand.name} className="w-full max-w-[200px] h-[100px] relative flex items-center justify-center">
                        <Image
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            className="object-contain transition-all duration-300"
                            fill
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

