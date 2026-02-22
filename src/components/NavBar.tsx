import navList from "../data/NavList";
import NavItem from "./NavItem";

type Route = "/" | "videos" | "livestream" | "socials" | "about";

type NavProps = {
  selectedItems: Route[];
  orientation: "vertical" | "horizontal";
}

const NavBar = ({ selectedItems, orientation }: NavProps) => {

  const list = selectedItems
  ? navList.filter((item) => selectedItems.includes(item.path))
  : navList;

  return (
    <nav>
      <ul className={`flex gap-2 ${orientation === "vertical" ? "flex-col" : "flex-row"}`}>
        {list.map((item) => (
          <li key={item.id}>
            <NavItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
