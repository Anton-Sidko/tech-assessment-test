import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SubMenu from './SubMenu.component';

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

  console.log(path);
  return (
    <>
      <NavLink
        to={path}
        onClick={toggleSubMenu}
      >
        Features
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
