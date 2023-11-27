import Image1 from "./Image1";
export default function NavItems() {
  return (
    <div className="Navitems">
      <button className="NavAbout">About</button>
      <button className="NavWork">Work</button>
      <button className="NavTestimonials">Testimonials</button>
      <button className="NavContact">Contact</button>
      <button className="Navimage1">
        <Image1 />
      </button>
      <button className="NavDownloadCV">Download CV</button>
    </div>
  );
}
