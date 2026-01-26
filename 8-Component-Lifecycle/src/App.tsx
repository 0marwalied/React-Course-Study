import Navbar from "../components/Navbar";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import { useState } from "react";
import HooksPage from "../pages/HooksPage";

const App = () => {
  const [page, setPage] = useState<string>("home");
  return (
    <>
      <main className="flex justify-center items-center flex-col w-full space-y-5">
        <h1 className="text-black bg-white font-bold mt-5 text-xl p-2 rounded-xl w-fit">
          Component Lifecycle (Class Component)
        </h1>
        <Navbar setPage={setPage} />
      </main>

      {page === "products" && <ProductsPage />}
      {page === "home" && <HomePage />}
      {page === "about" && <AboutUsPage />}
      {page === "hooks" && <HooksPage />}
    </>
  );
};
export default App;
