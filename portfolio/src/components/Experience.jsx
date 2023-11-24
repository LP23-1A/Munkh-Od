import Image7 from "../components/Image7";

export default function About() {
  return (
    <div className="Experiencemain">
      <div className="Experiencemain1">
        <div className="Experiencemain11">
          <div className="Experience1">
            <div className="Experience101">
              <p className="Experience11">Experience</p>
            </div>
          </div>
          <div>
            <p className="Expertext1">
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
        </div>
        <div className="ExperBoxmain">
          <div className="ExperBox">
            <div>
              <Image7 />
            </div>
            <div className="Expertext2">
              <h2>Sr. Frontend Developer</h2>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Ut pretium arcu et massa semper, id fringilla leo semper.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <p>Nov 2021 - Present</p>
          </div>
          <div className="ExperBox">
            <div>
              <Image7 />
            </div>
            <div className="Expertext2">
              <h2>Team Lead</h2>
              <ul>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <p>Jul 2017 - Oct 2021</p>
          </div>
          <div className="ExperBox">
            <div>
              <Image7 />
            </div>
            <div className="Expertext2">
              <h2>Full Stack Developer</h2>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <p>Nov 2021 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}
