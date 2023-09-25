import { NavLink } from "react-router-dom";
import "./Headers.css";

const Headers = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <NavLink to="/" className="menu-btn">
        Home
      </NavLink>
      <NavLink to="/meals" className="menu-btn">
        Meals
      </NavLink>
      <NavLink to="/blog" className="menu-btn">
        Blog
      </NavLink>
      <NavLink to="/contacts" className="menu-btn">
        Contact
      </NavLink>
    </div>
  );
};

export default Headers;
