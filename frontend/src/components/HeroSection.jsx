import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/background.png';
import coupleImage1 from '../assets/couple-1.png'; 
import coupleImage2 from '../assets/couple-2.png';
import memoryCollage from '../assets/memory-collage.png';
import butterflyImage from '../assets/butterfly.png';
import LoveLetter from '../pages/LoveLetter';  
import PhotoGallery from '../pages/PhotoGallery';
import MusicPlayer from '../pages/MusicPlayer';
import ThingsILove from '../pages/ThingsILove';
import LifeGoals from '../pages/LifeGoals';
import Footer from '../components/Footer';

const HeroSection = () => {
  return (
    <div className="text-white">
      {/* Floating Butterflies */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.img
            key={i}
            src={butterflyImage}
            alt="Butterfly"
            className="absolute w-12 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background (Shared Across Sections) */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`
        }}
      ></div>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-36 md:pt-44">
        <div className="container mx-auto text-center space-y-16 relative">
          {/* Images & Title */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <img 
              src={coupleImage1} 
              alt="Our memory" 
              className="hidden md:block w-32 h-32 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg fade-in"
            />
            <h1 className="text-5xl md:text-7xl font-['Love_Light'] bg-gradient-to-r from-[#ec082e] to-[#FAFFC5] text-transparent bg-clip-text leading-relaxed pt-2 whitespace-nowrap overflow-visible">
              To My Beloved Angel <span className="">Zineb</span>
            </h1>
            <img 
              src={coupleImage2} 
              alt="Our memory" 
              className="hidden md:block w-32 h-32 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg fade-in"
            />
          </div>

          {/* Quote Section */}
          <div className="max-w-4xl mx-auto mb-16 relative flex flex-col items-center">
            <img 
              src={memoryCollage} 
              alt="Love memories" 
              className="w-full h-64 object-cover rounded-lg shadow-xl opacity-90"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            text-4xl md:text-4xl font-light bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg 
            font-['Love_Light'] text-white glassmorphism">
             "I created this website just for you,
              to remind you every day how special you are to me—
              my one and only, my forever."
            </p>
          </div>

          {/* Love Letter Button Section */}
          <div className="mt-20 pb-16 text-center relative flex flex-col items-center gap-6"> 
            <div className="flex justify-center items-center gap-24 w-full">
              <div className="text-center font-['Love_Light'] animate-pulse">
                <p className="text-xl md:text-6xl bg-gradient-to-r text-white  bg-clip-text">
                  03
                </p>
                <p className="text-xl md:text-4xl bg-gradient-to-r text-white bg-clip-text">
                  Months Together
                </p>
                <p className="text-xl md:text-4xl bg-gradient-to-r text-white  bg-clip-text">
                  and I Want More
                </p>
              </div>

              <div className="text-center font-['Love_Light'] animate-pulse pl-64">
                <p className="text-4xl md:text-6xl bg-gradient-to-r text-white  bg-clip-text">
                  ∞
                </p>
                <p className="text-xl md:text-4xl bg-gradient-to-r text-white  bg-clip-text">
                  I Want to create 
                </p>
                <p className="text-xl md:text-4xl bg-gradient-to-r text-white  bg-clip-text">
                  Infinite Good
                </p>
                <p className="text-xl md:text-4xl bg-gradient-to-r text-white bg-clip-text">
                  Memories Together
                </p>
              </div>
            </div>

            {/* Centered Love Letter Button */}
            <a 
              href="#love-letter"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FF6B9A] via-[#FF4D80] to-[#FF2D66] 
              hover:from-[#FF2D66] hover:via-[#FF4D80] hover:to-[#FF6B9A] transition-all duration-300
              font-['Love_Light'] text-4xl shadow-lg hover:shadow-xl heartbeat glow-on-hover glow-on-scroll"
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </section>

      {/* LoveLetter Section */}
      <section id="love-letter" className="min-h-screen flex flex-col justify-center items-center px-6 pt-36 md:pt-44 pb-32">
        <LoveLetter />
      </section>

      {/* Music Player Section */}
      <section id="music-player" className="min-h-screen flex flex-col justify-center items-center px-6 pt-36 md:pt-44 pb-32">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-['Love_Light'] text-center 
        bg-gradient-to-r from-[#FAFFC5] to-[#ec082e] 
        text-transparent bg-clip-text mb-8 leading-snug md:leading-normal">
          Click Play and let the love flow ❤️
        </h2>
        <MusicPlayer />
      </section>

      {/* PhotoGallery Section */}
      <section id="photo-gallery" className="min-h-screen flex flex-col justify-center items-center px-6 pt-36 md:pt-44 pb-32">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-['Love_Light'] text-center 
        bg-gradient-to-r from-[#FAFFC5] to-[#ec082e] 
        text-transparent bg-clip-text mb-8 leading-snug md:leading-normal ">
          Happy Valentine&apos;s Day My Love ❤️
        </h2>
        <PhotoGallery />
      </section>
        
      {/* ThingsILove Section */}
      <section id="things-i-love" className="min-h-screen flex flex-col justify-center items-center px-6 pt-36 md:pt-44 pb-32">
       <h2 className="text-5xl md:text-6xl lg:text-7xl font-['Love_Light'] text-center 
        bg-gradient-to-r from-[#FAFFC5] to-[#ec082e] 
        text-transparent bg-clip-text mb-8 leading-snug md:leading-normal ">
          Things That I Love About You ❤️
        </h2>
        <ThingsILove />
      </section>

      {/* LifeGoals Section */}
      <section id="life-goals" className="min-h-screen flex flex-col justify-center items-center px-6 pt-36 md:pt-44 pb-32">
        <LifeGoals />
      </section>
    </div>
  );
};

export default HeroSection;