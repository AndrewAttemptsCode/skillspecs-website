import { NavLink, useLocation } from "react-router-dom";
import stone from "../assets/images/buttons/stone_btn.png";
import type { NavListData } from "../data/NavList";
import { useEffect, useState } from "react";

type ItemProps = {
  item: NavListData;
  navOpen: boolean;
};

const NavItem = ({ item, navOpen }: ItemProps) => {
  const { path, label, Icon, styles, active } = item;
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1024);

  const transitionClasses = "ease transition duration-300";
  const selected = path === location.pathname;

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabOptions = navOpen || isDesktop ? 0 : -1; 

  return (
    <NavLink
      to={path}
      title={label}
      className={`group lg:tabIndex-0 transition-transform duration-200 ease-linear block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#7FBF3F] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${navOpen ? "translate-x-0" : "translate-x-[150%]"} lg:translate-x-0`}
      tabIndex={tabOptions}
    >
      <img
        src={stone}
        alt=""
        className={`w-16 group-hover:brightness-110 group-focus-visible:brightness-110 ${transitionClasses}`}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <Icon
          className={`size-full group-hover:scale-110 ${transitionClasses} ${styles} ${selected ? active : ""} group-focus-visible:scale-110`}
        />
      </div>
    </NavLink>
  );
};

export default NavItem;
