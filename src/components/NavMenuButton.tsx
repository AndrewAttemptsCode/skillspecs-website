import stone from "../assets/images/buttons/stone_btn.png";
import bag from "../assets/images/icons/bag_icon.png";

type MenuProps = {
  updateNav: () => void;
  navOpen: boolean;
}

const NavMenuButton = ({ navOpen, updateNav }: MenuProps) => {
  return (
    <button
      aria-expanded={navOpen}
      onClick={updateNav}
      className="relative lg:hidden rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#7FBF3F] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-transform duration-200 ease-linear"
    >

      <span className="sr-only">
        {navOpen ? "Close" : "Open"} navigation menu
      </span>

      <img
        src={stone} alt=""
        className="w-16"
      />
      <img
        src={bag} alt=""
        className="absolute inset-0 p-4 w-full"
      />
    </button>
  );
};

export default NavMenuButton;