import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BuzzTile = ({ logo, headlineImg, newsOutlet, headline, href }) => {
  return (
    <Link
      className="w-auto group justify-center h-full m-4 p-4 rounded-2xl border-2 col-span-1 row-span-1 hover:shadow-2xl transition-all hover:scale-105 hover:border-slate-900"
      href={href}
    >
      <Image
        className="h-32 object-contain mx-auto md:mx-0"
        src={logo}
        alt={newsOutlet}
        width={200}
        height={200}
      />

      <h1 className="text-xl md:text-2xl font-forum my-2">
        &quot;{headline}&quot;
      </h1>
      {/* <h2>{newsOutlet}</h2> */}
      <div className="flex items-center transition-all text-blue-700 group-hover:text-blue-900">
        <span>
          <FaArrowRight className="mr-2 group-hover:translate-x-1 transition-all" />
        </span>
        <p className="text-lg md:text-xl uppercase font-forum">
          READ MORE
          <span className="block max-w-0 group-hover:max-w-full duration-500 h-0.5 bg-blue-700"></span>
        </p>
      </div>
    </Link>
  );
};

export default BuzzTile;
