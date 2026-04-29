import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ClipboardCheck, Snowflake, Wrench, Zap } from "lucide-react";

export default function Motorservice() {
  const categories = [
    {
      heading: "Service",
      icon: <Wrench className="w-8 h-8" strokeWidth={1.25} />,
      items: [
        "Motorolja och oljefilter",
        "Bränslefilter och vattenavskiljare",
        "Impeller",
        "Zinkanoder",
        "Sjövattenfilter",
        "Glykol och kontroll av fryspunkt",
        "Remmar och slangar",
        "Smörjpunkter",
      ],
    },
    {
      heading: "Kontroll & genomgång",
      icon: <ClipboardCheck className="w-8 h-8" strokeWidth={1.25} />,
      items: [
        "Läckagekontroll (olja och vatten)",
        "Backslag (olja)",
        "Generator och laddsystem",
        "Elsystem – kontroll och felsökning",
      ],
    },
    {
      heading: "Felsökning",
      icon: <Zap className="w-8 h-8" strokeWidth={1.25} />,
      items: [
        "Startproblem",
        "Överhettning",
        "Ojämn gång / driftstörningar",
        "Startmotor och tändsystem",
      ],
    },
  ];

  const vinterItems = [
    "Oljebyte (motor och ev. backslag)",
    "Byte av oljefilter",
    "Tillsats av bränslestabilisator",
    "Genomkörning med glykol i kylsystemet (frostskydd)",
    "Tömning/konservering av sjövattenkrets",
    "Kontroll av impeller",
    "Kontroll av remmar och slangar",
    "Smörjning av rörliga delar",
    "Kontroll av batteri och laddning",
    "Visuell kontroll av läckage (olja/vatten)",
    "Rekommendationer inför nästa säsong",
  ];

  return (
    <section className="lg:px-10 px-4 flex flex-col bg-black min-h-[calc(100vh-120px-85.9px)]">
      <div
        className="absolute inset-0 z-0 bg-[url('../public/img/startpage-3.jpg')] bg-cover bg-center brightness-50"
        role="img"
        aria-label="landing-image"
      />
      <div className="relative w-full flex-col items-center py-10 gap-4 flex justify-center z-60">
        <h1 className="text-white text-center lg:text-[32px] px-10 text-[24px] font-semibold uppercase">
          Motorservice & felsökning för inombordsmotorer
        </h1>
        <p className="text-white text-center lg:text-[18px] px-10 text-[14px]">
          Service och felsökning på plats hos dig – för både diesel- och
          bensinmotorer. Problem med motorn eller dags för service? Vi hjälper
          dig med allt från löpande underhåll till felsökning.
        </p>
      </div>

      <div className="relative w-full flex-col bg-black lg:p-6 p-4 bg-opacity-50 backdrop-blur-sm py-6 gap-6 flex justify-center z-60">
        <h2 className="text-white text-[18px] font-semibold">
          Vad vi hjälper dig med
        </h2>
        {categories.map((cat, index) => (
          <div key={index} className="text-white flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {cat.icon}
              <h3 className="text-[18px]">{cat.heading}</h3>
            </div>
            <ul className="text-[14px] flex flex-col gap-1 pl-10 list-disc">
              {cat.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative w-full flex-col bg-black lg:p-6 p-4 bg-opacity-50 backdrop-blur-sm py-6 gap-4 flex justify-center z-60">
        <div className="text-white flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Snowflake className="w-8 h-8" strokeWidth={1.25} />
            <h3 className="text-[18px]">Vinterkonservering</h3>
          </div>
          <p className="text-[14px]">
            Vi förbereder din motor inför vintern för att undvika frostskador,
            korrosion och problem till nästa säsong.
          </p>
          <p className="text-[14px] font-semibold">Detta ingår:</p>
          <ul className="text-[14px] flex flex-col gap-1 pl-10 list-disc">
            {vinterItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <div className="relative flex items-center mb-14 justify-center z-[70] lg:mt-8 mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="py-4 mb-4 px-8 hover:bg-white hover:scale-[1.02] text-black text-sm uppercase font-bold bg-white rounded-full">
              Boka service
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-[#111111] max-h-[90vh] overflow-y-auto border-none !rounded-none z-[80]">
            <div className="h-full w-full">
              <DialogTitle hidden>
                <h3>Boka motorservice</h3>
              </DialogTitle>
              <div
                className="elfsight-app-f91c748e-389f-400c-ae6f-33659247c49b"
                data-elfsight-app-lazy
              ></div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
