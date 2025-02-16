"use client";
import Image from "next/image";
import penPng from "../../assets/pen.svg"
import { useState } from "react";

export default function NavBar () {

  const [showMenu, setShowMenu] = useState("hidden");
  const handleOpenMenu = () => {
    console.log("clicking!")
    showMenu == "hidden" ? setShowMenu("") : setShowMenu("hidden");
  }

  return (

    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://manishlapasi.github.io/shriya-portfolio" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image src={penPng.src} alt="Pen Logo" width={50} height={50}/>
                <span className="self-center text-2xl whitespace-nowrap">Shriya</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false" onClick={() => handleOpenMenu()}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${showMenu}`} id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                    <a href="/shriya-portfolio" className="block py-2 px-3 text-gray-900 rounded-sm md:p-0 md:hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/shriya-portfolio/about" className="block py-2 px-3 text-gray-900 rounded-sm md:p-0 md:hover:underline">About Me</a>
                </li>
                <li>
                    <a href="/shriya-portfolio/portfolio" className="block py-2 px-3 text-gray-900 rounded-sm md:p-0 md:hover:underline">Portfolio</a>
                </li>
                <li>
                    <a href="/shriya-portfolio/blog" className="block py-2 px-3 text-gray-900 rounded-sm md:p-0 md:hover:underline">Blog</a>
                </li>
                <li>
                    <a href="/shriya-portfolio/contact" className="block py-2 px-3 text-gray-900 rounded-sm md:p-0 md:hover:underline">Contact</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}
