import ReactDOM from "react-dom/client";
import App from "./features/PersonalHomepage/App";
import { GlobalStyle } from "./globalStyle";
import { ThemeProvider } from "./common/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
const root = ReactDOM.createRoot(document.getElementById("root")!);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

root.render(
  <ThemeProvider>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ThemeProvider>
);
