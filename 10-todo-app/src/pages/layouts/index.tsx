import { Link, Outlet } from "react-router-dom";
import Nav from "../../components/ui/Nav";
import { getLoggedInUser } from "../../utils/auth";

const RootLayout = () => {
  const loggedInUser = getLoggedInUser();
  return (
    <div className="flex flex-col min-h-screen items-center space-y-8">
      <Nav className="flex bg-indigo-500 text-white p-4 rounded-2xl w-auto min-w-xl justify-between mt-10 font-semibold">
        <Link to="/">Home</Link>
        <div className="flex space-x-3">
          <Link to={loggedInUser ? "/profile" : "/register"}>
            {loggedInUser ? `Profile` : `Register`}
          </Link>
          <Link
            to="login"
            onClick={() => {
              if (loggedInUser) {
                localStorage.clear();
                location.replace("/");
              }
            }}
          >
            {loggedInUser ? `Logout` : `Login`}
          </Link>
        </div>
      </Nav>

      <Outlet />
    </div>
  );
};

export default RootLayout;
