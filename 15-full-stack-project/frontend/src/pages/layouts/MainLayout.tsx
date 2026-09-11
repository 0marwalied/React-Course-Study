import { type RootState } from "@/app/store";
import CartDrawer from "@/components/CartDrawer";
import Navbar from "@/Layout/Navbar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

const MainLayout = () => {
  const isOpenDrawer = useSelector(
    (state: RootState) => state.global.isOpenDrawer,
  );
  return (
    <>
      <Navbar />
      <Outlet />
      <CartDrawer open={isOpenDrawer} />
    </>
  );
};

export default MainLayout;
