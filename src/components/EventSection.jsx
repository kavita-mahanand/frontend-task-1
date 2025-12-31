import React from "react";
import "./EventSection.css";
import eventImg from "../assets/event.jpg"; 

const EventSection = () => {
  return (
    <section className="eventsection">
      <div className="eventcontainer">
        
      
        <div className="eventcontent">
          <span className="eventtag">HOLLY DAY SPECIAL</span>

          <h1>About Our Event</h1>

          <p className="eventsubtitle">
            Join us to celebrate the biggest event for the whole family this December!
          </p>

          <p className="eventdescription">
            We have prepared a variety of entertaining activities for kids and adults
            to provide an unforgettable experience of celebrating Christmas the way
            you want it.
          </p>

          <button className="eventbtn">Book Now</button>
        </div>

        
        <div className="eventimage">
          <img src={eventImg} alt="Christmas Event" />
        </div>

      </div>
    </section>
  );
};

export default EventSection;
