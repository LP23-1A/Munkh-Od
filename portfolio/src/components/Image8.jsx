import pic from "../assets/d0bfafa5cbd6a89dfe634a542f95ebd2.png";

export default function Image8() {
  console.log(pic);
  return (
    <img src={pic.src} alt="" style={{ width: "480px", height: "384px" }} />
  );
}
