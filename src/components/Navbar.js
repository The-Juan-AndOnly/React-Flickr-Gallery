import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink
            to="/search/pete%20buttigieg"
            onClick={() => props.fetchQuery('pete buttigieg')}
          >
            Pete Buttigieg
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search/marathons"
            onClick={() => props.fetchQuery(`marathons`)}
          >
            Marathons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search/react%20js"
            onClick={() => props.fetchQuery('reactjs')}
          >
            React JS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
