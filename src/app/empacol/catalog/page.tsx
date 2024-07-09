"use client";

import { CardCatalog } from "../../../../components";
import { catalogs } from "../../../../components/Constants";

export default function Catalog() {
  return (
    <main className="w-10/12  h-full flex flex-col justify-around ">
      <h1 className="text-5xl font-semibold text-center text-shadow-yellow">
        CATALOG
      </h1>
      <div className="grid grid-cols-3 w-full justify-items-center h-4/6">
        {catalogs.map((catalog, index) => (
          <CardCatalog key={index} catalog={catalog} />
        ))}
      </div>
    </main>
  );
}
