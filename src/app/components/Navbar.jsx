"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Services", path: "#services" },
  {title:"Products",path:"#product"},
  {title:"History",path:"#history"},
  { title: "Contact", path: "#contact" },
 
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#352f44]">
      <div className="flex container mx-auto items-center justify-between px-4 py-3 lg:py-4 text-[#dbd8e3]">
        <Link href="/" className="flex items-center">
          <img 
            src="./images/logo.png" 
            alt="Profile Picture" 
            className="w-12 h-12 md:w-20 md:h-20 rounded-full" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://via.placeholder.com/150"; 
            }} 
          />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-[#dbd8e3] hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-[#dbd8e3] hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:flex md:w-auto flex-grow justify-center">
          <ul className="flex space-x-6 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
