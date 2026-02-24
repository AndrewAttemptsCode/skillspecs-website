import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Logo from "./Logo";
import useBackground from "../hooks/useBackground";

const SiteLayout = () => {
  const bg = useBackground();

  return (
    <div
      className="bg-emerald-900 bg-no-repeat bg-center bg-cover bg-fixed flex flex-col min-h-dvh"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <header className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-0 p-2 sm:p-4">
        <Logo />
        <NavBar selectedItems={["/", "/videos", "/livestream", "/socials", "/about"]} orientation="horizontal" />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default SiteLayout;
