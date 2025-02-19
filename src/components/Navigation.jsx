import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: "About Me", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.name} className={location.pathname === item.path ? "active" : ""}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;