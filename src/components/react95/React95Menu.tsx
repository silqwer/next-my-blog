"use client";

import { MenuList, MenuListItem, Separator } from "react95";
import React95 from "./React95";

export default function React95Menu() {
  return (
    <React95>
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
    </React95>
  );
}
