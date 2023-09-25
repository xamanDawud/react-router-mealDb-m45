import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/meals">Meals</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contacts">Contact</NavLink>
    </div>
  );
};

export default Headers;
