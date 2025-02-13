import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/love-background.png";

const loveItems = [
  "De7ka dialek ol happy vibes li fik.",
  "Kat7esini bli l7ayat bhal lmagic.",
  "Tari9a li katsupportini biha.",
  "Nti l bestfriend diali o soulmate diali.",
  "Kan7es bli rak 7nina o waarm.",
  "Sexiness ol jamal dialek tab3an.",
  "Mtebta o m2adba m3aya.",
  "Kat7tarmini o katsem3i lhdrti.",
  "Tamou7a o bagha twesli f7yatek Keep Going.",
  "Kola nhar m3ak hdiya kbira 3ndi.",
  "3ziz 3lik challenge olmoghamara.",
  "Wakha makat3rfich teybi mais kanbghik o wat9 fik."
];

const ThingsILove = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative rounded-3xl overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <h2 className="text-5xl font-['Sacramento'] bg-gradient-to-r from-[#FAFFC5] to-[#ec082e] text-transparent bg-clip-text mb-10 shadow-lg px-6 py-3 bg-white/60 backdrop-blur-md rounded-lg">
         Well I Love Everything About You 
      </h2>
      
      {/* Love Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {loveItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 text-center border border-red-300 transform hover:scale-105 transition-all duration-300 backdrop-blur-md bg-white/50"
            whileHover={{ scale: 1.08 }}
          >
            <p className="text-4xl font-['Sacramento'] text-red-800">{index + 1}) {item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThingsILove;
