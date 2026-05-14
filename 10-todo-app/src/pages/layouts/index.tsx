import { Link, Outlet } from "react-router-dom";
import Nav from "../../components/ui/Nav";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen items-center space-y-8">
      <Nav className="flex bg-indigo-500 text-white p-4 rounded-2xl w-auto min-w-xl justify-between mt-10 font-semibold">
        <Link to="/">Home</Link>
        <div className="flex space-x-3">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </Nav>

      <Outlet />
    </div>
  );
};

export default RootLayout;
