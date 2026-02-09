import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import LearnAside from "../../components/LearnAside";

const LearnLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex space-x-4">
        <LearnAside />
        <Outlet />
      </div>
    </>
  );
};
export default LearnLayout;
