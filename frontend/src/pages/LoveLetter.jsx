import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heartDecor from "../assets/butterfly.png";
import loveBackground from "../assets/background.png";
import customEnvelopeImage from "../assets/open-heart.png";
import paperTexture from "../assets/paper-texture.png";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const envelopeVariants = {
    closed: { scale: 1, rotate: 0 },
    open: { scale: 0.8, rotate: -5, transition: { type: "spring", stiffness: 100 } },
  };

  const letterVariants = {
    closed: { opacity: 0, y: 100, scale: 0.5 },
    open: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      id="love-letter"
      className="min-h-screen flex items-center justify-center px-6 py-16 relative pt-24"
      style={{
        paddingTop: '6rem',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${loveBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.img
            key={i}
            src={heartDecor}
            alt="Floating heart"
            className="absolute opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 20}px`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <AnimatePresence>
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ scale: 0 }}
              animate="closed"
              exit="open"
              variants={envelopeVariants}
              className="cursor-pointer flex flex-col items-center justify-center"
              onClick={() => setIsOpen(true)}
            >
              <motion.img
                src={customEnvelopeImage}
                alt="Open envelope"
                className="w-64 h-48 rounded-lg shadow-2xl object-cover"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              />
              <motion.p
                className="mt-4 text-white text-6xl font-['Love_Light'] italic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Click to Open My Heart
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial="closed"
              animate="open"
              exit="closed"
              variants={letterVariants}
              className="max-w-3xl bg-white p-10 md:p-14 rounded-2xl shadow-2xl text-center relative border-2 border-[#FF4D80]"
              style={{ backgroundImage: `url(${paperTexture})`, backgroundSize: "cover" }}
            >
              <h2 className="text-5xl font-['Love_Light'] text-[#FF4D80] mb-6">
                My Dearest Zineb
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-3xl font-['Great_Vibes']">
                <p>My Love, My Heart, My Everything,</p>
                <p>
                Zineb lhbiba diali 3omri o l9elb diali , makntch kans7abek gha dokhli l7yati o ghatghiyriha htal had daraja welat kter mn en rose kima kigolo , kolchi bda bsodfa o kant a7ssen sodfa trat liya f7yati bghitek b3e9le9 o bzinek o b3afwiytek kheliti dima ayami a7la o ajmal. Fach kanfi9 o kanl9a les msgs dialek kanzid nchet o kola mera kanchofhom kanfre7 o kan3ref bli welat 3ndi insana jdida f7yati li imken liya n3awd liha kolchi 3liya o bach kan7es o fach kanfeker. Nti hiya l9amar diali o chmicha diali li mdewya 3liya nti l9amar o nojom li fsma. Ghaf 3 mois dwznaha o ba9i hta matchawfna o welit kanbghik bzff gha goli liya kiderti liha ahahhahahah mohim ma3lina ana dima ghangolik bli macha3ir diali sadi9a o mafihach chek ounti makatiy9ich hderti kayban lik hadchi khayal o awham. kanti9 fik o ntmena matkhonich ti9a diali o l7ob diali lik o 

                kantmena ti9i fiya tanti o t3tini 7obek kaml. Kol kena 9rab lbe3diyatna kol ditek khteftek lchi blasa b3ida nkono fiha gha 7na n3so fo9 rbi3 onb9aw ntmendro fsma hit kat3jbna bjoj omb3d ndik lz3loula o nmchiw naklo f2a7ssen blasa bghitiha. Bghit ndir m3ak ch7al mn haja ondewez m3ak we9t kter a hbiba diali. Mohim insha allah 3arf dak nhar ghayji o ghankono fr7anin fih bjoj bzff. Ti9i frasek 7it 9adra 3la ay haja koni dima 9wiya o ma3mrek tiy7i idik lerd ana ghatl9ayni dima m3ak fjnbek la7tajiti l2ay haja kanbghik bzff bzff. 

                </p>
              </div>
              <div className="mt-8 flex items-center justify-center space-x-4">
                <div className="h-px bg-[#FF4D80] flex-1" />
                <span className="text-[#FF4D80] font-['Love_Light'] text-5xl">
                  Forever Yours
                </span>
                <div className="h-px bg-[#FF4D80] flex-1" />
              </div>
              <p className="mt-4 text-4xl text-[#FF4D80] font-['Love_Light']">Walid</p>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                className="mt-6 px-6 py-2 bg-[#FF4D80] text-white rounded-full text-lg font-['PlayFair_Display'] shadow-lg transition-all"
              >
                Close Letter
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoveLetter;
