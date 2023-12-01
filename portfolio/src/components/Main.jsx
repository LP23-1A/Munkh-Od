import Image2 from "../components/Image2";
import Image3 from "./Image3";
import Image4 from "./Image4";

export default function Main() {
  return (
    <div className="flex px-24 py-20 justify-between items-start self-stretch">
      <div className="flex py-8 justify-between items-start self-stretch gap-12">
        <div className="flex flex-col gap-12 ">
          <div className="flex flex-col justify-center items-start gap-2 self-stretch">
            <h1 className="text-6xl not-italic font-bold Maintext111 ">
              Hi, I’m Sagar 👋
            </h1>
            <p className="Maintext112">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>

          <div className="Maintext1221">
            <div className="MainImage3">
              <Image3 />
              <p className="Maintext1222">Ahmedabad, India</p>
            </div>
            <div className="Maintext12">
              <div className="Maintext121">
                <div className="MAintext1211"></div>
              </div>
              <p>Available for new projects</p>
            </div>
          </div>

          <Image4 />
        </div>
        <div className="MainImage2">
          <Image2 />
          <div className="Mainimage2cover"></div>
        </div>
      </div>
    </div>
  );
}
