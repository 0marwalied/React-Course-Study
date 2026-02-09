import { NavLink } from "react-router";

const LearnAside = () => {
  return (
    <aside className="min-w-48">
      <nav className="my-7">
        <ul className="flex flex-col space-y-3">
          <li className="hover:text-[#149eca] duration-200">
            <NavLink to="/learn" end className="p-2">
              Quick Start
            </NavLink>
          </li>
          <li className="hover:text-[#149eca] duration-200">
            <NavLink to="/learn/thinking-in-react" className="p-2">
              Thinking in React
            </NavLink>
          </li>
          <li className="hover:text-[#149eca] duration-200">
            <NavLink to="/learn/installation" className="p-2">
              Installation
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default LearnAside;
