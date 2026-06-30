import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galleri – våra installationer och referensjobb",
  description:
    "Se exempel på våra installationer av marinelektronik, elsystem, solceller och litiumbatterier i båt och campervan. Navolt i Göteborg/Öckerö.",
  alternates: { canonical: "/galleri" },
};

export default function Galleri() {
  return (
    <section className=" flex flex-col  bg-black min-h-[calc(100vh-79px)] md:min-h-[calc(100vh-120px-85.9px)]">
      <div
        className="absolute inset-0 z-0 bg-[url('../public/img/galleri.jpg')] bg-cover bg-bottom brightness-50"
        role="img"
        aria-label="landing-image"
      />
      <div className="max-w-[100vw]">
        <div
          className="elfsight-app-72c6d581-a169-4bb8-b299-3cabbd529a10"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
