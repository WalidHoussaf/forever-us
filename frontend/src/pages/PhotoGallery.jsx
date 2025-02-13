import React from "react";
import { motion } from "framer-motion";
import mainImage from "../assets/main.png"; 

const PhotoGallery = () => {
  return (
    <div className="w-full flex justify-center">
      {/* Blurry Smokey Background */}
      <div className="absolute w-[95%] max-w-5xl h-[80%] bg-pink opacity-20 blur-3xl rounded-full"></div>

      {/* Enlarged Main Image with Soft Glow */}
      <motion.img
        src={mainImage}
        alt="Romantic"
        className="relative w-[90%] max-w-3xl h-auto rounded-2xl shadow-lg mt-8"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255, 182, 193, 0.8)" }} 
      />
    </div>
  );
};

export default PhotoGallery;
