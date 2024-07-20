"use client";

import { CardCatalog } from "../../../../components";
import { catalogs } from "../../../../components/Constants";

export default function Catalog() {
  return (
    <main className="w-10/12 overflow-y-scroll h-full flex flex-col justify-around space-y-10">
      <h1 className="text-5xl font-semibold text-center text-shadow-yellow">
        CATALOG
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full justify-items-center h-full lg:h-4/6 space-y-5 lg:space-y-0">
        {catalogs.map((catalog, index) => (
          <CardCatalog key={index} catalog={catalog} />
        ))}
      </div>
    </main>
  );
}
