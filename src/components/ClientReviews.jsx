import "./ClientReviews.css";

function ClientReviews() {
  return (
    <section className="reviewsection">
      <p className="reviewtag">TESTIMONIALS</p>
      <h2 className="reviewheading">Reviews Of Our Clients</h2>

      <div className="reviewcardwrapper">
        
        <div className="reviewbox">
          <p className="reviewtext">
            “Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate
            rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.”
          </p>

          <div className="reviewuser">
            <img
              src=""
              // alt="John Wilson"
            />
            <div>
              <h4>John Wilson</h4>
              <span>Example City</span>
            </div>
          </div>
        </div>

        
        <div className="reviewbox">
          <p className="reviewtext">
            “Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate
            rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.”
          </p>

          <div className="reviewuser">
            <img
              src=""
              // alt="Julia Sakura"
            />
            <div>
              <h4>Julia Sakura</h4>
              <span>Example City</span>
            </div>
          </div>
        </div>

        
        <div className="reviewbox">
          <p className="reviewtext">
            “Lorem ipsum dolor sit amet elit. Velit beatae laudantium voluptate
            rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.”
          </p>

          <div className="reviewuser">
            <img
              src=""
              // alt="Roy Linderson"
            />
            <div>
              <h4>Roy Linderson</h4>
              <span>Example City</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;
