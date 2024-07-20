import Link from "next/link";
import { CardServiceProps } from "../types";
import Image from "next/image";

export default function CardService({ src, p, href }: CardServiceProps) {
  return (
    <div className="w-72 lg:w-72 xl:w-[300px] h-[310px] hover:scale-105 hover:cursor-pointer lg:h-[280px] bg-[#ff9500] shadow-xl border-t-2 border-b-2 rounded-lg shadow-[#163020]">
      <Link href={href}>
        <div className="flex flex-col items-center w-full h-full">
          <div className="w-full h-5/6 relative">
            <Image
              className="object-cover w-full h-full rounded-t-lg"
              src={src}
              alt="Empacol"
              layout="fill"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-1/4 px-2">
            <h1 className="text-base text-black font-semibold text-center">
              {p}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
