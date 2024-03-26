import "@style/globals.css";
import React from "react";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="main">
        <div className="gradient"></div>
      </body>
      <main className="app">{children}</main>
    </html>
  );
};

export default RootLayout;
