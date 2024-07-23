import ButtonSidebar from "./ButtonSidebar";

export default function Sidebar({ isOpen, toggleSidebar }: any) {
  return (
    <nav
      className={`fixed top-0 left-0 h-full w-[201px] bg-[#ff9500] flex flex-col items-center justify-around z-50 transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 md:h-[95%] md:rounded-lg`}
    >
      <div className="flex flex-col  items-center">
        <h1 className="text-3xl font-medium ">Empacol</h1>
        <h3 className="text-lg font-medium">Packing & Supplies</h3>
      </div>
      <ul className="flex flex-col w-9/12  space-y-5">
        <ButtonSidebar src="/empacol" title="Home" onClick={toggleSidebar} />
        <ButtonSidebar
          src="/empacol/aboutUs"
          title="About Us"
          onClick={toggleSidebar}
        />
        <ButtonSidebar
          src="/empacol/crating"
          title="Crating"
          onClick={toggleSidebar}
        />
        <ButtonSidebar
          src="/empacol/supplies"
          title="Supplies"
          onClick={toggleSidebar}
        />
        <ButtonSidebar
          src="/empacol/services"
          title="Services"
          onClick={toggleSidebar}
        />
        <ButtonSidebar
          src="/empacol/catalog"
          title="Catalog"
          onClick={toggleSidebar}
        />
      </ul>
      <button
        className="md:hidden absolute top-6 right-4 text-white font-medium"
        onClick={toggleSidebar}
      >
        Close
      </button>
    </nav>
  );
}
