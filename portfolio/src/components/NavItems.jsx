import Image1 from "./Image1";
export default function NavItems() {
  return (
    <div className="Navitems">
      <button className="About">About</button>
      <button className="Work">Work</button>
      <button className="Testimonials">Testimonials</button>
      <button className="Contact">Contact</button>
      <button className="image1">
        <Image1 />
      </button>
      <button className="DownloadCV">Download CV</button>
    </div>
  );
}
