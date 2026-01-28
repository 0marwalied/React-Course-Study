import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-sm mx-auto my-7">
      <ul className="flex items-center justify-between">
        <li>
          <Link to="/" className="text-lg font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-lg font-bold">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-lg font-bold">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
