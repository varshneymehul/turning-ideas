"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

const JourneyTile = ({ src, title, subheading, description }) => {
  const introHeaderVariants = {
    hide: {
      opacity: 0,
      y: -10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={introHeaderVariants}
      className="rounded-3xl m-4 md:m-8 border-2 border-slate-300 p-4 md:p-8 md:flex"
    >
      <div className="md:w-2/5 flex flex-col justify-center">
        <Image
          className="w-full rounded-3xl"
          src={src}
          alt={title}
          height={2000}
          width={2000}
        />
      </div>
      <div className="md:w-3/5 p-4 md:p-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-forum py-2 text-white">
          {title}
        </h1>
        <h2 className="text-xl md:text-2xl pb-2 text-blue-200">
          {subheading && subheading}
        </h2>
        <p className="text-lg text-white">{description}</p>
      </div>
    </motion.div>
  );
};

export default JourneyTile;
