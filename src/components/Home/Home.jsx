import Headers from "../Headers/Headers";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Headers></Headers>
      <Outlet></Outlet>
      <h1>This is Home Page</h1>
    </div>
  );
};

export default Home;
