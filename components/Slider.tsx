"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import left from "../public/left.svg";
import right from "../public/right.svg";
import { images } from "../components/Constants";
import Description from "../components/Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {}, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <main className="w-full md:w-10/12 h-full rounded-lg flex items-center">
      <div className=" cursor-pointer" onClick={clickNext}>
        <Image src={left} alt="vivienda interes social" className="h-12 w-12" />
      </div>
      <div
        className={`w-full h-5/6 md:h-full flex flex-col md:flex-row md:justify-center md:items-center  transition-transform ease-in-out duration-500 rounded-lg `}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[30vh] md:h-[40vh] lg:h-[51vh] transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <Image
              src={elem.src}
              alt=""
              quality={100}
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-t-none"
            />
          </div>
        ))}
        <Description activeImage={activeImage} />
      </div>
      <div className="  cursor-pointer" onClick={clickPrev}>
        <Image src={right} alt="vis sur" className="h-12 w-12" />
      </div>
    </main>
  );
};

export default Slider;
