import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="w-full justify-center flex">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};
export default RootLayout;
