import stone from "../assets/images/buttons/stone_btn.png";
import bag from "../assets/images/icons/bag_icon.png";

type MenuProps = {
  updateNav: () => void;
  navOpen: boolean;
}

const NavMenuButton = ({ navOpen, updateNav }: MenuProps) => {
  return (
    <li className="relative lg:hidden">
      <button
        aria-label="Navigation menu"
        aria-expanded={navOpen}
        onClick={updateNav}
      >
        <img
          src={stone} alt=""
          className="w-16"
        />
        <img
          src={bag} alt=""
          className="absolute inset-0 p-4 w-full"
        />
      </button>
    </li>
  );
};

export default NavMenuButton;