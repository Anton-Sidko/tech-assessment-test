import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import './LogoWrapper.styles.scss';

const LogoWrapper = function () {
  return (
    <div className="logo-wrapper">
      <Link
        to="/"
        className="logo-link"
      >
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default LogoWrapper;
