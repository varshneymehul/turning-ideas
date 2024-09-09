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
import yourstoryImg from "@/public/img/home/media_logos/yourstory.png";
import businessStandardImg from "@/public/img/home/media_logos/business_standard.png";
import etImg from "@/public/img/home/media_logos/et.png";
import toiImg from "@/public/img/home/media_logos/toi.png";
import vccImg from "@/public/img/home/media_logos/vcc.png";
import techCircleImg from "@/public/img/home/media_logos/tech_circle.png";
import BuzzTile from "@/components/BuzzTile";
import FAQCard from "@/components/FAQCard";

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
      logo: yourstoryImg,
      headlineImg: yourstoryNews,
      newsOutlet: "Yourstory",
      headline: "'No idea is bad, it is great if you can begin thinking'",
      href: "https://yourstory.com/2016/06/ashish-mittal-turningideas-incubator",
    },
    {
      logo: businessStandardImg,
      headlineImg: businessStandardNews,
      newsOutlet: "Business Standard",
      headline:
        "TurningIdeas Launches Enterprise Innovation Program to Accelerate Startup Growth",
      href: "https://www.business-standard.com/article/pti-stories/turningideas-launches-enterprise-innovation-program-to-accelerate-startup-growth-119050700191_1.html",
    },
    {
      logo: toiImg,
      headlineImg: timesofindiaNews,
      newsOutlet: "Times of India",
      headline:
        "Bennett University's students rocked the Round the Clock Bootcamp by Whizdom",
      href: "https://timesofindia.indiatimes.com/home/education/news/bennett-universitys-students-rocked-the-round-the-clock-bootcamp-by-mqdc-whizdom/articleshow/74175370.cms",
    },
    {
      logo: vccImg,
      headlineImg: vccircleNews,
      newsOutlet: "VCCircle",
      headline:
        "Incubation platform TurningIdeas launches Angel investor network",
      href: "https://www.vccircle.com/exclusive-incubation-platform-turningideas-launches-angel",
    },
    {
      logo: techCircleImg,
      headlineImg: vccircleNews2,
      newsOutlet: "VCCircle",
      headline: "Student housing startup YourSpace raises angel funding",
      href: "https://www.vccircle.com/exclusive-student-housing-startup-your-space-raises-angel-funding",
    },
    {
      logo: etImg,
      headlineImg: economictimesNews,
      headline:
        "Turningideas launches GoGlobal Program to accelerate startup growth",
      newsOutlet: "Economic Times",
      href: "https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/turningideas-launches-goglobal-program-to-accelerate-startup-growth/articleshow/69200477.cms",
    },
  ];
  const faqs = [
    {
      question: "What is the difference between startup studio and incubator?",
      answer:
        "The main difference between a studio and accelerators or incubators is that the studio acts as a co-founder and builder of startups. It’s not just about giving money and mentoring, but about exploring markets, creating ideas, and building them into products and companies.",
    },
    {
      question:
        "How is a venture builder different from a venture capital model?",
      answer:
        "A venture builder provides resources, infrastructure, networks, and experience to help entrepreneurs grow their ideas from conception to scale. This contrasts with a venture capital model where investors distribute capital hoping one in several ideas will succeed. Venture builders offer more than just capital; they provide hands-on support to enhance the chances of success.",
    },
    {
      question: "Why should entrepreneurs work with startup studios?",
      answer:
        "Entrepreneurs should work with startup studios for diversification and failure tolerance. Startup studios are idea-generation and validation engines that help trash weak ideas quickly. They offer a core team that ensures stronger ideas are nurtured into successful businesses.",
    },
    {
      question: "How does the startup studio model work?",
      answer:
        "The startup studio model is hands-on, where experienced entrepreneurs work alongside the company's founders. All startups have access to a shared pool of services, such as legal advice, financial expertise, talent acquisition, and marketing provided by the studio's core team.",
    },
    {
      question:
        "What is the commercial model of engagement with a startup studio?",
      answer:
        "In exchange for their support, startup studios typically take a majority stake in the company they help build. Entrepreneurs give up a larger share of their company earlier in the process in return for guaranteed support and increased chances of success.",
    },
    {
      question: "Why do investors love working with studios?",
      answer:
        "Investors prefer studios because they offer one-to-many investing, reducing the impact of failure and providing quicker recovery and restart times. Studios give higher levels of control and governance, leading to a higher probability of success and potentially larger returns at exit.",
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
          WE BUILD VENTURES. WE BUILD{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-700 bg-[length:200%_auto] animate-gradient">
            SUCCESS.
          </span>
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
      <section className="my-12">
        <h1 className="text-4xl gap-4 md:text-5xl text-center font-forum py-4 md:py-8">
          WE CREATE{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:200%_auto] animate-gradient">
            BUZZ
          </span>
          .
        </h1>
        <p className="text-lg md:text-xl text-center px-3 md:px-8 lg:px-40 mb-4"></p>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-4 place-items-center">
          {buzz.map((buzz) => (
            <BuzzTile key={buzz.headline} {...buzz} />
          ))}
        </div>
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

      {/* FAQS */}
      <section className="my-12 py-8 md:py-12 ">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 ">
          <h1 className="text-4xl md:text-5xl text-center font-forum">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
            Your questions, answered
          </h2>
        </div>

        <div className="md:w-3/4 mx-auto">
          {faqs.map((faq) => (
            <FAQCard key={faq.question} {...faq} />
          ))}
        </div>
      </section>
    </main>
  );
}
