"use client";

import React, { useState } from "react";
import { CardSupplies } from "../../../../components";
import { types } from "../../../../components/Constants";

export default function Supplies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerPage = 2;

  const nextSlide = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex > types.length - slidesPerPage ? 0 : newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? types.length - slidesPerPage : newIndex);
  };

  return (
    <main className="flex flex-col items-center w-full justify-around  h-full">
      <h1 className="text-5xl font-bold">Supplies</h1>
      <div className="slider-container w-full   ">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerPage)}%)`,
          }}
        >
          {types.map((type, index) => (
            <div key={index} className="slide w-full  justify-center flex">
              <CardSupplies type={type} />
            </div>
          ))}
        </div>
        <div className="navigation-buttons w-full ">
          <button className="left-arrow" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="right-arrow" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </main>
  );
}
