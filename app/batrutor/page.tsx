import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Img1 from "@/public/img/batrutor/batrutor-1.jpg";
import Img2 from "@/public/img/batrutor/batrutor-2.jpg";
import Img3 from "@/public/img/batrutor/batrutor-3.jpg";
import { Dialog, DialogTitle, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Batrutor() {
  const texts = [
    {
      heading: "Maxi 95 - 7 890:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. 4+4 st enl. mått: 1155x224 mm, 1070x270 mm, 807x265 mm, 829x143 mm.\nMonteringspaket: 2 590:-",
    },
    {
      heading: "Maxi 87 - 5 290:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. 2+2 st enl. mått: 1063x252 mm, 1069x229 mm.\nMonteringspaket: 2 250:-",
    },
    {
      heading: "Maxi 84 - 5 290:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. 1+1 st enl. mått: 1972x253 mm.\nMonteringspaket: 1 990:-",
    },
    {
      heading: "Maxi 77 - 5 290:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. Alternativ 1: 1+1 st enl. mått: 1962x240 mm. Alternativ 2: 2+2 st enl. mått: 1096x235 mm, 819x215 mm.\nMonteringspaket: 1 990:-",
    },
    {
      heading: "Maxi 68 - 4 090:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. 1+1 st enl. mått: 1464x215 mm.\nMonteringspaket: 1 990:-",
    },
    {
      heading: "Maxi Fenix - 4 190:-",
      text: "Sidorutor i polykarbonat UV Bronze 130, 6mm. 1+1 st enl. mått: 1363x262 mm.\nMonteringspaket: 1 990:-",
    },
  ];

  const images = [
    {
      id: 1,
      image: Img1,
      alt: "Batrutor installation 1",
    },
    {
      id: 2,
      image: Img2,
      alt: "Batrutor installation 2",
    },
    {
      id: 3,
      image: Img3,
      alt: "Batrutor installation 3",
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
    }
  ];

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
        Vi erbjuder kompletta rutpaket tillsammans med skräddarsydda monteringspaket anpassade efter din båttyp.
        </p>
        <div className="relative w-full flex-col bg-black lg:p-6 p-4 bg-opacity-50 backdrop-blur-sm py-6 gap-4 flex justify-center z-60">
          <div className="text-white gap-4 flex flex-col ">
            <h2 className="text-[20px]">Vi har, tillsammans med Sika, utvecklat en metod för att limma utanpåliggande båtrutor helt utan skruvar. Detta ger en tät och hållbar montering som håller i många år.
            </h2>
            <p className="text-[14px]">Just nu har vi lösningar för följande modeller:</p>
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
                    <p className="text-[14px] whitespace-pre-line">{text.text}</p>
                  </div>
                ))}
              </div>
              <div className="lg:w-1/3 w-full flex flex-col gap-4">
                {images.map((image, index) => (
                  image.id !== 3 && (
                    <div key={index} className="flex lg:justify-end justify-center w-full">
                      <Image
                        src={image.image}
                        alt={image.alt}
                        height={200}
                        width={200}
                        className="object-cover rounded-lg w-full md:max-w-[200px] md:max-h-[200px] lg:w-1/2"
                      />
                    </div>
                  )
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
                    <p className="text-[14px] whitespace-pre-line">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="lg:w-1/3 w-full flex flex-row lg:flex-col gap-4">
                {images.map((image, index) => (
                  image.id === 3 && (
                    <div key={index} className="flex lg:justify-end justify-center w-full">
                      <Image
                        src={image.image}
                        alt={image.alt}
                        height={200}
                        width={200}
                        className="object-cover rounded-lg w-full md:max-w-[200px] md:max-h-[200px]"
                      />
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center z-[70]  mt-4">
        <Dialog>
            <DialogTrigger asChild>
              <Button className="w-fit lg:text-md text-sm hover:bg-white hover:scale-[1.02] bg-white rounded-full text-black uppercase font-bold md:py-6 py-2 px-6 md:px-8">Beställning</Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-[#111111] max-h-[90vh] overflow-y-auto border-none !rounded-none z-[80]">
              <div className="h-full w-full">
                <DialogTitle hidden>
                  <h3>Beställning</h3>
                </DialogTitle>
                <script src="https://static.elfsight.com/platform/platform.js" async></script>
                <div className="elfsight-app-c34915a5-f231-4d38-a9e2-601cf8cc8918" data-elfsight-app-lazy></div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

