import Logo from "./Logo";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <header className="Navbar">
      <div className="Navbar1">
        <div>
          <Logo />
        </div>
        <NavItems />
      </div>
    </header>
  );
}
