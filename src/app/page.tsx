import { EmpacolLayout, Footer } from "../../components";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: 'url("/layout.svg")' }}
      className="bg-cover h-screen w-screen "
    >
      <EmpacolLayout />
    </main>
  );
}
