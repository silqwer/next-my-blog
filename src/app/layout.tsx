import "./globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import React95AppBar from "@/components/react95/React95AppBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-[NotoSans] bg-[#008080]`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <StyledComponentsRegistry>
          <React95AppBar />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
