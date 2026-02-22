import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Logo from "./Logo";

const SiteLayout = () => {
  return (
    <div className="bg-emerald-900">
      <header className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-0 p-2 sm:p-4">
        <Logo />
        <NavBar selectedItems={["/", "/videos", "/livestream", "/socials", "/about"]} orientation="horizontal" />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default SiteLayout;
