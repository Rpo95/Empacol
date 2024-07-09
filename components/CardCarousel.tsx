export default function CardCarousel({ type, handleClick }: any) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-xl bg-[#E96701]  px-4 py-2 focus flex flex-col w-full xs:bg-black justify-around items-center relative h-[340px] hover:scale-95"
    >
      <h1 className="text-2xl font-medium text-center">{type.h1}</h1>
      <div className="space-y-2 text-lg text-left w-full">
        {type.list.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </button>
  );
}
