import Link from "next/link";
import { CardCatalogProps } from "../types";

export default function CardCatalog({ catalog }: CardCatalogProps) {
  const { title, href } = catalog;

  return (
    <Link
      href={href}
      className="rounded-xl bg-[#E96701] px-4 py-2 focus flex flex-col w-5/6 items-center relative h-[70px] hover:scale-95"
    >
      <h1 className="flex justify-center items-center h-full w-full text-lg font-medium">
        {title}
      </h1>
    </Link>
  );
}
