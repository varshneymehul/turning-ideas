import Image from "next/image";
import React from "react";

const VenturesCard = ({ src, title, description }) => {
  return (
    <div className="p-4 md:p-8 border-2 h-full bg-white rounded-3xl flex flex-col items-center" >
      <Image
        src={src}
        alt={title}
        className="h-32 w-auto object-contain"
        width={1000}
        height={1000}
      />
      <h2 className="text-2xl font-forum text-center">{title}</h2>
      <p className="px-4 text-center">{description}</p>
    </div>
  );
};

export default VenturesCard;
