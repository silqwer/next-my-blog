'use client';

import { Window, Button, WindowHeader, WindowContent } from 'react95';
import React95 from './React95';
import { IoCloseSharp } from 'react-icons/io5';

type Props = {
  title: string;
  onClose: () => void;
};

export default function React95Window({
  title = '타이틀을 입력해주세요',
  onClose,
}: Props) {
  return (
    <React95>
      <Window resizable className="w-96 min-h-96">
        <WindowHeader className="flex items-center justify-between">
          <h2>{title}</h2>
          <div className="flex">
            <Button
              className="flex justify-center items-center"
              onClick={onClose}
            >
              <div className="border-b-4 border-black w-4 h-4" />
            </Button>
            <Button
              className="flex justify-center items-center"
              onClick={onClose}
            >
              <div className="border-2 border-t-4 border-black w-4 h-4"></div>
            </Button>
            <Button
              className="flex justify-center items-center ml-1"
              onClick={onClose}
            >
              <div className="inline-block relative">
                <div className="w-4 h-4 bg-transparent relative">
                  <div className="absolute inset-0 m-auto w-1 h-4 bg-black transform rotate-45"></div>
                  <div className="absolute inset-0 m-auto w-1 h-4 bg-black transform -rotate-45"></div>
                </div>
              </div>
            </Button>
          </div>
        </WindowHeader>
        <WindowContent className="bg-white m-1">
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
