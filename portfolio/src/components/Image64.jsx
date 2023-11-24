import pic from "../assets/icon-nextjs.jpg";

export default function Image64() {
  console.log(pic);
  return <img src={pic.src} alt="" style={{ width: "64px" }} />;
}
