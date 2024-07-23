import { FaWhatsapp, FaPhone } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full rounded-lg grid grid-cols-1 sm:grid-cols-3 px-4 py-2 text-white  bg-black space-y-5 md:space-y-0 my-6 md:my-0">
      <div className="  ">
        <h3 className="font-bold">Adress:</h3>
        <p className="">7010 N.W. 51 ST, Miami FL. 33166</p>
      </div>
      <div className="">
        <h3 className="font-bold">Mail:</h3>
        <p> Info@empacol.com</p>
      </div>
      <div className="  ">
        <h3 className="font-bold">Phone:</h3>
        <p className="flex items-center ">
          <FaPhone className="mr-2 md:mx-1" /> PH: (305) 594-4771
        </p>
      </div>
    </footer>
  );
}
