interface NavbarProps {
  setPage: (page: string) => void;
}

const Navbar = ({ setPage }: NavbarProps) => {
  return (
    <>
      <ul className="flex space-x-2 font-bold">
        <li
          className="underline cursor-pointer hover:text-indigo-600 duration-300"
          onClick={() => setPage("home")}
        >
          Home
        </li>
        <li
          className="underline cursor-pointer hover:text-indigo-600 duration-300"
          onClick={() => setPage("products")}
        >
          Products
        </li>
        <li
          className="underline cursor-pointer hover:text-indigo-600 duration-300"
          onClick={() => setPage("about")}
        >
          About Us
        </li>
        <li
          className="underline cursor-pointer hover:text-indigo-600 duration-300"
          onClick={() => setPage("hooks")}
        >
          Hooks
        </li>
      </ul>
    </>
  );
};
export default Navbar;
