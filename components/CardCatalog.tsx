import { CardCatalogProps } from "../types";

export default function CardCatalog({ catalog }: CardCatalogProps) {
  const { title } = catalog;

  return (
    <div className="rounded-xl bg-[#E96701] px-4 py-2 focus flex flex-col w-5/6 items-center relative h-[70px] ">
      <h1 className="flex justify-center items-center h-full w-full text-lg font-medium text-center">
        {title}
      </h1>
    </div>
  );
}
