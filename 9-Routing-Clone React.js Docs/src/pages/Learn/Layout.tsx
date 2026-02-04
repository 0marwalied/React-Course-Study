import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import LearnAside from "../../components/LearnAside";

const LearnLayout = () => {
  return (
    <>
      <Navbar />
      <LearnAside />
      <Outlet />
    </>
  );
};
export default LearnLayout;
