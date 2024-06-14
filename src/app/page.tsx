import { EmpacolLayout, Footer } from "../../components";

export default function Home() {
  return (
    <main className="flex flex-col no-select  md:flex-row h-full md:h-screen flex-nowrap overflow-y-auto md:overflow-x-auto ">
      <div className="bg-cover bg-[#7C5424] flex-shrink-0 h-screen md:h-full md:w-screen flex items-center justify-center">
        <EmpacolLayout />
      </div>
    </main>
  );
}
