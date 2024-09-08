'use client';
import React from "react";
import VenturesCard from "@/components/Home/VenturesCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


import yourSpaceImg from "@/public/img/ventures/yourspace.png";
import swagBagImg from "@/public/img/ventures/swagbag.png";
import realtellImg from "@/public/img/ventures/realtell.png";
import easemygst from "@/public/img/ventures/easemygst.png";

const VenturesCarousel = () => {
  const ventures = [
    {
      src: swagBagImg,
      title: "Swag Bag",
      description: "We discover what gets liked in your retail store",
    },
    {
      src: realtellImg,
      title: "Real Tell",
      description: "Gamifying offline retail to drive store footfall.",
    },
    {
      src: easemygst,
      title: "Ease My GST",
      description: "We make GST Filing easy for you using technology.",
    },
    {
      src: yourSpaceImg,
      title: "Your Space",
      description:
        "India's premier student housing brand. Award winning student experience.",
    },
  ];
  return (
    <div className="splide-fade-wrapper">
      <div className="splide-fade-overlay-left"></div>
      <div className="splide-fade-overlay-right"></div>

      <Splide
        className="m-12"
        options={{
          padding: "5rem",
          type: "loop",
          drag: "free",
          arrows: false,
          autoplay: true,
          focus: "center",
          perPage: 3,
          perMove: 1,
          gap: "1rem",
          pagination: false,
          breakpoints: {
            768: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        }}
        aria-label="Ventures"
      >
        {ventures.map((venture) => (
          <SplideSlide key={venture.title}>
            <VenturesCard
              key={venture.title}
              src={venture.src}
              title={venture.title}
              description={venture.description}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default VenturesCarousel;
