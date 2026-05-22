import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/layouts";
import HomePage from "../pages";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import ProtectedRoute from "./ProtectedRoute";

const storageKey = "loggedInUser";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;
const isLogedIn = userData !== null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Home Route */}
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <ProtectedRoute isAuth={isLogedIn} path="login" data={userData}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="profile" element={<h2>Profile page</h2>} />
        <Route
          path="register"
          element={
            <ProtectedRoute isAuth={!isLogedIn} path="" data={userData}>
              {" "}
              <RegisterPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute isAuth={!isLogedIn} path="" data={userData}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </>,
  ),
);

export default router;
