import pic from "../assets/icon-tailwindcss.jpg";

export default function Image612() {
  console.log(pic);
  return <img src={pic.src} alt="" style={{ width: "64px" }} />;
}
