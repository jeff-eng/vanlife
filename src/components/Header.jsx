import { Link } from "react-router-dom";
import "../index.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="link">
        <h3 className="header__heading">#VANLIFE</h3>
      </Link>
      <nav className="header__nav">
        <Link to="/about" className="link header__link">
          About
        </Link>
        <Link to="/vans" className="link header__link">
          Vans
        </Link>
      </nav>
    </header>
  );
}
