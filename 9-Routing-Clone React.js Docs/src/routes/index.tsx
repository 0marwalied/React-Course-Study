import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages";
import ContactPage from "../pages/contact";
import AboutPage from "../pages/about";
import RootLayout from "../pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <RootLayout />
          </>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </>,
  ),
);

export default router;
