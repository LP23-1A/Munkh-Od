import Navbar from "@/components/Navbar";
import Foother from "@/components/Foother";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-[100px] justify-between items-center pr-[350px] pl-[350px]">
        <Navbar />
        <div className="flex gap-[40px] pb-[100px] justify-center items-center">
          <h1 className="text-[72px]">404</h1>
          <div className="w-[1px] h-[156px] bg-[#e8e8ea]"></div>
          <div className="flex flex-col gap-[20px] justify-end items-start py-[8px]">
            <div className="text-[24px] font-bold">Page Not Found</div>
            <p className="w-[392px]">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </p>
            <button className="flex flex-col justify-center items-center px-[16px] py-[10px] rounded-md bg-[#4b6bfb] w-[130px] h-[40px] text-[14px] font-[500] text-[#fff] ">
              Back To Home
            </button>
          </div>
        </div>
      </div>

      <Foother />
    </main>
  );
}
