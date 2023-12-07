import { useState } from "react";
import Layout from "./Layout";
import Logo from "./icons/Logo";
import MenuIcon from "./icons/MenuIcon";
import MobileMenu from "./MobileMenu";
import Theme from "./icons/Theme";
import { MENU_ITEMS } from "@/constants/menu";
import { useTheme } from "next-themes";
import Search from "./Search/Search";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  const themeToggle = () => {
    if (theme == "dark") {
      setTheme("light");
    }
    if (theme == "light") {
      setTheme("dark");
    }
  };

  return (
    <Layout>
      <nav className="w-full flex items-center pt-8 pb-8 gap-[118px] ">
        <Logo color="#fff" />
        <button className="md:hidden" onClick={menuHandler}>
          <MenuIcon />
        </button>
        <div className="hidden md:flex items-center gap-[21px] ">
          <ul className="py-4 flex gap-7 w-[667px] justify-center ">
            {MENU_ITEMS.map((item) => (
              <li className="list-none">{item}</li>
            ))}
          </ul>
          <div>
            <Search />
          </div>

          {/* <button onClick={themeToggle}>
            <Theme />
          </button> */}
          {/* <button className="w-full bg-black text-white px-4 py-1.5 rounded-lg font-medium dark:text-red-400">
            Download CV
          </button> */}
        </div>
      </nav>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </Layout>
  );
}
