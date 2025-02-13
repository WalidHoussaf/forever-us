import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import background from "../assets/background.png";
import heartImage from "../assets/heart.png";
import heartButton from "../assets/heart.png";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const createShowerElement = (imageSrc) => {
    const element = document.createElement("img");
    element.src = imageSrc;
    element.style.position = "fixed";
    element.style.left = Math.random() * window.innerWidth + "px";
    element.style.top = "-50px";
    element.style.width = Math.random() * 30 + 20 + "px";
    element.style.opacity = Math.random();
    element.style.animation = "fall 5s ease-in-out";
    element.style.transform = `rotate(${Math.random() * 360}deg)`;
    element.style.zIndex = "9999";
    document.body.appendChild(element);

    setTimeout(() => {
      element.remove();
    }, 4000);
  };

  const startShower = () => {
    for (let i = 0; i < 25; i++) {
      setTimeout(() => createShowerElement(heartImage), i * 120);
    }
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveItem(id);
    }
  };

  const menuItems = [
    { name: "Home", path: "home" },
    { name: "Love Letter", path: "love-letter" },
    { name: "Music Player", path: "music-player" },
    { name: "Photo Card", path: "photo-gallery" },
    { name: "Things I Love", path: "things-i-love" },
    { name: "Life Goals", path: "life-goals" },
  ];

  return (
    <nav
      className="fixed w-full z-[100] transition-all duration-300 shadow-lg"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        height: "100px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center ml-[-30px]">
          <img
            src={logo}
            alt="Forever Us Logo"
            className="h-20 w-auto rounded-[12px] shadow-md cursor-pointer"
            onClick={() => handleScroll("home")}
          />
        </div>

        {/* Heart Button */}
        <button
          onClick={startShower}
          className="relative p-3 rounded-full bg-white/30 backdrop-blur-lg hover:bg-white/40 transition-all cursor-pointer shadow-lg"
        >
          <img src={heartButton} alt="Heart Button" className="h-7 w-7" />
        </button>

        {/* Navigation Menu */}
        <div className="hidden lg:flex space-x-6 mr-4">
          {menuItems.map(({ name, path }) => (
            <button
              key={name}
              onClick={() => handleScroll(path)}
              className="group relative font-['PlayFair_Display'] text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-110"
            >
              <span
                className={`${
                  activeItem === path
                    ? "bg-gradient-to-r from-[#3A3960] to-[#5E686D] via-[#A9BFA8] to-[#FAFFC5] text-transparent bg-clip-text"
                    : "bg-gradient-to-r from-[#27445D] to-[#143D60] via-[#27667B] to-[#497D74] text-transparent bg-clip-text"
                }`}
              >
                {name}
              </span>

              {/* Hover and Active Underline Effect */}
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#3A3960] to-[#5E686D] via-[#A9BFA8] to-[#FAFFC5] transition-all duration-300 ${
                  activeItem === path ? "w-3/4" : "w-0 group-hover:w-3/4"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;