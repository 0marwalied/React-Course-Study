import { createRoutesFromElements, Route } from "react-router";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import RootLayout from "../pages/Layout";
import LearnLayout from "../pages/Learn/Layout";
import QuickStartPage from "../pages/Learn/QuickStart";
import ThinkingInReactPage from "../pages/Learn/ThinkingInReact";
import InstallationPage from "../pages/Learn/Installation";
import ContributePage from "../pages/Contribute";
import LoginPage from "../pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Home Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contribute" element={<ContributePage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>

      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route>
    </>,
  ),
);

export default router;
