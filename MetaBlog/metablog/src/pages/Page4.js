import Foother from "@/components/Foother";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ContactUs() {
  const [data, setData] = useState({ published: true });

  const handlerInput = (event, objectKey) => {
    let mock = {};
    mock[objectKey] = event.target.value;
    setData({ ...data, ...mock });
  };
  console.log(data);
  return (
    <main>
      <div className="flex flex-col gap-[100px] justify-between items-center pr-[350px] pl-[350px] pb-[100px]">
        <Navbar />
        <div className="flex flex-col gap-[20px] w-[643px] pt-[14px] px-[10px]">
          <h1 className="text-[36px] font-bold">Contact Us</h1>
          <p className="text-[16px] text-[#696A75] w-[624px] h-[103px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
          <div>
            <div className="flex flex-col">
              <div className="flex py-[10px] gap-[50px]">
                <div className="items-start w-[294px] h-[133px] p-[16px] rounded-xl border gap-[10px]">
                  <h1 className="text-[24px] font-bold">Address</h1>
                  <p className="text-[#696A75]">
                    1328 Oak Ridge Drive, Saint Louis, Missouri
                  </p>
                </div>
                <div className="items-start w-[294px] h-[133px] p-[16px] rounded-xl border gap-[10px]">
                  <h1 className="text-[24px] font-bold">Address</h1>
                  <p className="text-[#696A75]">
                    1328 Oak Ridge Drive, Saint Louis, Missouri
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[29px] pl-[35px] pr-[130px] pb-[26px] rounded-[10px] bg-[#F6F6F7] gap-6">
            <h1 className="text-[18px] font-bold ">Leave a Message</h1>
            <div className="flex justify-between w-[478px]">
              <input
                className="w-[225px] h-[38px] bg-[#FFF] py-[14px] pl-[20px] pr-[14px]"
                onChange={(event) => handlerInput(event, "Your Name")}
                placeholder="Your Name"
              ></input>
              <input
                className="w-[225px] h-[38px] bg-[#FFF] py-[14px] pl-[20px] pr-[14px]"
                onChange={(event) => handlerInput(event, "Your Email")}
                placeholder="Your Email"
              ></input>
            </div>
            <div className="flex flex-col gap-[20px]">
              <input
                className="w-[478px] h-[35px] bg-[#FFF] py-[14px] pl-[20px] pr-[14px]"
                onChange={(event) => handlerInput(event, "Subject")}
                placeholder="Subject"
              ></input>
              <input
                className="w-[478px] h-[134px] bg-[#FFF] py-[14px] pl-[20px] pr-[14px]"
                onChange={(event) => handlerInput(event, "Write a message")}
                placeholder="Write a message"
              ></input>
            </div>
            <button className="flex flex-col justify-center items-center px-[16px] py-[10px] rounded-md bg-[#4b6bfb] w-[130px] h-[40px] text-[14px] font-[500] text-[#fff] ">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Foother />
    </main>
  );
}
