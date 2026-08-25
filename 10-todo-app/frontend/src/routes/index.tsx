import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/layouts";
import HomePage from "../pages";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/error";
import { getLoggedInUserData } from "../utils/auth";
import TodosPage from "../pages/Todos";
import ProfilePage from "../pages/Profile";

const userData = getLoggedInUserData();
const isLogedIn = userData !== null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Home Route */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route
          index
          element={
            <ProtectedRoute isAuth={isLogedIn} path="login" data={userData}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="todos" element={<TodosPage />} />
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
