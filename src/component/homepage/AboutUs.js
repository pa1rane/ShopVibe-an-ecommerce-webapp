import React from "react";
import VisionImg from '../../assets/vision.png';

const AboutUs = () => {
  return (
      <div >
        <div>
          <header>
            <p>Our Mission</p>
          </header>
          <div>
            <p>
              At Minimal eCommerce, our philosophy is “simplicity is key”. We
              aim to deliver an efficient shopping journey enabling our clients
              to easily explore and acquire their favorite items.
            </p>
            <p>
              Our team constantly explores new ways to present our merchandise
              in the clearest and most informative manner, ensuring that our
              customers are well-informed about their purchases.
            </p>
            <p>
              With a focus on sustainability and eco-friendliness, Minimal
              eCommerce offers environmentally conscious products while
              maintaining our minimalistic vision.
            </p>
          </div>
        </div>
        <div>
            <img src={VisionImg} alt="Our Mission" />
        </div>
      </div>
  );
};

export default AboutUs;
