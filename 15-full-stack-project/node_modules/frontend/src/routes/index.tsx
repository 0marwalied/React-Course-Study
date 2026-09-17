import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import MainLayout from "@/pages/layouts/MainLayout";
import LoginPage from "@/pages/LoginPage";
import ProductPage from "@/pages/ProductPage";
import ProductsPage from "@/pages/ProductsPage";

import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router";
import ProtectedRoute from "./protectedRoute";
import DashboardLayout from "@/pages/layouts/DashboardLayout";
import AdminPage from "@/pages/AdminPage";
import DashboardProductsPage from "@/pages/DashboardProductsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <ProtectedRoute redirectPath="/login">
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="about"
          element={
            <ProtectedRoute redirectPath="/login">
              <AboutPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Login Route */}
      <Route path="login" element={<MainLayout />}>
        <Route
          index
          element={
            <ProtectedRoute redirectPath="/" requireAuth={false}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Admin Route */}
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route
          index
          element={
            <ProtectedRoute redirectPath="/login">
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route path="products" element={<DashboardProductsPage />} />
      </Route>

      {/* Products Routes */}
      <Route path="products" element={<MainLayout />}>
        <Route
          index
          element={
            <ProtectedRoute redirectPath="/login">
              <ProductsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path=":id"
          element={
            <ProtectedRoute redirectPath="/login">
              <ProductPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </>,
  ),
);

export default router;
