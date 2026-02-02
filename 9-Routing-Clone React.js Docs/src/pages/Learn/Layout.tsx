import { Outlet } from "react-router";
import Navbar from "../../../UI/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Layout;
