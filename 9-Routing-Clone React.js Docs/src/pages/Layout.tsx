import { Outlet } from "react-router";
import Navbar from "../../UI/navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default RootLayout;
