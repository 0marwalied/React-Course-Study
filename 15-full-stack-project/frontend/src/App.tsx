import { Toaster } from "./components/ui/toaster";
import router from "./routes";
import { RouterProvider } from "react-router";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
