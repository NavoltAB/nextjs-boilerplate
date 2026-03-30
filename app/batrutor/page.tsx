import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Sidorutor from "@/public/img/batrutor/Monteringspaket.jpeg";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Batrutor() {
  const texts = [
    {
      heading: "Maxim 26 - 8 790:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. 3+3 st.\nMonteringspaket: 2 990:-",
    },
    {
      heading: "Maxi 95 - 8 490:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. 3+3 st.\nMonteringspaket: 2 780:-",
    },
    {
      heading: "Maxi 87 - 5 290:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. 2+2 st enl. mått: 1063x252 mm, 1069x229 mm.\nMonteringspaket: 2 440:-",
    },
    {
      heading: "Maxi 84 - 5 290:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. 1+1 st enl. mått: 1972x253 mm.\nMonteringspaket: 2 180:-",
    },
    {
      heading: "Maxi 77 - 5 290:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. Alternativ 1: 1+1 st enl. mått: 1962x240 mm. Alternativ 2: 2+2 st enl. mått: 1096x235 mm, 819x215 mm.\nMonteringspaket: 2 180:-",
    },
    {
      heading: "Maxi 68 - 4 090:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. 1+1 st enl. mått: 1464x215 mm.\nMonteringspaket: 2 180:-",
    },
    {
      heading: "Maxi Fenix - 4 190:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. 1+1 st enl. mått: 1363x262 mm.\nMonteringspaket: 2 180:-",
    },
  ];

  const otherItems = [
    {
      heading: "Gebo-däckslucka - 2 190:-",
      text: "Däckslucka i polykarbonat UV Bronze 130, 10mm. Mått: 500x500 mm.\nMonteringspaket: 1 390:- (för däckslucka med glaslist i gummi)\n- Sikasil SG-20 Svart, 300ML\n- Tätningslist\n- Glaslist",
    },
    {
      heading: "Nedgångslucka Akterruff Maxi 95 - 2 790:-",
      text: "Plexiglas PMMA Rökfärgad 7C83 8mm. Med ventilationsgaller på båda sidor",
    },
    {
      heading: "Beställning & leverans",
      text: "Beställ via mejl: info@navolt.se eller via Navolt.se/kontakt.\nFinns för avhämtning på Hälsö. Kan skickas",
    },
  ];

  const montage = [
    {
      quantity: "st",
      name: "Sikasil SG-20",
      description: "Svart 300ML*",
    },
    {
      quantity: "m",
      name: "Sika Spacer Tape HD",
      description: "4,8x6*",
    },
    {
      quantity: "1st",
      name: "Sika Primer 207",
      description: "Svart 250ML",
    },
    {
      quantity: "1st",
      name: "Sika Aktivator 205",
      description: "30ML",
    },
    {
      quantity: "250ml",
      name: "Isopropanol",
      description: "**",
    },
    {
      quantity: "1st",
      name: "Fogavjämnare",
      description: "",
    },
    {
      quantity: "1st",
      name: "Maskeringstejp UV långtids",
      description: "48MM/50M",
    },
    {
      quantity: "3st",
      name: "Skumapplikator",
      description: "",
    },
    {
      quantity: "2st",
      name: "Fogblad",
      description: "",
    },
    {
      quantity: "8st",
      name: "Nitrilhandskar",
      description: "",
    },
    {
      quantity: "8st",
      name: "Luddfria trasor",
      description: "",
    },
  ] as const;

  const montageNotes = {
    note1:
      "*Mängd Sikasil SG-20 och Sika Spacer Tape anpassas efter dina behov",
    note2:
      "**Isopropanol kan tyvärr inte skickas. Priset justeras därefter och du behöver inhandla detta på egen hand. Finns på tex Kjell & Company",
  } as const;

  return (
    <section className=" lg:px-10 px-4 flex flex-col mb-10  bg-black min-h-[100vh]">
      <div
        className="absolute inset-0 z-0 bg-[url('../public/img/Boat-Img.jpg')] bg-cover bg-top brightness-50"
        role="img"
        aria-label="landing-image"
      />
      <div className="relative w-full ] flex-col items-center py-6 gap-4 flex justify-center z-60">
        <h1 className="text-white text-center text-[18px]  px-10 lg:text-[24px]  font-semibold">
          BÅTRUTOR OCH MONTERINGSPAKET
        </h1>
        <p className="text-white text-center lg:px-10 px-4 text-sm ">
          Vi erbjuder kompletta rutpaket tillsammans med skräddarsydda
          monteringspaket anpassade efter din båttyp.
        </p>
        <div className="relative w-full flex-col bg-black lg:p-6 p-4 bg-opacity-50 backdrop-blur-sm py-6 gap-4 flex justify-center z-60">
          <div className="text-white gap-4 flex flex-col ">
            <h2 className="text-[20px]">
              Vi har, tillsammans med Sika, utvecklat en metod för att limma
              utanpåliggande båtrutor helt utan skruvar. Detta ger en tät och
              hållbar montering som håller i många år.
            </h2>
            <p className="text-[14px]">
              Just nu har vi lösningar för följande modeller:
            </p>
          </div>
        </div>
        <div className="relative w-full flex-col bg-black lg:p-6 p-4 bg-opacity-50 backdrop-blur-sm py-6 gap-4 flex justify-center z-60">
          <div className="text-white flex flex-col ">
            <h3 className="text-[18px]">Rutpaket & monteringspaket</h3>
            <div className="flex justify-between lg:flex-row flex-col w-full gap-4">
              <div className="relative lg:w-2/3 w-full  flex-col m py-6 gap-4 flex  z-60">
                {texts.map((text, index) => (
                  <div key={index} className="text-white flex flex-col">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[18px]">{text.heading}</h2>
                    </div>
                    <p className="text-[14px] whitespace-pre-line">
                      {text.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full flex-col bg-black lg:p-6 p-4 bg-opacity-50 backdrop-blur-sm py-6 gap-4 flex justify-center z-60">
          <div className="text-white flex flex-col ">
            <h4 className="text-[18px]">Övriga produkter</h4>
            <div className="flex justify-between lg:flex-row flex-col w-full gap-4">
              <div className="relative lg:w-2/3 w-full  flex-col m py-6 gap-4 flex  z-60">
                {otherItems.map((item, index) => (
                  <div key={index} className="text-white flex flex-col">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[18px]">{item.heading}</h2>
                    </div>
                    <p className="text-[14px] whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center z-[70]">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-fit lg:text-md text-sm hover:bg-white hover:scale-[1.02] bg-white rounded-full text-black uppercase font-bold md:py-6 py-2 px-6 md:px-8">
                Beställning
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-[#111111] max-h-[90vh] overflow-y-auto border-none !rounded-none z-[80]">
              <div className="h-full w-full">
                <DialogTitle hidden>
                  <h3>Beställning</h3>
                </DialogTitle>
                <script
                  src="https://static.elfsight.com/platform/platform.js"
                  async
                ></script>
                <div
                  className="elfsight-app-c34915a5-f231-4d38-a9e2-601cf8cc8918"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="relative w-full flex-col bg-black lg:p-6 p-4 bg-opacity-50 backdrop-blur-sm py-6 gap-4 flex justify-center z-60">
          <div className="text-white flex !flex-col">
            <h5 className="text-[18px] pb-2">Monteringspaket sidorutor</h5>
            <div className="flex flex-col w-full gap-4">
              <Image
                src={Sidorutor}
                alt="Monteringspaket sidorutor"
                sizes="100vw"
                className="w-full h-auto"
              />
              {/* Move the text content directly below the image */}
              <div className="text-white flex flex-col">
                <div className="flex items-center gap-2">
                  <h2 className="text-[18px]">Monteringspaket innehåller</h2>
                </div>
                <div className="text-[14px] mb-4 whitespace-pre-line">
                  {montage.map((item, index) => (
                    <div key={index} className="mb-1 antialiased">
                      {item.quantity} {item.name}
                      {item.description && ` - ${item.description}`}
                    </div>
                  ))}
                  <div className="mt-4 text-[12px]">
                    <p className="!antialiased">{montageNotes.note1}</p>
                    <p className="!antialiased">{montageNotes.note2}</p>
                  </div>
                  <p className="!antialiased">
                    Fogspruta ingår ej, kan köpas till för 99:-
                  </p>
                </div>
                <script
                  src="https://static.elfsight.com/platform/platform.js"
                  async
                ></script>
                <div
                  className="elfsight-app-a74e85ad-769a-455d-8c9d-da2741f37b86"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full flex-col bg-black lg:p-6 p-4 bg-opacity-50 backdrop-blur-sm py-6 gap-4 flex justify-center z-60">
          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            className="elfsight-app-81bee96e-329a-48e1-be15-239304c627d9"
            data-elfsight-app-lazy
          ></div>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            className="elfsight-app-77e18350-628e-45de-a626-2371c216bced"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
      <div className="relative flex items-center mb-8 justify-center z-[70]">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-fit lg:text-md text-sm hover:bg-white hover:scale-[1.02] bg-white rounded-full text-black uppercase font-bold md:py-6 py-2 px-6 md:px-8">
              Beställning
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-[#111111] max-h-[90vh] overflow-y-auto border-none !rounded-none z-[80]">
            <div className="h-full w-full">
              <DialogTitle hidden>
                <h3>Beställning</h3>
              </DialogTitle>
              <script
                src="https://static.elfsight.com/platform/platform.js"
                async
              ></script>
              <div
                className="elfsight-app-c34915a5-f231-4d38-a9e2-601cf8cc8918"
                data-elfsight-app-lazy
              ></div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
