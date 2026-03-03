import { useState } from "react";
import NavBar from "./NavBar";
import NavMenuButton from "./NavMenuButton";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  
  const pathName = location.pathname;

  return (
    <header className={`relative p-2 flex items-center ${pathName === "/" ? "justify-end" : "justify-between"}`}>
      {pathName !== "/" && <Logo />}
      <NavMenuButton navOpen={navOpen} updateNav={() => setNavOpen(prev => !prev)} />
      <NavBar navOpen={navOpen} />
    </header>
  );
};

export default Header;