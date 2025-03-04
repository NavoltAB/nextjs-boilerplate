import { Button } from "@/components/ui/button";
import { BatteryFull, Cctv, Fan, MapPinned, MessageCircleQuestion, Sun, Wifi, Wrench } from "lucide-react";
import Link from "next/link";

export default function Bat() {

  const texts = [
    {
      heading: "Solcell",
      text: "Vi installerar solpaneler och regulatorer så du inte behöver koppla in på hela sommaren.",
      icon: <Sun className="w-8 h-8" strokeWidth={1.25}/>
    },
    {
      heading: "Batterier",
      text: "Vi konverterar ditt elsystem till litium och ser till att du har rätt laddning och övervakning. Vi utför avancerade batteritester som visar batteriets verkliga kapacitet och hälsa. Om batteriet är i dåligt skick kan vi hjälpa dig att byta till ett nytt.",
      icon: <BatteryFull className="w-8 h-8" strokeWidth={1.25}/>
    },
    {
      heading: "Övervakning",
      text: "Håll koll på din batteribank, tankar och temperatur — Vi erbjuder allt från enkla batterimonitorer till full distansövervakning",
      icon: <Cctv className="w-8 h-8" strokeWidth={1.25}/>
    },
    {
      heading: "Navigation",
      text: "Vi utför uppgradering och nyinstallation av navigationsutrustning så som AIS, autopilot, ekolod, plotter, radar, VHF, vind/log-instrument. Vi arbetar med B&G, Garmin, Lowrance, Raymarine och Simrad.",
      icon: <MapPinned className="w-8 h-8" strokeWidth={1.25}/>
    },
    {
      heading: "Kyla/Värme",
      text: "Vi installerar kylskåp/-boxar, varmvattenberedare och dieselvärmare.",
      icon: <Fan className="w-8 h-8" strokeWidth={1.25}/>
    },
    {
      heading: "Wi-Fi",
      text: "Vi hjälper dig med internet ombord. Med en router från Teltonika kan du få både 4G & 5G ombord.",
      icon: <Wifi className="w-8 h-8" strokeWidth={1.25}/>
    },
    {
      heading: "Konsultation",
      text: "Vill du göra jobbet själv? Vi hjälper dig med frågor och funderingar!",
      icon: <MessageCircleQuestion className="w-8 h-8" strokeWidth={1.25}/>
    },
    {
      heading: "Systemdesign",
      text: "Vi hjälper dig att designa ditt elsystem från grunden. Vi tar hänsyn till dina behov och budget.",
      icon: <Wrench className="w-8 h-8" strokeWidth={1.25}/>
    }
  ];
  return (
    <section className=" lg:px-10 px-4 flex flex-col  bg-black min-h-[calc(100vh-120px-85.9px)]">
      <div 
        className="absolute inset-0 z-0 bg-[url('../public/img/services.png')] bg-cover bg-bottom brightness-50"
        role="img"
        aria-label="landing-image"
      />
      <div className="relative w-full ] flex-col items-center py-10 gap-4 flex justify-center z-60">
     <h1 className="text-white text-center  lg:text-[32px] px-10 text-[24px]  font-semibold uppercase"> Vi hjälper dig med allt från installation av en ny plotter till uppgradering av hela elsystemet ombord.  </h1>
      </div>
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
      <div className="relative flex items-center justify-center z-[70] lg:mt-8 mt-4">
        <Link href="/kontakt">
          <Button   className=" py-4 mb-4 px-8  hover:bg-white hover:scale-[1.02] text-black text-sm  uppercase font-bold bg-white rounded-full">Kontakta oss</Button>
        </Link>
      </div>
    </section>
  );
}
