import React from "react";
import "./Hero.css";
import bgVideo from "../assets/video-2.mp4";
import santaImg from "../assets/santa.png";

const HeroSection = () => {
  return (
    <section className="hero">
    
      <video className="herovideo" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      
      <div className="herooverlay"></div>

    
      <div className="herocontent">
        <div className="heroleft">
          <h1>
            Happy Merry <br /> Christmas <br /> 2024
          </h1>

          <p>
            Celebrate this Christmas with a festive delight <br />
            despite the things that befright!.
          </p>

          <button className="herobtn">Shop Now</button>
        </div>

        <div className="heroright">
          <img src={santaImg} alt="Santa" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
