import "./RegisterSection.css";

function RegisterSection() {
  return (
    <section className="registersection">

      <p className="smalltext">REGISTER NOW</p>

      <h1>Are You Ready To Join Our Event?</h1>

      <div className="formbox">
        <input typ1e="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <button>Register</button>
      </div>

      <div className="snow"></div>

    </section>
  );
}

export default RegisterSection;
