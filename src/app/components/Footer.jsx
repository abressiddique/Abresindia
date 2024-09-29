import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-gray-700 border-l-transparent border-r-transparent text-gray-300 bg-[#352f44]">
      <div className="container p-6 flex flex-col lg:flex-row justify-between">
        {/* Brand and Copyright Section */}
        <div className="mb-6 lg:mb-0">
          <span className="font-bold text-lg">Abres India</span>
          <p className="text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col mb-6 lg:mb-0 space-y-2">
          <p className="text-gray-300">
            Contact:{" "}
            <a href="mailto:Abresindia@gmail.com" className="underline hover:text-white">
              Abresindia@gmail.com
            </a>
          </p>
          <p className="text-gray-300">Location: Mumbai, Maharashtra | Prayagraj, Uttar Pradesh</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col mb-6 lg:mb-0">
          <h4 className="font-bold">Follow Us</h4>
          <div className="flex justify-start lg:justify-end mt-4 space-x-2">
            {/* Using emojis instead of icons */}
            <a href="https://linkedin.com/in/abresindia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              🤝 {/* LinkedIn emoji */}
            </a>
            <a href="https://facebook.com/abresindia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              📘 {/* Facebook emoji */}
            </a>
            <a href="https://www.instagram.com/abresessential?igsh=MTNqcjlmeXYybTczNQ==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              📷 {/* Instagram emoji */}
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy and Terms */}
      <div className="flex justify-center mt-4">
        <p className="text-gray-500 text-sm">
          <a href="#" className="text-gray-300 hover:text-white underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-gray-300 hover:text-white underline ml-2">
            Terms of Service
          </a>
        </p>
      </div>

      {/* Made by Section */}
      <div className="flex justify-center mt-4">
        <p className="text-gray-400 text-sm">Made with ❤️ by Rida & Abres</p>
      </div>
    </footer>
  );
};

export default Footer;
