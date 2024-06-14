export default function CardSupplies({ type }: any) {
  return (
    <div className="flex flex-col rounded-lg justify-between space-y-4 w-[300px] h-full  bg-[#E96701] py-4 px-2">
      <h1 className="text-3xl font-medium text-center w-full">{type.h1}</h1>
      <ul className="space-y-2 text-lg ml-4 text-left">
        {type.list.map((item: string, index: number) => (
          <li key={index}>* {item}</li>
        ))}
      </ul>
    </div>
  );
}
