"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import VenturesCarousel from "@/components/VenturesCarousel";
import JourneyTile from "@/components/JourneyTile";
import WhatCard from "@/components/WhatCard";

import hero2 from "@/public/img/hero-2.png";
import star from "@/public/img/star.png";
import step1 from "@/public/img/journey/startups/1.jpg";
import step2 from "@/public/img/journey/startups/2.jpg";
import step3 from "@/public/img/journey/startups/3.jpg";
import step4 from "@/public/img/journey/startups/4.jpg";
import InterestedCTA from "@/components/InterestedCTA";

const Startups = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newOffset = (window.scrollY / 5) % 360;
      console.log(newOffset);
      if (newOffset > 600) {
        setOffset(600);
      } else {
        setOffset(newOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="pt-[10vh] text-lg">
      {/* Hero */}
      <section
        style={{
          backgroundImage: `url(${hero2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "90vh",
        }}
        className="py-8 px-10 md:px-24 h-[90vh]"
      >
        <div className="h-full flex flex-col justify-center">
          <div className="absolute right-0 top-[10vh] bg-gradient-to-b from-teal-100 to-transparent h-1/2 w-full"></div>
          <h1 className="text-3xl md:text-5xl font-forum">
            WE PARTNER WITH FOUNDERS
          </h1>
          <h2 className="text-2xl md:text-4xl ">
            to build
            <span className="font-smooch text-3xl md:text-5xl"> ventures</span>
          </h2>
        </div>
      </section>

      {/* What and how? */}
      <section className="px-6 py-8 sm:grid sm:grid-cols-2 mx-4 sm:mx-24 md:mx-32">
        <WhatCard
          type="what"
          text="Struggling to find your startup team or scale your Idea? Don't worry we can be your partners. We bring an experience like no other. From validation of your ideas to help in developing your product,sales acceleration and raising capital, we help co-build scalable startups."
        />
        <WhatCard
          type="how"
          text="With dream team of complementing skills around technology, sales, strategy and years of experience, we have learned how to rapidly validate, refine, and build new businesses. We work with you as your co-founding team and put ideas through rigorous process to make it happen."
        />
      </section>

      <div className="text-center mb-12">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-110 transition-all">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black hover:bg-gradient-to-r from-indigo-900 to-blue-900 transition-all px-12 py-1 text-xl font-medium text-white backdrop-blur-3xl">
            Apply
          </span>
        </button>
      </div>

      {/* Process */}
      <section className="py-8 bg-teal-950">
        <h1 className="text-3xl md:text-5xl py-6 md:py-12 font-forum text-center uppercase text-white">
          How we do it?
        </h1>
        <div className="flex h-full">
          <div className="w-1/5 md:w-1/6">
            <Image
              className={`sticky mx-auto top-96 z-10`}
              style={{
                rotate: `${offset}deg`,
              }}
              src={star}
              alt="star"
              width={100}
              height={100}
            />
            <hr className="border-l-2 -translate-y-20 translate-x-1/2 border-t-0 border-slate-300 h-full" />
          </div>
          <div className="w-4/5 md:w-5/6">
            <JourneyTile
              src={step1}
              title="01. IDEATION"
              subheading="It's not about the idea"
              description="All Ideas should start with real business problem. We aim to build world-changing commercially viable ventures that customers love from Ideas which can be yours or ours."
            />
            <JourneyTile
              src={step2}
              title="02. VALIDATION"
              subheading="Because we know 92% ideas fail"
              description="Before we put our heads-down and start investing in venture we put an idea through its paces, testing customer demand, technical feasibility, business model, unit economics, market dynamics, investor interest, and more."
            />
            <JourneyTile
              src={step3}
              title="03. SALES ACCELERATION"
              subheading="It's difficult to build, It's challenging to sell"
              description="With our decades of sales experience and strong access to corporate C-level decision-maker, we help accelerate your sales.Be it your future customers, partners or resellers, we connect you with each necessary stakeholders."
            />
            <JourneyTile
              src={step4}
              title="04. FUNDRAISE"
              subheading="We connect right ventures to right investors"
              description="Our global Investor and incubator partner ecosystem helps us to raise funds for our ventures. We help create commercially viable businesses which investors are keen to invest."
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}

      <section className="bg-sky-100 py-6">
        <h1 className="text-3xl md:text-5xl text-center font-forum py-4 md:py-12">
          SUCCESS STORIES
        </h1>
        <p className="text-lg md:text-xl text-center px-3 md:px-8 lg:px-40">
          Our diverse portfolio showcases successful collaborations with a range
          of startups and businesses across industries. From tech-driven
          innovations to disruptive solutions, we&apos;ve helped co-build and
          scale ventures that are making a real impact. Each partnership
          reflects our commitment to turning bold ideas into thriving
          businesses.
        </p>

        <VenturesCarousel />
      </section>

      {/* Interested CTA */}
      <InterestedCTA />
    </main>
  );
};

export default Startups;
