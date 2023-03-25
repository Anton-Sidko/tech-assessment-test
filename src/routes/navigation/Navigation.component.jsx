import { NavLink } from 'react-router-dom';
import Features from '../features/Features.component';

import './Navigation.styles.scss';

const Navigation = function () {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            className="nav-link"
          >
            Home
          </NavLink>
        </li>

        <li>
          <Features path={'features'} />
        </li>

        <li>
          <NavLink
            to="blog"
            className="nav-link"
          >
            Blog
          </NavLink>
        </li>

        <li>
          <NavLink
            to="shop"
            className="nav-link"
          >
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink
            to="about"
            className="nav-link"
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="contact"
            className="nav-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
