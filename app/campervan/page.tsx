import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BatteryFull,
  Cable,
  Cctv,
  Fan,
  MapPinned,
  MessageCircleQuestion,
  Sun,
  Wifi,
  Wrench,
} from "lucide-react";
import { DialogTrigger } from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Campervan() {
  const texts = [
    {
      heading: "Solcell",
      text: "Vi installerar solpaneler och regulatorer så du inte behöver koppla in på hela sommaren.",
      icon: <Sun className="w-8 h-8" strokeWidth={1.25} />,
    },
    {
      heading: "Batterier",
      text: "Vi konverterar ditt elsystem till litium och ser till att du har rätt laddning och övervakning. Vi utför avancerade batteritester som visar batteriets verkliga kapacitet och hälsa. Om batteriet är i dåligt skick kan vi hjälpa dig att byta till ett nytt.",
      icon: <BatteryFull className="w-8 h-8" strokeWidth={1.25} />,
    },
    {
      heading: "Övervakning",
      text: "Håll koll på din batteribank, tankar och temperatur — Vi erbjuder allt från enkla batterimonitorer till full distansövervakning",
      icon: <Cctv className="w-8 h-8" strokeWidth={1.25} />,
    },
    {
      heading: "Kyla/Värme",
      text: "Vi installerar kylskåp/-boxar, varmvattenberedare och dieselvärmare.",
      icon: <Fan className="w-8 h-8" strokeWidth={1.25} />,
    },
    {
      heading: "Wi-Fi",
      text: "Vi hjälper dig med internet ombord. Med en router från Teltonika kan du få både 4G & 5G ombord.",
      icon: <Wifi className="w-8 h-8" strokeWidth={1.25} />,
    },
    {
      heading: "Kopplingsschema",
      text: "Vi skapar ett detaljerat kopplingsschema anpassat specifikt för dina komponenter.",
      icon: <Cable className="w-8 h-8" strokeWidth={1.25}/>
    },
    {
      heading: "Systemdesign",
      text: "Vi hjälper dig att designa ditt elsystem från grunden, anpassat efter dina förutsättningar, behov och önskemål.",
      icon: <Wrench className="w-8 h-8" strokeWidth={1.25}/>
    },
    {
      heading: "Konsultation",
      text: "Vill du göra jobbet själv? Vi hjälper dig med frågor och funderingar!",
      icon: <MessageCircleQuestion className="w-8 h-8" strokeWidth={1.25} />,
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Berätta om din van",
      description:
        "Börja med att fylla i vårt formulär där du berättar om din van, dina behov och önskemål. Det hjälper oss att ta fram den bästa lösningen för dig.",
    },
    {
      number: "2",
      title: "Videosamtal & planering",
      description:
        "Vi bokar ett kostnadsfritt videosamtal där vi går igenom din information och säkerställer att vi designar ett system som passar dig perfekt.",
    },
    {
      number: "3",
      title: "Systemdesign",
      description:
        "Vi designar ditt elsystem och levererar antingen ett färdigt DIY-kit med alla komponenter och ett tydligt kopplingsschema, eller så bokar vi en installationstid.",
    },
    {
      number: "4",
      title: "Installation",
      description:
        "Installera själv med ditt skräddarsydda DIY-kit eller låt oss göra det åt dig på Hälsö eller direkt hos dig.",
    },
  ];

  return (
    <section className=" lg:px-10 px-4 flex flex-col  bg-black min-h-[calc(100vh-120px-85.9px)]">
      <div
        className="absolute inset-0 z-0 bg-[url('../public/img/startpage-2.jpg')] bg-cover bg-bottom brightness-50"
        role="img"
        aria-label="landing-image"
      />
      <div className="relative w-full ] flex-col items-center py-6 gap-4 flex justify-center z-60">
        <h1 className="text-white text-center  lg:text-[32px] px-10 text-[24px]  font-semibold uppercase">
          {" "}
          Bygg ditt elsystem själv - eller låt oss göra det åt dig!{" "}
        </h1>
        <h2 className="text-white text-center text-[18px]  px-10 lg:text-[24px]  font-semibold">
          Skräddarsytt elsystem för din campervan
        </h2>
        <div className="relative w-full flex-col bg-black lg:p-6 p-4 bg-opacity-50 backdrop-blur-sm py-6 gap-4 flex justify-center z-60">
          <div className="text-white flex flex-col ">
            <div className="flex items-center gap-2">
              <h3 className="text-[18px]">
                Vill du ha ett elsystem i din van? Vi hjälper dig!
              </h3>
            </div>
            <p className="text-[14px]">
              Välj mellan ett DIY-kit med allt du behöver för att installera
              systemet själv — inklusive kopplingsschema, färdigpressade kablar
              och alla komponenter — eller låt oss installera det åt dig
            </p>
          </div>
          <h4 className="text-white text-center text-[18px]  px-10 lg:text-[24px]  font-semibold">
            Så här går det till:
          </h4>
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <div key={index} className="text-white flex flex-col ">
                <div className="flex  gap-2">
                  <h2 className="text-[14px] font-bold">{step.number}</h2>
                  <div className="flex flex-col gap-2">
                    <p className="text-[14px] font-bold">{step.title}</p>
                    <p className="text-[14px]">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex h-fit-content items-center justify-center z-[70] mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-fit lg:text-md text-sm hover:bg-white hover:scale-[1.02] bg-white rounded-full text-black uppercase font-bold md:py-6 py-2 px-6 md:px-8">Berätta om din van</Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-[#111111] max-h-[90vh] overflow-y-auto border-none !rounded-none z-[80]">
              <div className="h-full w-full">
                <DialogTitle hidden>
                  <h3>Berätta om din van</h3>
                </DialogTitle>
                <script src="https://static.elfsight.com/platform/platform.js" async></script>
                <div className="elfsight-app-4daba287-9bb2-4f97-8c90-9b215ae72512" data-elfsight-app-lazy></div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <h5 className="text-white !z-70 relative mb-4 text-center text-[18px] px-10 lg:text-[24px] font-semibold z-60">
        Vi kan också hjälpa dig med:
      </h5>
      <div className="relative w-full flex-col bg-black lg:p-6 p-4 bg-opacity-50 backdrop-blur-sm py-6 gap-4 flex justify-center z-60">
        {texts.map((text, index) => (
          <div key={index} className="text-white flex flex-col ">
            <div className="flex items-center gap-2">
              {text.icon}
              <h2 className="text-[18px]">{text.heading}</h2>
            </div>
            <p className="text-[14px]">{text.text}</p>
          </div>
        ))}
      </div>
      <div className="relative mb-14 flex items-center justify-center z-[70] lg:mt-8 mt-4">
        <Link href="/kontakt">
          <Button className=" py-4 mb-4 px-8  hover:bg-white hover:scale-[1.02] text-black text-sm  uppercase font-bold bg-white rounded-full">
            Kontakta oss
          </Button>
        </Link>
      </div>
    </section>
  );
}
