import { CardService } from "../../../../components";

export default function Home() {
  return (
    <section className=" h-screen overflow-y-auto flex flex-col justify-around">
      <h1 className="text-5xl text-center font-semibold">EMPACOL</h1>
      <div className="flex w-full justify-around">
        <CardService
          href="/empacol/crating"
          src="/crate.jpg"
          p="Packing and Crating Services"
        />
        <CardService
          href="/empacol/supplies"
          src="/supplie.jpg"
          p="Packing Materials & Equipment"
        />
      </div>
    </section>
  );
}
