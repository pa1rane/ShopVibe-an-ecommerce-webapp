import React from "react";
import VisionImg from "../../assets/vision.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden p-4">
      <div>
        <header className="text-3xl font-mono font-semibold mb-4">
          <p>Our Mission</p>
        </header>
        <div className=" flex flex-col gap-2 md:w-[60vw]">
          <p>
            Welcome to ShopVibe, we're all about making your shopping
            experience exceptional. Our core belief is that simplicity leads to
            satisfaction. We're on a mission to provide you with a hassle-free
            journey, allowing you to effortlessly explore and acquire your
            desired products.
          </p>
          <p>
            At ShopVibe, our philosophy is “simplicity is key”. We aim to
            deliver an efficient shopping journey enabling our clients to easily
            explore and acquire their favorite items.
          </p>
          <p>
            Our team constantly explores new ways to present our merchandise in
            the clearest and most informative manner, ensuring that our
            customers are well-informed about their purchases.
          </p>
          <p>
            With a focus on sustainability and eco-friendliness, ShopVibe
            eCommerce offers environmentally conscious products while
            maintaining our minimalistic vision.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center md:w-[40vw]">
        <img
          src={VisionImg}
          alt="Our Mission"
          className="md:w-[25vw] md:h-[45vh] h-[40vh] w-[45vw] py-4"
        />
      </div>
    </div>
  );
};

export default AboutUs;
