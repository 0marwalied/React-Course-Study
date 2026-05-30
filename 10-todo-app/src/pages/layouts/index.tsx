import { Link, Outlet } from "react-router-dom";
import Nav from "../../components/ui/Nav";
import { getLoggedInUserData } from "../../utils/auth";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";
import { useState } from "react";

const RootLayout = () => {
  const loggedInUser = getLoggedInUserData();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen items-center space-y-8">
      <Nav className="flex bg-indigo-500 text-white p-4 rounded-2xl w-auto min-w-xl justify-between mt-10 font-semibold">
        <Link to="/">Home</Link>
        <div className="flex space-x-3">
          <Link to={loggedInUser ? "/profile" : "/register"}>
            {loggedInUser ? `Profile` : `Register`}
          </Link>
          {loggedInUser && <Link to="/todos">Todos</Link>}
          <Link
            to="#"
            onClick={() => {
              if (loggedInUser) {
                setIsLogoutModalOpen(true);
              }
            }}
          >
            {loggedInUser ? `Logout` : `Login`}
          </Link>
        </div>
      </Nav>

      {loggedInUser && (
        <Modal
          isOpen={isLogoutModalOpen}
          closeModal={() => setIsLogoutModalOpen(false)}
          title="Are you sure you want to logout?"
          description="This action will log you out of your account and you will need to login again to access your account."
        >
          <div className="flex space-x-2 mt-4">
            <Button
              status="danger"
              onClick={() => {
                localStorage.clear();
                setIsLogoutModalOpen(false);
                location.replace("/");
              }}
            >
              Logout
            </Button>
            <Button status="normal" onClick={() => setIsLogoutModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>
      )}

      <Outlet />
    </div>
  );
};

export default RootLayout;
