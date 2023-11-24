import pic from "../assets/11cd2ba02a83d564218d6500a134a91d.jpeg";

export default function Image2() {
  console.log(pic);
  return (
    <img src={pic.src} alt="" style={{ width: "280px", height: "320px" }} />
  );
}
