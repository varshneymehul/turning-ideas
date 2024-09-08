"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

// import "@splidejs/react-splide/css/core";

import BuildWithUsCard from "@/components/Home/BuildWithUsCard";

import hero from "@/public/img/hero-1.png";
import startupImg from "@/public/img/home/startup-img.jpg";
import enterpriseImg from "@/public/img/home/enterprise-img.jpg";


import yourstoryNews from "@/public/img/home/buzz/yourstoryNews.png";
import businessStandardNews from "@/public/img/home/buzz/businessStandardNews.png";
import timesofindiaNews from "@/public/img/home/buzz/timesofindiaNews.png";
import vccircleNews from "@/public/img/home/buzz/vccircleNews.png";
import vccircleNews2 from "@/public/img/home/buzz/vccircleNews2.png";
import economictimesNews from "@/public/img/home/buzz/economictimesNews.png";
import VenturesCarousel from "@/components/VenturesCarousel";

export default function Home() {
  
  const partners = [
    // public/img/partners/aws.png public/img/partners/elephant.png public/img/partners/google.png public/img/partners/ideafoundry.png public/img/partners/mbr.png public/img/partners/mqdc.png public/img/partners/tbdc.png
    // partner images are given above, now generate objects
    {
      src: "/img/partners/aws.png",
      title: "AWS",
    },
    {
      src: "/img/partners/elephant.png",
      title: "Elephant",
    },
    {
      src: "/img/partners/google.png",
      title: "Google",
    },
    {
      src: "/img/partners/ideafoundry.png",
      title: "Ideafoundry",
    },
    {
      src: "/img/partners/mbr.png",
      title: "M.B.R",
    },
    {
      src: "/img/partners/mqdc.png",
      title: "MQDC",
    },
    {
      src: "/img/partners/tbdc.png",
      title: "TBDC",
    },
  ];
  const buzz = [
    {
      src: yourstoryNews,
      title: "Yourstory",
      href: "https://yourstory.com",
    },
    {
      src: businessStandardNews,
      title: "Business Standard",
      href: "https://www.business-standard.com",
    },
    {
      src: timesofindiaNews,
      title: "Times of India",
      href: "https://timesofindia.indiatimes.com",
    },
    {
      src: vccircleNews,
      title: "VCCircle",
      href: "https://www.vccircle.com",
    },
    {
      src: vccircleNews2,
      title: "VCCircle",
      href: "https://www.vccircle.com",
    },
    {
      src: economictimesNews,
      title: "Economic Times",
      href: "https://economictimes.indiatimes.com",
    },
  ];
  return (
    <main className="">
      <section
        style={{
          backgroundColor: "#99ffce",
          backgroundImage: `
        radial-gradient(at 94% 72%, hsla(171,85%,89%,1) 0px, transparent 50%),
        radial-gradient(at 84% 20%, hsla(171,85%,89%,1) 0px, transparent 50%),
        radial-gradient(at 19% 10%, hsla(171,85%,89%,1) 0px, transparent 50%),
        radial-gradient(at 17% 78%, hsla(199,90%,71%,1) 0px, transparent 50%)
    `,
        }}
        className="bg-teal-100 pt-[20vh] lg:h-[90vh] flex flex-col md:flex-row rounded-b-3xl px-4 md:px-12 justify-center items-center"
      >
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl">
            We are going to build your tech startup from{" "}
            <span
              className={
                "text-sky-700 text-3xl md:text-6xl font-bold font-smooch"
              }
            >
              scratch
            </span>
          </h1>
          <h2 className={"uppercase text-2xl md:text-3xl font-forum"}>
            From Day 0 to Greatness
          </h2>
          <p className="text-lg md:text-2xl md:w-3/5 py-4">
            We invest in people. People with the ambition to build large
            companies. <br />
          </p>
          <button className="relative transition-all inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 ease-in duration-150 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Apply
            </span>
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            className="rounded-3xl md:h-auto h-[50vh] object-contain"
            src={hero}
            alt="hero"
            width={800}
            height={800}
          />
        </div>
      </section>

      {/* Startups and Enterprises */}
      <section className="px-4 my-12">
        <h1 className="text-2xl md:text-5xl text-center font-forum py-2 md:py-6">
          WE BACK TOP TALENT TO BUILD GREAT COMPANIES
        </h1>
        <p className="text-lg md:text-xl text-center px-3 md:px-8 lg:px-40">
          Fuel your business innovation and growth with our expert-driven
          partnerships. For startups, we offer validation, product development,
          and a clear path to scaling success. For established businesses, we
          match you with innovative startups that deliver creative,
          out-of-the-box solutions tailored to your toughest challenges.
          Together, we help you unlock new opportunities and accelerate your
          journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-center gap-4 m-4">
          <BuildWithUsCard
            href="/startups"
            src={startupImg}
            title="Startups"
            subheading="Co-building scalable startups with expert validation, product development, and growth acceleration."
            description="Partner with us to transform your idea into a scalable business. Our team brings years of experience in technology, sales, and strategy to help validate, refine, and build your startup. Together, we'll accelerate your growth and guide you through raising capital."
          />
          <BuildWithUsCard
            href="/enterprises"
            src={enterpriseImg}
            title="Enterprises"
            subheading="Accelerating business innovation by connecting you with the right startups for disruptive solutions."
            description="Unlock immediate business growth through innovative startup partnerships. We match your company with startups that offer out-of-the-box solutions and disruptive products. Let us handle the ideation and problem-solving to drive your business forward."
          />
        </div>
      </section>

      {/* Ventures */}
      <section className="bg-sky-100 py-6">
        <h1 className="text-3xl md:text-5xl text-center font-forum py-4 md:py-12">
          WE BUILD VENTURES. WE BUILD SUCCESS.
        </h1>
        <p className="text-lg md:text-xl text-center px-3 md:px-8 lg:px-40">
          Our diverse portfolio showcases successful collaborations with a range
          of startups and businesses across industries. From tech-driven
          innovations to disruptive solutions, we&apos;ve helped co-build and
          scale ventures that are making a real impact. Each partnership
          reflects our commitment to turning bold ideas into thriving
          businesses.
        </p>
       
        <VenturesCarousel/>
      </section>

      {/* Partners (carousel) */}
      <section className="py-6  my-4">
        <h1 className="text-2xl md:text-5xl text-center font-forum py-6 md:py-12">
          OUR GlOBAL PARTNERS
        </h1>
        <p className="text-lg md:text-xl text-center px-3 md:px-8 lg:px-40">
          Our diverse portfolio showcases successful collaborations with a range
          of startups and businesses across industries. From tech-driven
          innovations to disruptive solutions, we&apos;ve helped co-build and
          scale ventures that are making a real impact. Each partnership
          reflects our commitment to turning bold ideas into thriving
          businesses.
        </p>
        <div className="splide-fade-wrapper">
          <div className="splide-fade-overlay-left__partners"></div>
          <div className="splide-fade-overlay-right__partners"></div>
          <Splide
            className="md:m-12"
            options={{
              padding: "5rem",
              type: "loop",
              drag: "free",
              arrows: false,
              focus: "center",
              perPage: 5,
              perMove: 1,
              gap: "1rem",
              pagination: false,
              breakpoints: {
                768: {
                  perPage: 3,
                },
                1024: {
                  perPage: 4,
                },
              },
            }}
            extensions={{ AutoScroll }}
            aria-label="Partners"
          >
            {partners.map((partner) => (
              <SplideSlide key={partner.title}>
                <Image
                  width={1000}
                  height={1000}
                  className="h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  src={partner.src}
                  alt={partner.title}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>

      {/* Buzz */}
      <section className="my-6">
        <h1 className="text-2xl md:text-5xl text-center font-forum py-4 md:py-8">
          WE CREATE BUZZ.
        </h1>
        <p className="text-lg md:text-xl text-center px-3 md:px-8 lg:px-40">
          We are on a mission to help startups and businesses build their
          businesses. We are on a mission to help startups and businesses build
        </p>

        {/* <div className="flex h-full w-full items-center justify-center">
          <div className="grid h-full w-full gap-4 bg-gray-200 p-2 grid-cols-4 grid-rows-7 ">
            <div className="col-span-4 row-span-1 bg-pink-200  flex items-center justify-center">
              <p>
              <Image 
              </p>
            </div>

            <div className="col-span-2 row-span-2 bg-lime-200  flex items-center justify-center">
              <p>Broccoli</p>
            </div>

            <div className="col-span-2 row-span-4 bg-yellow-200  flex items-center justify-center">
              <p>Tamago</p>
            </div>

            <div className="col-span-2 row-span-4 bg-tan-200  flex items-center justify-center">
              <p>Pork</p>
            </div>

            <div className="col-span-2 row-span-2 bg-green-200  flex items-center justify-center">
              <p>Edamame</p>
            </div>
          </div>
        </div> */}

        {/* Bento grid */}
        {/* <div className="flex h-full w-full items-center justify-center">
          <div className="grid h-full w-full gap-4 bg-gray-200 p-2 grid-cols-4 grid-rows-7">
            <div className="col-span-4 row-span-1 bg-pink-200  flex items-center justify-center">
              {
                <Image
                  className="h"
                  width={1000}
                  height={1000}
                  src={buzz[1].src}
                  alt="logo"
                />
              }

            </div>

            <div className="col-span-2 row-span-2 bg-lime-200  flex items-center justify-center">
              <p>
                {
                  <Image
                    className="h"
                    width={1000}
                    height={1000}
                    src={buzz[0].src}
                    alt="logo"
                  />
                }
              </p>
            </div>

            <div className="col-span-2 row-span-4 bg-yellow-200 flex items-center justify-center">
              <p>
                {
                  <Image
                    className="h"
                    width={1000}
                    height={1000}
                    src={buzz[3].src}
                    alt="logo"
                  />
                }

              </p>
            </div>

            <div className="col-span-2 row-span-4 bg-tan-200  flex items-center justify-center">
              <p>
                {
                  <Image
                    className="h"
                    width={1000}
                    height={1000}
                    src={buzz[4].src}
                    alt="logo"
                  />
                }

              </p>
            </div>

            <div className="col-span-2 row-span-2 bg-green-200  flex items-center justify-center">
              <p>
                {
                  <Image
                    className="h"
                    width={1000}
                    height={1000}
                    src={buzz[5].src}
                    alt="logo"
                  />
                }

              </p>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
