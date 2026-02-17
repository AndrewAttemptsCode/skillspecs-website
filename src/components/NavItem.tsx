import { NavLink } from "react-router-dom";
import stone from "../assets/images/stone_btn.png";
import type { NavListData } from "../data/NavList";

type ItemProps = {
  item: NavListData;
};

const NavItem = ({ item }: ItemProps) => {
  const { label, Icon, styles } = item;

  const transitionClasses = "ease transition duration-300";

  return (
    <NavLink
      to={label}
      title={label}
      className="group relative block rounded-xl outline-none focus:ring-2 focus:ring-emerald-300"
    >
      <img
        src={stone}
        alt=""
        className={`w-16 group-hover:brightness-110 ${transitionClasses}`}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <Icon
          className={`size-full group-hover:scale-110 ${transitionClasses} ${styles}`}
        />
      </div>
    </NavLink>
  );
};

export default NavItem;
