import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Startups",
      link: "/startups",
    },
    {
      name: "Enterprises",
      link: "/enterprises",
    },
    {
      name: "Career",
      link: "/career",
    },
    {
      name: "Blog",
      link: "/blogs",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div className="bg-teal-100 px-6 py-4 md:py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-around">
        <div className="mx-auto md:mx-0 py-4">
          <Image src={logo} alt="logo" width={200} height={200} />
          <div className="flex">
            <FaFacebook className="text-2xl m-3 hover:cursor-pointer transition-all hover:text-blue-600" />
            <FaLinkedin className="text-2xl m-3 hover:cursor-pointer transition-all hover:text-blue-900" />
            <FaInstagram className="text-2xl m-3 hover:cursor-pointer transition-all hover:text-pink-500" />
            <FaWhatsapp className="text-2xl m-3 hover:cursor-pointer transition-all hover:text-green-500" />
          </div>
        </div>
        <div>
          {/* <h1 className="text-white text-bold text-xl md:mt-6">Company</h1> */}

          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.link} className="text-xl hover:text-blue-700 transition-all">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:mr-24 py-4">
          <p className="ml-1  text-bold text-xl">
            We&apos;d love to work with you!{" "}
          </p>
          <button className="bg-black w-fit mx-auto  px-4 py-2 rounded-3xl mt-2 hover:cursor-pointer hover:bg-blue-800 text-white transition-all">
            Get in touch
          </button>
        </div>
      </div>

      <div className="border-y border-y-teal-700 py-4 items-center justify-between w-full mt-6">
        <div className="flex items-center justify-start gap-x-4">
          <a href="/legal/terms" className=" text-sm">
            Terms &amp; Conditions
          </a>
          <a href="/legal/privacy" className="text-sm">
            Privacy Policy
          </a>
        </div>
        <p className="text-sm">
          © Turning Ideas Ventures 2024. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
