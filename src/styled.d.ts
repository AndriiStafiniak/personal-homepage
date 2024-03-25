import "styled-components";
import {ReactFunctionOrComponent} from React;

import { theme } from "./theme";
import React from "react";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

