import hero from "@/public/img/hero-1.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <section
        style={{
          backgroundColor: "#99ffce",
          backgroundImage: `
        radial-gradient(at 94% 72%, hsla(171,85%,89%,1) 0px, transparent 50%),
        radial-gradient(at 84% 20%, hsla(171,85%,89%,1) 0px, transparent 50%),
        radial-gradient(at 19% 10%, hsla(171,85%,89%,1) 0px, transparent 50%),
        radial-gradient(at 17% 78%, hsla(199,90%,71%,1) 0px, transparent 50%)
    `,
        }}
        className="bg-teal-100 pt-[20vh] lg:h-[80vh] flex flex-col md:flex-row rounded-b-3xl px-4 md:px-12 "
      >
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-5xl">
            We are going to build your tech startup from{" "}
            <span
              className={
                "text-sky-700 text-3xl md:text-6xl font-bold font-smooch"
              }
            >
              scratch
            </span>
          </h1>
          <h2 className={"uppercase text-2xl md:text-3xl font-forum"}>
            From Day 0 to Greatness
          </h2>
          <p className="text-lg md:text-2xl md:w-3/5 py-4">
            We invest in people. People with the ambition to build large
            companies. <br />
          </p>
          <button className="relative transition-all inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Apply
            </span>
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            className="rounded-3xl md:h-auto h-[50vh] object-contain"
            src={hero}
            alt="hero"
            width={800}
            height={800}
          />
        </div>
      </section>

      {/* Startups and Enterprises */}
      <section>
        <h1 className="text-2xl md:text-5xl text-center font-forum py-4 md:py-12">
          WE BACK TOP TALENT TO BUILD GREAT COMPANIES
        </h1>
      </section>

      {/* Ventures */}
      <section>
        <h1 className="text-2xl md:text-5xl text-center font-forum py-4 md:py-12">
          WE BACK TOP TALENT TO BUILD GREAT COMPANIES
        </h1>
      </section>

      {/* Partners (carousel) */}
      <section>
        <h1 className="text-2xl md:text-5xl text-center font-forum py-4 md:py-12">
          WE BACK TOP TALENT TO BUILD GREAT COMPANIES
        </h1>
      </section>

      {/* Buzz */}
      <section>
        <h1 className="text-2xl md:text-5xl text-center font-forum py-4 md:py-12">
          WE BACK TOP TALENT TO BUILD GREAT COMPANIES
        </h1>
      </section>
    </main>
  );
}
