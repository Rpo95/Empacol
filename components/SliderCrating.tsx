"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import left from "../public/left.svg";
import right from "../public/right.svg";
import { crates } from "../components/Constants";
import DescriptionCrates from "../components/DescriptionCrates";

export default function SliderCrating() {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === crates.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(crates.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {}, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <main className="w-full  h-auto lg:w-10/12 lg:h-full rounded-lg flex items-center">
      <div className=" cursor-pointer" onClick={clickNext}>
        <Image src={left} alt="vivienda interes social" className="h-12 w-12" />
      </div>
      <div
        className={`w-full h-[292px] bg-blue-500 flex flex-col md:flex-row md:justify-center md:items-center  transition-transform ease-in-out duration-500 rounded-lg `}
      >
        {crates.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[292px]  transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <Image
              src={elem.src}
              alt=""
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-t-none"
            />
          </div>
        ))}
        <DescriptionCrates activeImage={activeImage} />
      </div>
      <div className="  cursor-pointer" onClick={clickPrev}>
        <Image src={right} alt="vis sur" className="h-12 w-12" />
      </div>
    </main>
  );
}
