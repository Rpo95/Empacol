import Link from "next/link";
import { ButtonSidebarProps } from "../types";

export default function ButtonSidebar({ src, title }: ButtonSidebarProps) {
  return (
    <Link href={src}>
      <li className="border-b-2 hover:border-white hover:cursor-pointer border-black text-lg hover:scale-95 hover:text-white">
        <button className="">{title}</button>
      </li>
    </Link>
  );
}
