import React from "react";
import modelImage from "../../assets/model.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full min-h-[90vh] overflow-hidden md:justify-center justify-around px-5 bg-[#4E148C]">
      <div className="flex flex-col md:gap-5 gap-3 items-center justify-center">
        <header className="font-mono font-bold text-4xl md:text-7xl text-center text-[#ffff]">
          CLOTHES MAKE THE MAN
        </header>
        <p className="font-semibold font-sans sm:text-center text-sm md:text-md text-[#ffff]">
          Choose the dress style that best suits you with our diverse clothing collection
        </p>
        <div>
          <Link to="/products">
            <button className="font-bold py-[1.2vh] md:py-[1.5vh] px-[2.5vh] md:px-[4vh] rounded-full font-mono text-[#ffffffd2] bg-[#69A1AC] hover:bg-[#4b97a6] transition-colors">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <img
        src={modelImage}
        alt="Model Image"
        className="w-[45vh] h-[45vh] md:h-[75vh] md:w-[70vh] flex items-center"
      />
      </div>
    </div>
  );
};

export default Hero;
