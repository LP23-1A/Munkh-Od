import Facebook from "@/components/icons/Facebook";
import Twitter from "@/components/icons/Twitter";
import Instagram from "@/components/icons/Instagram";
import Linkedin from "@/components/icons/Linkedin";
import Blogo from "@/components/icons/Blogo";

export default function Foother() {
  return (
    <div className=" bg-[#F6F6F7] items-center flex flex-col gap-[25px] pr-[352px] pl-[352px] pt-16">
      <div className="flex flex-col gap-[15px]">
        <div className="flex gap-5 w-[1215px]">
          <div className="flex flex-col items-start gap-6 ">
            <div className="flex flex-col gap-3 items-start">
              <div className="text-[18px] font-bold">About</div>
              <p className="w-[280px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div>
              <div>Email : info@jstemplate.net</div>
              <div>Phone : 880 123 456 789</div>
            </div>
          </div>
          <div className="w-[521px] flex items-start justify-center gap-20">
            <div className="flex items-start gap-2 flex-col">
              <p>Home</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="flex gap-5">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>
      <div className="flex w-[1216px] justify-between gap-16 py-8 border-t">
        <div className="flex gap-[10px] items-center">
          <Blogo />
          <div className="flex flex-col">
            <div className="flex">
              <p className="text-[20px]">Meta</p>
              <p className="text-[20px] font-extrabold">Blog</p>
            </div>
            <p className="text-[16px]">© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex gap-4 justify-end items-center">
          <button>Terms of Use</button>
          <button>Privacy Policy</button>
          <button>Cookie Policy</button>
        </div>
      </div>
    </div>
  );
}
