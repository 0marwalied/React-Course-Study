import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { UiProvider } from "./components/ui/provider.tsx";
import "./main.css";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import InternetConnectionProvider from "./providers/InternetConnectionService.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <InternetConnectionProvider>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StrictMode>
          <UiProvider>
            <App />
          </UiProvider>
        </StrictMode>
      </QueryClientProvider>
    </Provider>
  </InternetConnectionProvider>,
);
