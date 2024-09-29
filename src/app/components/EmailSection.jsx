"use client"; // Add this at the top to make it a Client Component

import React, { useState } from "react";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import FacebookIcon from "../../../public/facebook-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-40 gap-4 relative"
      style={{ marginTop: '1rem' }} // Add margin-top to push the section below the header
    >
      <div className="z-0">
        <h5 className="text-xl font-bold text-white my-2">Get in Touch</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          At Abres India, we’re passionate about crafting high-quality fabrics that merge tradition and innovation. If you have any inquiries or would like to explore potential collaborations, don’t hesitate to contact us!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://linkedin.com/in/abresindia" target="_blank">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
          <Link href="https://facebook.com/abresindia" target="_blank">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
          <Link href="https://www.instagram.com/abresessential?igsh=MTNqcjlmeXYybTczNQ==" target="_blank">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="yourname@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Inquiry about services"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className=" bg-[#352f44] hover:bg-gray-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>

          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
