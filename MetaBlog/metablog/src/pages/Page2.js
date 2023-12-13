import Navbar from "@/components/Navbar";
import PicBox from "../components/PicBox";
import Foother from "@/components/Foother";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-[100px] justify-between items-center pr-[350px] pl-[350px]">
        <Navbar />

        <div className="flex justify-between items-center w-[1216px]">
          <div className="flex flex-col justify-between gap-[30px]">
            <h1 className="text-[24px] font-bold">All Blog Post</h1>
            <div className="flex gap-[30px] justify-between">
              <div className="flex gap-[20px]">
                <button>All</button>
                <button>Design</button>
                <button>Travel</button>
                <button>Fashion</button>
                <button>Technology</button>
                <button>Branding</button>
              </div>
              <div className="flex justify-end">
                <button>View All</button>
              </div>
            </div>

            <PicBox />
          </div>
        </div>
      </div>

      <Foother />
    </main>
  );
}
