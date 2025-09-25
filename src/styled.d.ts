import "styled-components";
import { ReactFunctionOrComponent } from "react";
import React from "react";

import { Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    paragraph: string;
    backgroundItem: string;
    sectionHeading: string;
    portfolioHeading: string;
    icon: string;
    loader: string;
    mode: {
      background: string;
      color: string;
      button: string;
    };
    colors: {
      alto: string;
      mineShaft: string;
      white: string;
      littleGrey: string;
      scienceBlue: string;
      black: string;
      slateGray: string;
      iron: string;
      semiDark: string;
      mercury: string;
      azureRadiance: string;
      semiGrey: string;
      anakiwa: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      narrow: string;
    };
  }
}

