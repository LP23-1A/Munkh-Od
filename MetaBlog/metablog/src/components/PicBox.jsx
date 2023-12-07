import { useEffect, useState } from "react";
import axios from "axios";
let api = "https://dev.to/api/articles?username=gereltuyamz";
export default function Home() {
  const [data, setData] = useState([]);
  const getData = async (api) => {
    let res = await axios.get(api);
    setData((prev) => [...res.data]);
  };
  const handler = () => {
    getData("https://dev.to/api/articles");
  };
  useEffect(() => {
    getData(api);
  }, []);

  return (
    <main className="flex items-center justify-center flex-wrap gap-5 bg-cover">
      {data.map((el, index) => {
        return (
          <div className="flex flex-col w-[392px] rounded-xl border p-4 gap-4 border-solid justify-center items-center ">
            <div
              className="bg-cover rounded-md flex gap-4 items-center"
              key={index}
              style={{
                backgroundImage: `url(${el.social_image})`,
                height: "240px",
                width: "360px",
              }}
            ></div>
            <div className="flex flex-col gap-3  ">
              <span className="text-[#4b6bfb] flex-wrap  overflow-hidden flex py-[4px] w-fit px-[10px] gap-1 font-normal text-sm rounded-md bg-[#4B6BFB0D]">
                {el.title}
              </span>
              <h3 className="h-[84px] flex  overflow-hidden  flex-wrap">
                {el.description}
              </h3>
              <h3>{el.published_at}</h3>
            </div>
          </div>
        );
      })}
      <button
        className="flex justify-center items-center gap-[12px] rounded-md border text-[#696a75] px-5 py-3"
        onClick={handler}
      >
        Load more
      </button>
    </main>
  );
}
