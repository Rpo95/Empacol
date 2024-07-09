import React from "react";

export default function CartonBoxes() {
  const sizes = [
    ["4 x 4 x 4", "12 x 12 x 12", "20 x 20 x 20"],
    ["5 x 5 x 5", "14 x 14 x 14", "24 x 24 x 24"],
    ["6 x 6 x 6", "16 x 16 x 16", "30 x 30 x 30"],
    ["8 x 8 x 8", "18 x 18 x 18", "36 x 36 x 36"],
    ["10 x 10 x 10"],
  ];
  const MISCELLANEOUS = [
    ["6 x 6 x 4", "12 x 12 x 6", "20 x 12 x 6"],
    ["9 x 7 x 5", "12 x 12 x 26", "23 1/2 x 23 1/2 x 12"],
    ["12 x 6 x 6", "14 3/8 x 10 3/4 x 7 3/8", "24 x 12 x 12"],
    ["12 x 9 x 3", "14 x 10 x 10", "30 x 15 x 3"],
    ["12 x 9 x 4", "15 x 12 x 6", "30 x 15 x 6"],
    ["12 x 9 x 6", "16 x 12 x 10", "30 x 15 x 9"],
    ["12 x 9 x 9", "17 1/4 x 11 1/4 x 11", "33 x 17 x 12"],
    ["12 x 9 x 12", "18 x 12 x 16", "33 x 17 x 15"],
    ["BOOK PACK", "UPS 84", "MATTRESS TWIN"],
    ["18 x 12 x 12", "24 x 16 3/4 x 12", "75 x 7 x 39"],
    ["#25", "UPS 108", "MATTRESS FULL"],
    ["17 x 17 x 12", "24 x 18 x 22", "75 x 7 x 54"],
    ["#50", "UPS 130", "MATTRESS QUEEN/KING SET"],
    ["18 x 18 x 24", "Sony 130", "81 x 8 1/2 x 42"],
  ];
  return (
    <section className="w-11/12 h-screen pb-6 overflow-y-auto space-y-10 flex flex-col items-center justify-around">
      <h1 className="text-4xl text-center font-semibold text-shadow-yellow">
        CARTON BOXES
      </h1>
      <div className="w-full space-y-5">
        <h3 className="text-xl font-medium">
          All these sizes on hand… in stock… and ready to go!
        </h3>
        <h3 className="text-xl font-medium">
          <ul>
            <li>L = Length in inches</li>
            <li>W = Width in inches</li>
            <li>H = Height in inches</li>
          </ul>
        </h3>
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-lg mb-4">
            CUBE CARTONS RSC 200 TEST
          </h1>
          <div className="grid grid-cols-3 gap-4 text-center">
            {sizes.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.map((size, colIndex) => (
                  <div key={colIndex} className="text-gray-600">
                    {size}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col">
          <h1 className="text-center font-bold text-lg mb-4">
            MISCELLANEOUS CARTONS RSC 200 TEST
          </h1>
          <h2 className="text-center font-medium text-md mb-6">
            Size (L x W x H):
          </h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            {MISCELLANEOUS.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.map((size, colIndex) => (
                  <div key={colIndex} className="text-gray-600">
                    {size}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
