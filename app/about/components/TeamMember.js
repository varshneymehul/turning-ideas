import Image from "next/image";
import React from "react";

const TeamMember = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center shadow-sm rounded-2xl p-4 m-4">
      <Image
        className="rounded-2xl grayscale-[80%] hover:grayscale-0"
        src={image}
        alt={name}
        width={300}
        height={300}
      />
      <p className="text-center font-forum uppercase py-4 text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-900 to-blue-900">
        {name}
      </p>
    </div>
  );
};

export default TeamMember;
