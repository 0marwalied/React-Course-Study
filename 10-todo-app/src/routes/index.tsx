import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/layouts";
import HomePage from "../pages";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import ProtectedRoute from "./ProtectedRoute";

const isLogedIn = false;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Home Route */}
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <ProtectedRoute isAuth={isLogedIn} path="login">
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRoute isAuth={!isLogedIn} path="">
              {" "}
              <RegisterPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute isAuth={!isLogedIn} path="">
              <LoginPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </>,
  ),
);

export default router;
