"use client";

import React, { useState } from "react";
import { SliderCrating } from "../../../../components";

export default function Crating() {
  return (
    <main className="w-10/12 md:w-full lg:w-10/12 h-screen md:h-full flex flex-col md:justify-around overflow-auto space-y-10 md:space-y-0">
      <h1 className="text-5xl font-semibold text-center text-shadow-yellow">
        CRATING SERVICES
      </h1>

      <SliderCrating />
    </main>
  );
}
