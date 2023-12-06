export default function (props) {
  return (
    <div
      className="w-[1216px] h-[600px] bg-cover flex"
      style={{ backgroundImage: `url(${props.img})` }}
    ></div>
  );
}
