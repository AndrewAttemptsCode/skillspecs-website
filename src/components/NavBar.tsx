import { useState } from "react";
import navList from "../data/NavList";
import NavItem from "./NavItem";
import NavMenuButton from "./NavMenuButton";

type Route = "/" | "/videos" | "/livestream" | "/socials" | "/about";

type NavProps = {
  selectedItems: Route[];
};

const NavBar = ({ selectedItems }: NavProps) => {
  const list = selectedItems
    ? navList.filter((item) => selectedItems.includes(item.path))
    : navList;

  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="relative">
      <NavMenuButton navOpen={navOpen} updateNav={() => setNavOpen(prev => !prev)} />
      <ul
        className={`flex gap-2 p-4 lg:p-0 flex-col lg:flex-row fixed lg:static top-20 right-0 z-50 overflow-x-hidden overflow-y-auto max-h-[calc(100vh-10rem)]`}
        aria-label="Navigation list"
      >
        {list.map((item) => (
          <li key={item.id}>
            <NavItem item={item} navOpen={navOpen} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
