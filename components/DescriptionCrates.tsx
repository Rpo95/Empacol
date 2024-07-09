import { crates } from "../components/Constants";
import { DescriptionCratesProps } from "../types";

export default function DescriptionCrates({
  activeImage,
}: DescriptionCratesProps) {
  return (
    <div
      className={`h-[232px] py-3 w-full  ${
        activeImage % 2 === 0 ? "bg-[#ff9500]" : "bg-[#E96701]"
      }  relative h-full flex justify-center md:rounded-tr-lg md:rounded-br-lg md:rounded-b-none rounded-b-lg`}
    >
      {crates.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "  w-5/6 flex flex-col space-y-5 text-left"
              : "hidden"
          }`}
        >
          <div className="text-3xl font-medium text-center  ">{elem.title}</div>
          <div className="text-lg overflow-y-auto pr-2">{elem.desc}</div>
        </div>
      ))}
    </div>
  );
}
