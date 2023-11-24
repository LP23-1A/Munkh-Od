import pic from "../assets/logo-upwork.jpg";

export default function Image2() {
  console.log(pic);
  return (
    <img src={pic.src} alt="" style={{ width: "102px", height: "28px" }} />
  );
}
