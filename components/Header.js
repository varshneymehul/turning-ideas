"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../public/logo.png";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Startups",
      link: "/startups",
    },
    {
      id: 3,
      name: "Enterprises",
      link: "/enterprises",
    },
    {
      id: 4,
      name: "Career",
      link: "/career",
    },
    {
      id: 5,
      name: "Blogs",
      link: "/blogs",
    },
    {
      id: 6,
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full px-4 py-2 bg-teal-100 sticky z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={logo} alt="logo" width={200} height={200} />
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex items-center text-lg">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105 hover:text-blue-700 transition-all duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
        <li>
          <Link href="/contact">
            <button className="rounded-2xl px-6 py-2 text-white bg-black hover:bg-blue-700 transition-all">
              Apply
            </button>
          </Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer r-0 z-10 text-blue-900 md:hidden"
      >
        {nav ? (
          <FaTimes className="text-white" size={30} />
        ) : (
          <FaBars size={30} />
        )}
      </div>

      {nav && (
        <div className="flex flex-col absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-900 justify-around px-4 to-gray-800 text-gray-100">
          <ul>
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-2 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/apply">
                <button className="rounded-full px-8 py-4 text-4xl text-white bg-black hover:bg-blue-700 transition-all">
                  Apply
                </button>
              </Link>
            </li>
          </ul>
          <div className="flex">
            <FaFacebook className="text-4xl m-3 text-white hover:cursor-pointer transition-all hover:text-blue-600" />
            <FaLinkedin className="text-4xl m-3 text-white hover:cursor-pointer transition-all hover:text-blue-900" />
            <FaInstagram className="text-4xl m-3 text-white hover:cursor-pointer transition-all hover:text-pink-500" />
            <FaWhatsapp className="text-4xl m-3 text-white hover:cursor-pointer transition-all hover:text-green-500" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
