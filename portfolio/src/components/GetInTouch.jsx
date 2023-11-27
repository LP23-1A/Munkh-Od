import Image10 from "./Image10";
import Image11 from "./Image11";
import Image12 from "./Image12";
import Image4 from "./Image4";

export default function GetInTouch() {
  return (
    <div className="GetInmain">
      <div className="GetInmain1">
        <div className="GetInmain11">
          <div className="GetIn1">
            <div className="GetIn101">
              <p className="GetIn11">Get In Touch</p>
            </div>
          </div>
          <div>
            <p className="GetIntext1">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
          </div>
        </div>
        <div className="Gettext1">
          <div className="Gettext11">
            <button className="GetButton">
              <Image11 />
            </button>
            <p className="Gettext111">reachsagarshah@gmail.com</p>
            <button className="GetButton">
              <Image12 />
            </button>
          </div>
          <div className="Gettext11">
            <button className="GetButton">
              <Image10 />
            </button>
            <p className="Gettext111">+91 8980500565</p>
            <button className="GetButton">
              <Image12 />
            </button>
          </div>
        </div>
        <div className="Gettext2">
          <p>You may also find me on these platforms!</p>
          <Image4 />
        </div>
      </div>
    </div>
  );
}
