"use client";

import Link from "next/link";
import CustomButtom from "./CustomButtom";
import Image from "next/image";

export default function EmpacolLayout() {
  return (
    <main className="w-full md:w-5/6 h-full flex   justify-center items-center flex-col ">
      <div className="w-full flex ">
        <div className="w-4/6 h-full flex flex-col justify-center">
          <h1 className="text-6xl text-[#ff9500] font-medium md:text-[900%] text-center text-shadow-lg">
            EMPACOL
          </h1>
          <h2 className="text-xl text-[#ff9500]  md:text-[250%] text-center text-stroke-md font-extrabold">
            Packing & Supplies
          </h2>
        </div>
        <div className="w-2/6  h-full flex flex-col justify-center items-center">
          <Image
            src="/jirafa.png"
            className=""
            width={250}
            height={250}
            alt="Empacol"
          />
        </div>
      </div>
      <div className="w-full text-center justify-center flex flex-col md:flex-row ">
        <Link href="/empacol">
          <button title="Welcome!" className="btn-secondary ">
            Welcome!
          </button>
        </Link>
      </div>
    </main>
  );
}
