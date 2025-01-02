import Logo from "./Logo";
import Menu from "./Menu";
import CTA from "./CTA";
import NavIcon from "./NavIcon";

function NavBar() {
  return (
    <div className="fixed top-0 z-50 border-b border-b-[#d0dfea] lg:px-20 bg-[#fff] w-full">
      <div className="flex gap-4 justify-between items-center lg:max-w-[1400px] h-[72px] mx-auto my-0 px-5 py-4">
        <Logo />

        <Menu />

        <CTA />

        <NavIcon />
      </div>
    </div>
  );
}

export default NavBar;
