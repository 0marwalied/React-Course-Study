import Navbar from "../components/Navbar";
import ProductsPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
const App = () => {
  return (
    <>
      <main className="flex justify-center items-center flex-col w-full space-y-5">
        <h1 className="text-black bg-white font-bold mt-5 text-xl p-2 rounded-xl w-fit">
          Component Lifecycle (Class Component)
        </h1>
        <Navbar />
      </main>
      <ProductsPage />
      <HomePage />
      <AboutUsPage />
    </>
  );
};
export default App;
