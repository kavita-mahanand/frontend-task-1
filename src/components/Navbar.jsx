import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Chrismax</div>

      <nav className="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Pricing</a>
        <a href="#">Sections</a>
        <a href="#">Contact</a>
      </nav>

      <button className="btn">Book Now</button>
    </header>
  );
}
