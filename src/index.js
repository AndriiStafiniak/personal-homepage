import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './features/PersonalHomepage/App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './globalStyle';
import { ThemeProvider } from 'styled-components';
import { themeLight } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10, // 10 seconds
    }
  }
});

root.render(
  <ThemeProvider theme={themeLight}>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
