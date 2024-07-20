"use client";

import React, { useState } from "react";
import { SliderCrating } from "../../../../components";

export default function Crating() {
  return (
    <section className=" h-screen md:overflow-y-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center font-semibold text-shadow-yellow">
        CRATING SERVICES
      </h1>
      <div className="overflow-scroll">
        <SliderCrating />
      </div>
    </section>
  );
}
