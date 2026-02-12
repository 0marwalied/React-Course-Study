import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import LearnAside from "../../components/LearnAside";

const LearnLayout = () => {
  return (
    <>
      <div className="flex">
        <LearnAside />
        <div className="flex flex-col w-full items-center">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default LearnLayout;
