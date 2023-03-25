import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SubMenu from './SubMenu.component';

import arrowDown from '../../assets/arrow-down.svg';

const Features = function ({ path }) {
  // We have small project, hence we don't need use elaborate state-management and can use only state on current component and, if need, props drilling
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubMenu = function (e) {
    e.preventDefault();
    setIsSubmenuOpen(isSubmenuOpen => !isSubmenuOpen);
  };

  const hideSubMenu = function () {
    setIsSubmenuOpen(false);
  };

  return (
    <>
      <NavLink
        to={path}
        onClick={toggleSubMenu}
        className={`nav-link with-sub-menu ${
          isSubmenuOpen ? 'open' : ''
        }`.trim()}
      >
        <span>Features</span>
        <i>
          <img
            src={arrowDown}
            alt="arrow down icon"
          />
        </i>
      </NavLink>

      {/* Toggle sub-menu in our navigation */}
      {isSubmenuOpen && (
        <SubMenu
          path={path}
          clickHandle={hideSubMenu}
        />
      )}
    </>
  );
};

export default Features;
