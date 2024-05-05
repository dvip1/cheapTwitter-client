import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import SideBar from "@/components/Navigation/sideBar";
import FeedCard from "@/components/FeedCard";
import AuthSideBar from "@/components/auth/auth";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen ml-6  ">

        <SideBar />
        <div className="col-span-6 border-x-2 border-x-slate-100 h-screen overflow-scroll">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 "></div>
        <AuthSideBar />
      </div>
    </main>
  );
}
