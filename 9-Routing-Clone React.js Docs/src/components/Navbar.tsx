import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-lg my-7 ">
      <ul className="flex items-center space-x-3 justify-between">
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
        <li>
          <NavLink to="/contribute" className="text-lg font-bold">
            Contribute
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="text-lg font-bold">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
