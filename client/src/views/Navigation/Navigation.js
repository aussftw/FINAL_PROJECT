/* Core */
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div>
        <NavLink activeClassName="active" to="/shop">
          Go to Magazine
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
