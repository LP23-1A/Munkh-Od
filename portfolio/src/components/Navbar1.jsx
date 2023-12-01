import Logo from "./Logo";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <header className="px-4 py-5 md:max-w-[1280px] md:mx-auto">
      <div className="flex justify-between items-center py-2">
        <div>
          <Logo />
        </div>
        <NavItems />
      </div>
    </header>
  );
}
