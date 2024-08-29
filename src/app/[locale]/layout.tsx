import React from "react";
import "@/styles/globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
