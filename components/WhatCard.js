import React from "react";

const WhatCard = ({ type, text }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl py-2 sm:text-3xl md:text-4xl font-forum uppercase text-sky-900">
        {type === "what" ? "What?" : "How?"}
      </h1>
      <p className="absolute text-8xl  -z-10 block text-gray-100 uppercase overflow-hidden">
        {type === "what" ? "What?" : "How?"}
      </p>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default WhatCard;
