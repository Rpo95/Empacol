"use client";

import Link from "next/link";
import CustomButtom from "./CustomButtom";
import Image from "next/image";

export default function EmpacolLayout() {
  return (
    <main className="w-full  h-full flex flex-col ">
      <div className="w-full flex ">
        <div className="w-full h-full ">
          <Image src="/layout2.svg" className="" fill alt="Empacol" />
        </div>
      </div>
      <div className="w-full text-center absolute bottom-60 md:bottom-12">
        <Link href="/empacol">
          <button title="Welcome!" className="btn-secondary ">
            Welcome!
          </button>
        </Link>
      </div>
    </main>
  );
}
