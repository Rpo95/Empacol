"use client";

import { Footer, Sidebar } from "../../../components";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <main className="flex w-full h-screen flex-col items-center md:flex-row md:overflow-hidden">
      <div className="md:hidden w-full flex justify-between items-center p-4 bg-[#ff9500]">
        <h1 className="text-3xl text-white">Empacol</h1>
        <button className="text-white" onClick={toggleSidebar}>
          Menu
        </button>
      </div>
      <div className="md:flex hidden w-[240px] h-full ml-3 items-center">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="w-full md:w-5/6 flex flex-col items-center justify-between h-[95%] p-5 ">
        {children}
        <div className="w-full -mb-5">
          <Footer />
        </div>
      </div>
      <div className="md:hidden">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </main>
  );
}
