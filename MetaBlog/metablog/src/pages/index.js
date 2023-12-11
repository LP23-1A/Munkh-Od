import MainBigPic from "@/components/icons/MainBigPic";
import Navbar from "@/components/Navbar";
import TrendingPic from "@/components/icons/TrendingPic";
import PicBox from "../components/PicBox";
import ArrowLeft from "@/components/icons/ArrowLeft";
import ArrowRight from "@/components/icons/ArrowRight";
import Facebook from "@/components/icons/Facebook";
import Twitter from "@/components/icons/Twitter";
import Instagram from "@/components/icons/Instagram";
import Linkedin from "@/components/icons/Linkedin";
import Blogo from "@/components/icons/Blogo";
const MainBigData = [
  {
    img: "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

const TrendingData = [
  {
    img: "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/8d5b/3c3e/9c1f18bc8db1dc4de14eac308e1e1594?Expires=1702857600&Signature=iMU-7Qz1Mbpq1V~SJFTCy0eim3ir1jjcZ9WuY1jMQ~e8xG~GtQ1YvS5uHIMGX7iI~x8gCuA8cgO~AEQSN~CjEmoAPydwvYxU68OWHT~OP91wrXr1Il88mI2m77BDnkWPBwkPiqyMAdZRpL1uUdVcYc7H-y4KhRgdZZOles31oS6WlBR~dL3j-SJMwurF8WR2485RHIxd0vNh-SUd0d5lTjghTtOxgiJ0UGriEWNBMbt3qED6uA8dBEfLoq~pgD3pCYRftJvZ6go1UFd76ENIdWFQ4r3hVC8JiV8HbR57XX5ykU8F5wGnXVtoGYVLXIJSGgiuKBe8bxRuh~qak8iAqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a7b0/86f2/c97b173ebc05fa8f9660788e8e0971b9?Expires=1702857600&Signature=XnHa8Q-XIFUmjjLsRm9xjDTuPs05J5cFScQK67QN9RVDr3bdRMdUDKgSsVtncgaFEPg01mmSzX1vrOFrjUHinEXkAZYT5ClcNvTNqKB2w-Sqt7qgtMtEXLOBZABkNIvJa9QrGHaS75gih8c6JJC21cDIx9Z~NrgcdINMSZ6r2UvuV2zEobwg6pc5MCX3jrlIDnu8u0kGvHxsCYazbggBp6cNwI7IjgjU9m0gpv43NroKwu1LoMSUUbH2AaIl8rxJGtvOTkhbFvq3VGBBSHHytq289W6dnFskmaN~y5TDoMtjikQK8vzZGmRH~ao5QMFa9DPkHdE68g94-YceuDLVdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/21a4/f878/0943144e7126909a96868bd7542caf21?Expires=1702857600&Signature=pSWj7~T8FkEgg3IG4myLmybU8Im2fCEhMKR~sZkMLc6lFredr8jb6YL~cL7q5sD1Fz6B5fsRuxeNUrn72GxGgR6yMAkHcJuftovCLrhJDegOQtF-TgTpRy1UamH9vPZlTwV3T1UKigVhmnGNUIhUaKePxOg64nX-zViv1ecY1YWz3Ls~GhX8W1Z74U9lv76qsPp2JGrZMRzm8LtvLmzrE4iBlDQEyA2rW0SZeJA2nAWJZCu2wzALbMnCsCeeVmYzRh20DYRgoV~5UqK1DFWMoz8C~vgFPT3D8i8LoXALhvaE7i8sSh6nct3Lh8nKTjRT2N7FWbpMweVMQvvaLdY06g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col gap-[100px] justify-center items-center pr-[350px] pl-[350px]">
        <Navbar />
        <div className="relative flex flex-col justify-center">
          {MainBigData.map((element) => {
            return <MainBigPic img={element.img} />;
          })}
          <div className="absolute flex flex-col w-[598px] h-[252px] p-[40px] gap-[24px] rounded-xl border border-solid bg-white right-[607px] left-[11px] top-[335px] bottom-[64px]   ">
            <div className="flex flex-col gap-[16px]">
              <div className="flex w-[97px] py-[4px] px-[10px] justify-center items-center gap-[4px] rounded bg-[#4B6BFB] ">
                <h3 className="text-[14x] font-medium text-white">
                  Technology
                </h3>
              </div>
              <h1 className="text-[36px] font-bold leading-10">
                Grid system for better Design User Interface
              </h1>
              <h5>August 20,2022</h5>
            </div>
          </div>
          <div className="flex ">
            <button>
              <ArrowLeft />
            </button>
            <button>
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[30px] ">
          <h1 className="text-[24px] font-bold">Trending</h1>
          <div className="flex justify-center gap-[20px]">
            {TrendingData.map((element) => {
              return <TrendingPic img={element.img} />;
            })}
          </div>
        </div>
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

      <div className=" bg-[#F6F6F7] items-center flex flex-col gap-[25px] pr-[352px] pl-[352px] pt-16">
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-5 w-[1215px]">
            <div className="flex flex-col items-start gap-6 ">
              <div className="flex flex-col gap-3 items-start">
                <div className="text-[18px] font-bold">About</div>
                <p className="w-[280px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
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
    </main>
  );
}
