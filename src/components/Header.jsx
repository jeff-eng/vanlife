import { Link, NavLink } from 'react-router-dom';
import '../index.css';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="link">
        <h3 className="header__heading">#VANLIFE</h3>
      </Link>
      <nav className="header__nav">
        <NavLink
          to="/host"
          className={({ isActive }) =>
            isActive
              ? 'link header__link header__link--active'
              : 'link header__link'
          }
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'link header__link header__link--active'
              : 'link header__link'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            isActive
              ? 'link header__link header__link--active'
              : 'link header__link'
          }
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}

// link header__link
