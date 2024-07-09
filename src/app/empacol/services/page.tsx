import { Slider } from "../../../../components";

export default function Services() {
  return (
    <section className=" h-screen md:overflow-y-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center font-semibold text-shadow-yellow">
        SERVICES
      </h1>
      <Slider />
    </section>
  );
}
