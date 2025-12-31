import React from "react";
import "./CountdownSection.css";

function CountdownSection() {
  return (
    <section className="countdownsection">
      <h1 className="title">
        Christmas Event for the <br /> Whole Family
      </h1>

      <p className="subtitle">
        Step into a magical world of holiday cheer!
      </p>

      <div className="timesbox">
        <div className="time">
          <h2>2</h2>
          <p>Days</p>
        </div>

        <div className="time">
          <h2>13</h2>
          <p>Hours</p>
        </div>

        <div className="time">
          <h2>5</h2>
          <p>Minutes</p>
        </div>

        <div className="time">
          <h2>45</h2>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
}

export default CountdownSection;
