import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link font-bold text-xl hover:text-veryDarkBlue duration-300"
          to="/portfolio"
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link font-bold text-xl hover:text-veryDarkBlue duration-300"
          to="/about"
        >
          About us
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link font-bold text-xl hover:text-veryDarkBlue duration-300"
          to="/contact"
        >
          Contact
        </Link>
      </li>
    </>
  );
}

export default NavLinks;
