import { Footer, Sidebar } from "../../../components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex w-[99%] h-screen flex-col items-center md:flex-row md:overflow-hidden">
      <div className="w-1/6 h-full ml-3 flex items-center ">
        <Sidebar />
      </div>
      <div className=" w-5/6 flex flex-col justify-between h-[95%] p-5 ">
        {children}
        <div className="-mb-5">
          <Footer />
        </div>
      </div>
    </main>
  );
}
