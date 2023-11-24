import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="Main01">
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Experience />
        </div>
      </div>
    </div>
  );
}
