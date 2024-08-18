import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Pokemon",
  description: "Find your favorite pokemon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
