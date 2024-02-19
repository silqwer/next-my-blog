'use client';

import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
} from 'react95';
import React95 from './React95';
import { useState } from 'react';
import { Logo } from '@react95/icons';

export default function React95AppBar() {
  const [open, setOpen] = useState(false);

  return (
    <React95>
      <div className="relative">
        <AppBar position={'fixed'} style={{ top: 'initial', bottom: 0 }}>
          {open && (
            <MenuList
              style={{
                position: 'absolute',
                left: '0',
                bottom: '45px',
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
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Button
                onClick={() => setOpen(!open)}
                style={{ fontWeight: 'bold' }}
              >
                <Logo variant='32x32_4' />
              </Button>
            </div>

            <TextInput placeholder="Search..." width={150} />
          </Toolbar>
        </AppBar>
      </div>
    </React95>
  );
}
