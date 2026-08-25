import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <ul
        style={{
          listStyle: "revert",
        }}
      >
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default MainLayout;
