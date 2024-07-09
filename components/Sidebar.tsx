import ButtonSidebar from "./ButtonSidebar";

export default function Sidebar({ isOpen, toggleSidebar }: any) {
  return (
    <nav
      className={`fixed top-0 left-0 h-full w-[201px] bg-[#ff9500] flex flex-col items-center justify-around z-50 transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 md:h-[95%] md:rounded-lg`}
    >
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
      <button
        className="md:hidden absolute top-4 right-4 text-white"
        onClick={toggleSidebar}
      >
        Close
      </button>
    </nav>
  );
}
