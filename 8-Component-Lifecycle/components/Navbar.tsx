const Navbar = () => {
  return (
    <>
      <ul className="flex space-x-2 font-bold">
        <li className="underline cursor-pointer hover:text-indigo-600 duration-300">
          Home
        </li>
        <li className="underline cursor-pointer hover:text-indigo-600 duration-300">
          Products
        </li>
        <li className="underline cursor-pointer hover:text-indigo-600 duration-300">
          About Us
        </li>
      </ul>
    </>
  );
};
export default Navbar;
