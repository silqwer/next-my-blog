'use client';

import { Window, Button, WindowHeader, WindowContent } from 'react95';
import React95 from './React95';

export default function React95Window() {
  return (
    <React95>
      <Window resizable className="window">
        <WindowHeader className="window-title">
          <span>React95 Window</span>
          <Button>
            <span className="close-icon">X</span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <p>
            When you set &quot;resizable&quot; prop, there will be drag handle
            in the bottom right corner (but resizing itself must be handled by
            you tho!)
          </p>
        </WindowContent>
      </Window>
    </React95>
  );
}
