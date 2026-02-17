import navList from "../data/NavList";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {navList.map((item) => (
          <li key={item.id}>
            <NavItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
