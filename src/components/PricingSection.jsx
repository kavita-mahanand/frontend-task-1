import React from "react";
import "./PricingSection.css";

function PricingSection() {
  return (
    <section className="pricing">

      
      <div className="pricingtitle">
        <span className="smalltext">OUR PLANS</span>
        <h1>Event Pricing</h1>
      </div>

      
      <div className="pricingcards">

        
        <div className="pricecard">
          <div className="icon"></div>
          <h2>Kids</h2>
          <h3>$35</h3>

          <ul>
            <li> Visiting Santa</li>
            <li> Dining</li>
            <li> Ice Skating</li>
            <li>  Christmas Tree</li>
          </ul>

          <button>Book Now</button>
        </div>

        
        <div className="pricecard">
          <div className="icon"></div>
          <h2>Adults</h2>
          <h3>$47</h3>

          <ul>
            <li> Ice Zone</li>
            <li> Christmas Shopping</li>
            <li> Workshops</li>
            <li> Live Music</li>
          </ul>

          <button>Book Now</button>
        </div>

        
        <div className="pricecard">
          <div className="icon"></div>
          <h2>Family</h2>
          <h3>$99</h3>

          <ul>
            <li> Chat with Santa</li>
            <li> Christmas Decorations</li>
            <li> Ice Carvers</li>
            <li> Raffle</li>
          </ul>

          <button>Book Now</button>
        </div>

      </div>

    </section>
  );
}

export default PricingSection;
