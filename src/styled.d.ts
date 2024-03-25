import "styled-components";
import {ReactFunctionOrComponent} from React;

import { themeLight } from "./theme";
import React from "react";

type Theme = typeof themeLight;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

