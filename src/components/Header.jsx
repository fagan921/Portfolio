import Navigation from "./Navigation";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Your Name</h1>
      <Navigation />
    </header>
  );
}

export default Header;