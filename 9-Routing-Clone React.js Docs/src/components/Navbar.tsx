import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-sm mx-auto my-7">
      <ul className="flex items-center justify-between">
        <li>
          <NavLink to="/" className="text-lg font-bold">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-lg font-bold">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-lg font-bold">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/learn" className="text-lg font-bold">
            Learn
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
