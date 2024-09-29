"use client";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#5c5470" }}>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Left side image */}
        <div className="col-span-12 sm:col-span-5 place-self-center">
          <img
            src="./images/abresindialogo.png"  // Ensure this path starts with a dot
            alt="Abres India"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right side text */}
        <div className="col-span-12 sm:col-span-7 text-center sm:text-left">
          <h1 className="text-[#dbd8e3] mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Welcome to <span className="text-white font-bold">Abres India</span>
          </h1>

          <p className="text-[#dbd8e3] text-base sm:text-lg mb-4 lg:text-xl">
            We have been proud contributors to the fashion world since 1984. Since then, we have introduced new designs, concepts, and styles that have shaped the fashion industry. Our mission is to continue innovating and delivering high-quality clothing for years to come.
          </p>
          <p className="text-[#dbd8e3] text-base sm:text-lg mb-4 lg:text-xl">
            Specializing in female clothing, we craft elegant formal shirts, kurtis, jeans, and denim pants, blending tradition with contemporary fashion. If you're interested in bulk purchases, feel free to contact us at{" "}
            <a 
              href="mailto:abresindia@gmail.com" 
              className="text-blue-400 underline" // Updated color to blue
            >
              abresindia@gmail.com
            </a>
            .
          </p>
          <p className="text-[#dbd8e3] text-base sm:text-lg mb-6 lg:text-xl">
            At Abres India, we are committed to providing classy and fancy clothing at wholesale rates. Whether you're looking for something modern, elegant, or unique, we offer a variety of designs to meet your needs. Connect with us today!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center">
            <Link
              href="/#contact"
              className="px-6 py-3 h-12 rounded-full bg-[#352f44] hover:bg-gray-500 text-white font-semibold sm:mr-6 flex items-center justify-center"
              style={{ lineHeight: 'normal' }}
            >
              Let’s Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
