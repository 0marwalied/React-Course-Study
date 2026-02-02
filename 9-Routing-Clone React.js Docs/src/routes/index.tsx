import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import RootLayout from "../pages/Layout";
import Layout from "../pages/Learn/Layout";
import QuickStart from "../pages/Learn/QuickStart";
import LearnPage from "../pages/Learn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Home Layout */}
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

      {/* Learn Layout */}
      <Route path="/learn" element={<Layout />}>
        <Route index element={<LearnPage />} />
        <Route path="QuickStart" element={<QuickStart />} />
      </Route>
    </>,
  ),
);

export default router;
