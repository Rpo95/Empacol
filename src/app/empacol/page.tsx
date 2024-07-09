"use client";
import { CardService } from "../../../components";
import Image from "next/image";

import React, { useState } from "react";

export default function Empacol() {
  return (
    <section className="  md:h-screen w-full md:overflow-y-auto flex flex-col justify-around items-center space-y-14 lg:space-y-0">
      <h1 className="text-6xl text-center font-semibold text-shadow-yellow">
        EMPACOL
      </h1>
      <div className="flex flex-col w-full space-y-16 lg:space-y-0 items-center lg:flex-row md:w-5/6 md:justify-around">
        <CardService
          href="/empacol/crating"
          src="/crate.jpg"
          p="Packing and Crating Services"
        />
        <CardService
          href="/empacol/supplies"
          src="/supplie.webp"
          p="Packing Materials & Equipment"
        />
      </div>
      <Image
        src="/jirafa1.png"
        alt={"Empacol"}
        width={170}
        height={200}
        className="hidden md:block absolute left-[212px] top-1/3 lg:top-1/2 transform -translate-y-1/2"
      />
    </section>
  );
}
