"use client";

import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
} from "react95";
import React95 from "./React95";
import { useState } from "react";

export default function React95AppBar() {
  const [open, setOpen] = useState(false);

  return (
    <React95>
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: "bold" }}
            >
              Start
            </Button>
            {open && (
              <MenuList
                style={{
                  position: "absolute",
                  left: "0",
                  top: "100%",
                }}
                onClick={() => setOpen(false)}
              >
                <MenuListItem>
                  <span role="img" aria-label="👨‍💻">
                    👨‍💻
                  </span>
                  Profile
                </MenuListItem>
                <MenuListItem>
                  <span role="img" aria-label="📁">
                    📁
                  </span>
                  My account
                </MenuListItem>
                <Separator />
                <MenuListItem disabled>
                  <span role="img" aria-label="🔙">
                    🔙
                  </span>
                  Logout
                </MenuListItem>
              </MenuList>
            )}
          </div>

          <TextInput placeholder="Search..." width={150} />
        </Toolbar>
      </AppBar>
    </React95>
  );
}
