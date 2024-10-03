import React, { JSX } from "react";
import "./globals.css";

export const metadata = {
  title: "Speech Translator",
  description: "Convert speech to text and translate.",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
