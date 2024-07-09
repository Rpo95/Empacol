import ButtonSidebar from "./ButtonSidebar";

export default function Sidebar() {
  return (
    <nav className="h-[95%] w-[201px] rounded-lg bg-[#ff9500] flex  flex-col items-center justify-around ">
      <div className="flex flex-col  items-center">
        <h1 className="text-3xl">Empacol</h1>
        <h3 className="text-lg">Packing & Supplies</h3>
      </div>
      <ul className="flex flex-col w-9/12  space-y-5">
        <ButtonSidebar src="/empacol" title="Home" />
        <ButtonSidebar src="/empacol/aboutUs" title="About Us" />
        <ButtonSidebar src="/empacol/crating" title="Crating" />
        <ButtonSidebar src="/empacol/supplies" title="Supplies" />
        <ButtonSidebar src="/empacol/services" title="Services" />
        <ButtonSidebar src="/empacol/catalog" title="Catalog" />
      </ul>
    </nav>
  );
}
