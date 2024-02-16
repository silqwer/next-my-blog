import React95AppBar from "@/components/react95/React95AppBar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      {children}
      <React95AppBar />
    </div>
  );
}
