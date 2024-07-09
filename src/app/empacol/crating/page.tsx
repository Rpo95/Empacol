"use client";

import React, { useState } from "react";
import { SliderCrating } from "../../../../components";

export default function Crating() {
  return (
    <section className=" md:h-screen md:overflow-y-auto flex flex-col justify-center items-center space-y-10 md:space-y-0">
      <h1 className="text-5xl text-shadow-yellow text-center font-semibold">
        CRATING SERVICES
      </h1>
      <SliderCrating />
    </section>
  );
}
