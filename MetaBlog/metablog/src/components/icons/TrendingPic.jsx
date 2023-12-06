export default function (props) {
  return (
    <div
      className="w-[289px] h-[320px] bg-cover flex rounded-xl"
      style={{ backgroundImage: `url(${props.img})` }}
    ></div>
  );
}
