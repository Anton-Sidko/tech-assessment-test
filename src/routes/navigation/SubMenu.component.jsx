import { NavLink } from 'react-router-dom';

const SubMenu = function ({ path, clickHandle }) {
  return (
    <ul className="nav-sub-menu">
      <li>
        <NavLink
          to={path + '/features-1'}
          className="nav-sub-link"
          onClick={clickHandle}
        >
          Features 1
        </NavLink>
      </li>

      <li>
        <NavLink
          to={path + '/features-2'}
          className="nav-sub-link"
          onClick={clickHandle}
        >
          Features 2
        </NavLink>
      </li>

      <li>
        <NavLink
          to={path + '/features-3'}
          className="nav-sub-link"
          onClick={clickHandle}
        >
          Features 3
        </NavLink>
      </li>
    </ul>
  );
};

export default SubMenu;
