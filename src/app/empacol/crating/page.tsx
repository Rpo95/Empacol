"use client";

import React, { useState } from "react";
import { SliderCrating } from "../../../../components";

export default function Crating() {
  return (
    <section className=" h-screen overflow-y-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center font-semibold">CRATING SERVICES</h1>
      <SliderCrating />
    </section>
  );
}
