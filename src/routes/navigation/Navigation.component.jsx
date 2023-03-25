import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Features from './Features.component';

const Navigation = function () {
  return (
    <>
      <Link
        to="/"
        className="logo-wrapper"
      >
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </Link>

      <nav className="nav-menu">
        <ul>
          <li>
            <NavLink
              to="/"
              className="nav-link"
              // activeClassName="active"
            >
              Home
            </NavLink>
          </li>

          <li>
            <Features path={'features'} />
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
