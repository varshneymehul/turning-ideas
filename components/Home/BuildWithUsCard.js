import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BuildWithUsCard = ({ href, src, title, subheading, description }) => {
  return (
    <Link href={href}>
      <div className="group border-l-4 border-teal-500 md:w-11/12 p-4 md:p-8 hover:shadow-lg hover:scale-105 transition-all m-4">
        <Image
          className="h-72 w-auto rounded-3xl"
          src={src}
          alt="hero"
          width={1000}
          height={1000}
        />
        <h2>
          <span className="text-2xl md:text-3xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-900 to-blue-900 font-forum">
            {title}
          </span>
        </h2>
        <h3>
          <span className="text-xl md:text-2xl font-forum">{subheading}</span>
        </h3>
        <p className="py-2 text-lg md:text-xl text-slate-700">{description}</p>
        <div className="flex items-center transition-all text-blue-700 group-hover:text-blue-900">
          <span>
            <FaArrowRight className="mx-2 group-hover:translate-x-1 transition-all" />
          </span>
          <p className="text-lg md:text-xl uppercase font-forum">
            Learn more
            <span className="block max-w-0 group-hover:max-w-full duration-500 h-0.5 bg-blue-700"></span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BuildWithUsCard;
