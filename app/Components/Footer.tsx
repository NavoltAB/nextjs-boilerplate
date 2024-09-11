export default function Footer() {
  return (
    <section className="flex bg-black absolute bottom-0 flex-col bg-opacity-50 backdrop-blur-lg  gap-4 !z-40 md:px-6 py-4 justify-center md:py-6 w-full items-center">
      <div className="flex flex-col justify-center w-full items-center">
        <h1 className="leading-[26px]  text-white text-[26px] antialiased font-semibold uppercase">
          Navolt
        </h1>
        <h3 className="text-[9px]  antialiased text-white uppercase">
          Marinelektronik
        </h3>
      </div>
      <div className="!text-white md:mt-auto flex flex-col md:flex-row md:w-4/5 justify-end h-fit  md:justify-between text-center md:items-end">
        <p className="md:text-xs antialiased text-[12px]">
          Postadress: Kapellevägen 15B
        </p>
        <p className="md:text-xs antialiased text-[12px]">451 44 Uddevalla</p>
        <p className="md:text-xs antialiased text-[12px]">
          Org. nummer: 559475-1876
        </p>
        <p className="md:text-xs antialiased text-[12px]">
          Bolaget är godkänt för F-skatt
        </p>
      </div>
    </section>
  );
}
