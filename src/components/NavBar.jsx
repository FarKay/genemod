import Logo from "./Logo";
import Menu from "./Menu";
import CTA from "./CTA";
import NavIcon from "./NavIcon";

function NavBar() {
  return (
    <div className="bg-[#fff] py-4 px-5 flex gap-4 justify-between items-center lg:px-20">
      <div className="lg:flex lg:items-center lg:gap-20 lg:justify-between">
        <Logo />

        <Menu />
      </div>

      <CTA />

      <NavIcon />
    </div>
  );
}

export default NavBar;
