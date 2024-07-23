"use client";

import React, { useState, useEffect } from "react";
import {
  CardCarousel,
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../../components";
import { types } from "../../../../components/Constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Supplies() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <main className="w-10/12 md:w-11/12 lg:w-10/12 h-full  flex flex-col md:justify-around space-y-10 md:space-y-0">
      <h1 className="text-5xl font-semibold text-center text-shadow-yellow">
        PACKING SUPPLIES
      </h1>

      <Slider {...settings}>
        {types.map((type, index) => (
          <CardCarousel key={index} type={type} />
        ))}
      </Slider>
    </main>
  );
}
