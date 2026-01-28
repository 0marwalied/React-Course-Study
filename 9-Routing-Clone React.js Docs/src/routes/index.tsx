import { createRoutesFromElements, Outlet, Route } from "react-router";
import { createBrowserRouter } from "react-router";
import Navbar from "../../UI/navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route path="" element={<h3>Home Page</h3>} />
        <Route path="contact" element={<h3>Contact Page</h3>} />
      </Route>
    </>,
  ),
);

export default router;
