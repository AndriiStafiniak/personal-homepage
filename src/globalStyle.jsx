import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: inherit;
}
body{
  background-color: ${({ theme }) => theme.background};
  font-family: "Inter", sans-serif;
}
`;
