"use client";

import { Footer, Sidebar } from "../../../components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex w-full h-screen flex-col items-center md:flex-row md:overflow-hidden">
      <div className="w-[240px] h-full ml-3 hidden md:flex items-center ">
        <Sidebar />
      </div>

      <div className="w-full md:w-5/6 flex flex-col items-center justify-between h-[95%] p-5 ">
        {children}
        <div className="w-full -mb-5">
          <Footer />
        </div>
      </div>
    </main>
  );
}
