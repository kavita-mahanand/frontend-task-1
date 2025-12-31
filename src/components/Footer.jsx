import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footercontent">

        
        <div className="footerleft">
          <h2 className="footerlogo">
            <span className="logoicon"></span> Chrismax
          </h2>

          <p className="footertext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsa officia dicta magni ea at, culpa atque, rerum dolorum
            voluptas alias qui temporibus ex totam distinctio nobis
            impedit minus rerum, nihil blanditiis quos atque.
          </p>

          <div className="footerlinks">
            <a href="/">Terms and Conditions</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>

        
        <div className="footermiddle">
          <h3>Contact Details</h3>

          <p className="label">Email</p>
          <p className="email">info@example.com</p>

          <h3 className="followtitle">Follow Us</h3>

          <div className="socialicons">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        
        <div className="footerright">
          <h3>Join Our Newsletter</h3>
          <p>Sign up to receive our Newsletter</p>

          <label>Email *</label>
          <input type="email" placeholder="Your Email..." />

          <button className="subscribebtn">SUBSCRIBE</button>
        </div>
      </div>

      
      <div className="footerbottom">
        <p>
           2024 Chrismax. All rights reserved.
          <span> Design by <strong>W3Layouts</strong></span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
