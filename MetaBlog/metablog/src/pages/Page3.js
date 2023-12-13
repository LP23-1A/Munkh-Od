import Foother from "@/components/Foother";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-[100px] justify-between items-center pr-[350px] pl-[350px]">
        <Navbar />
      </div>

      <Foother />
    </main>
  );
}
