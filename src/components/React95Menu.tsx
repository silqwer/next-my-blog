"use client";

import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import { MenuList, MenuListItem, Separator } from "react95";

export default function React95Menu() {
  return (
    <ThemeProvider theme={original}>
      <MenuList>
        <MenuListItem>
          <div className="cursor-pointer font-ms">🎤 Sing</div>
        </MenuListItem>
        <MenuListItem>
          <div className="cursor-pointer font-ms">💃🏻 Dance </div>{" "}
        </MenuListItem>
        <Separator />
        <MenuListItem disabled>😴 Sleep</MenuListItem>
      </MenuList>
    </ThemeProvider>
  );
}
