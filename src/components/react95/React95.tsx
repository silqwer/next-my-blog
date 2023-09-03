"use client";

import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";

type Props = {
  children: React.ReactNode;
};

export default function React95({ children }: Props) {
  return <ThemeProvider theme={original}>{children}</ThemeProvider>;
}
