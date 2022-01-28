import { ImageNames } from "components/Image";
import React from "react";
import "styled-components";
import { DefaultTheme } from "styled-components/native";
import { ThemeType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export interface ProjectSchema {
  content: string; // Markdown
  image: ImageNames | null;
  github: string | null;
  lead: string;
  name: string;
}
