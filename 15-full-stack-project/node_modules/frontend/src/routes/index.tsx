import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";

import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </>,
  ),
);

export default router;
