import { useLocation } from "react-router-dom";
import navList from "../data/NavList";
import NavItem from "./NavItem";

type NavProps = {
  navOpen: boolean;
  closeNav: () => void;
};

const NavBar = ({ navOpen, closeNav }: NavProps) => {
  const location = useLocation();
  const list = location.pathname === "/"
    ? navList.filter((item) => item.path !== location.pathname)
    : navList;

  return (
    <nav className="absolute lg:static right-0 top-full z-50 px-1 lg:px-0 overflow-x-hidden">
      <ul
        className="lg:flex"
        aria-label="Navigation list"
        aria-hidden={!navOpen}
      >
        {list.map((item) => (
          <li key={item.id} className="p-1">
            <NavItem item={item} navOpen={navOpen} closeNav={closeNav} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
