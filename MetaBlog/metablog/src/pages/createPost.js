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
    <div className="flex flex-col gap-6 justify-center items-center">
      <input
        className="w-[140px] h-[30px] bg-[#d5f2d5]"
        onChange={(event) => handlerInput(event, "title")}
        placeholder="title"
      />
      <input
        className="w-[140px] h-[30px] bg-[#d5f2d5]"
        onChange={(event) => handlerInput(event, "body_markdown")}
        placeholder="published"
      />
      <input
        className="w-[140px] h-[30px] bg-[#d5f2d5]"
        onChange={(event) => handlerInput(event, "tags")}
        placeholder="tags"
      />
      <input
        className="w-[140px] h-[30px] bg-[#d5f2d5]"
        onChange={(event) => handlerInput(event, "series")}
        placeholder="series"
      />

      <button>Create Post</button>
    </div>
  );
}
