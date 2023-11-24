import Image2 from "../components/image2";
import Image3 from "./Image3";
import Image4 from "./image4";

export default function Main() {
  return (
    <div className="Main1">
      <div className="main11">
        <div className="text1">
          <div className="text11">
            <h1 className="text111">Hi, I’m Sagar 👋</h1>
            <p className="text112">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>

          <div className="text1221">
            <div className="Image3">
              <Image3 />
              <p className="text1222">Ahmedabad, India</p>
            </div>
            <div className="text12">
              <div className="text121">
                <div className="text1211"></div>
              </div>
              <p>Available for new projects</p>
            </div>
          </div>

          <Image4 />
        </div>
        <div className="Image2">
          <Image2 />
          <div className="image2cover"></div>
        </div>
      </div>
    </div>
  );
}
