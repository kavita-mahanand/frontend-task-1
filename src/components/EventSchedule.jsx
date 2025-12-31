import React from "react";
import "./EventSchedule.css";
import img1 from "../assets/event1.jpg";
import img2 from "../assets/event2.jpg";

function EventSchedule() {
  return (
    <section className="schedule">

      
      <div className="scheduletitle">
        <span className="toptext">CHRISMAX</span>
        <h1>Event Schedule</h1>
      </div>

      
      <div className="dates">
        <div className="date active">December 24</div>
        <div className="date">December 25</div>
        <div className="date">December 26</div>
      </div>

      
      <div className="card">
        <img src={img1} alt="event" />

        <div className="cardcontent">
          <h2>Reindeer Carriage Rides</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsa officia dicta magni ea at, culpa atque.
          </p>
          <p className="time">Opening Hours: 10:00 am to 3:00 pm</p>
        </div>

        <button className="book">Book Now</button>
      </div>

      
      <div className="card">
        <img src={img2} alt="event" />

        <div className="cardcontent">
          <h2>Christmas Raffle</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsa officia dicta magni ea at, culpa atque.
          </p>
          <p className="time"> Opening Hours: 10:00 am to 3:00 pm</p>
        </div>

        <button className="book">Book Now</button>
      </div>

    </section>
  );
}

export default EventSchedule;
