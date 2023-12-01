import Image1 from "./Image1";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function NavItems() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  const themeToggle = () => {
    if (theme == "dark") {
      setTheme("light");
    }
    if (theme == "light" || theme === "system") {
      setTheme("dark");
    }
  };
  return (
    <div className="flex gap-6">
      <button className="border-none bg-none gray-600">About</button>
      <button className="border-none bg-none gray-600">Work</button>
      <button className="border-none bg-none gray-600">Testimonials</button>
      <button className="border-none bg-none gray-600">Contact</button>
      <button className="border-none bg-none gray-600" onClick={themeToggle}>
        <Image1 />
      </button>
      <button className="flex px-[6px] py-1 justify-center gap-2 border-none rounded-xl NavDownloadCV ">
        Download CV
      </button>
    </div>
  );
}
