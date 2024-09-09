import React from "react";

const InterestedCTA = () => {
  return (
    <section className="p-4 m-4 md:m-20 md:p-12 bg-pink-900 rounded-3xl flex flex-col md:flex-row justify-between">
      <div>
        <h1 className="text-3xl md:text-5xl pt-4 font-forum text-white">
          INTERESTED?
        </h1>
        <p className="text-lg py-2 md:text-xl text-white">
          Looking to innovate? Let&apos;s work together.
        </p>
      </div>
      <div className="h-full flex flex-col justify-center my-auto">
        <button className="block rounded-full bg-white hover:bg-transparent hover:text-white transition-all px-6 md:px-24 hover:border-2 py-2 md:py-6 text-xl font-medium text-black backdrop-blur-3xl">
          Apply
        </button>
      </div>
    </section>
  );
};

export default InterestedCTA;
