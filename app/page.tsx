import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import HomeComponent from "@/components/routes/homeComponent";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={inter.className}>
      <HomeComponent />
    </main>
  );
}
