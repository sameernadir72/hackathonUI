import Navbar from "../../components/section/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../../components/section/Footer";
import { CartContextProvider } from "../providers/CartContext";
import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import Menu from "components/section/Menu";
import Image from "next/image";
import { MenuProps } from "components/section/Menu";
import { fetchCategories } from "./data";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
//   viewport: {
//     content: "width=device-width",
//     initialScale: 1.0,
//   },
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchCategories();
  return (
    <html lang="en">
      <body >
        <CartContextProvider>
          <Navbar navLinks={categories} />
          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
