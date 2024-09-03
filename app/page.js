import { Smooch } from "next/font/google";
const smooch = Smooch({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <main className="">
      <section className="bg-teal-100 pt-[20vh] h-[80vh] rounded-b-3xl px-4 md:px-12 ">
        <h1 className="text-2xl md:text-5xl md:w-3/4">
          We are going to build your tech startup from{" "}
          <span
            className={
              "text-sky-700 text-3xl md:text-6xl font-bold " + smooch.className
            }
          >
            scratch
          </span>
        </h1>
        <p className="text-lg md:text-2xl md:w-3/5 py-4">
          We invest in people. People with the ambition to build large
          companies. <br />
        </p>

        <button className="relative transition-all inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Apply
          </span>
        </button>
      </section>
    </main>
  );
}
