import "styled-components";
import { DefaultTheme } from "styled-components/native";
import { ThemeType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
