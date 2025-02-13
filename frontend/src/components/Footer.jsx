import React from "react";
import { FaHeart } from "react-icons/fa";
import bgImage from "../assets/background.png"; // Ensure the image is in the assets folder

const Footer = () => {
  return (
    <footer
      className="relative text-white text-center p-6 mt-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Soft Blur Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block">
        <div className="flex justify-center items-center space-x-2 text-lg font-semibold">
          <FaHeart className="text-red-300 animate-pulse" />
          <span>
            Made with Love for <span className="font-bold">Zineb </span>
          </span>
          <FaHeart className="text-red-300 animate-pulse" />
        </div>
        <p className="text-sm opacity-80 mt-2">
          Forever Us © {new Date().getFullYear()} | Walid Yugen All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
