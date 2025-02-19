import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header>
      <h1>Your Name</h1>
      <nav>
        <ul>
          {["About Me", "Portfolio", "Contact", "Resume"].map((item) => {
            const path = `/${item.toLowerCase().replace(" ", "")}`;
            return (
              <li key={item} className={location.pathname === path ? "active" : ""}>
                <Link to={path}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
