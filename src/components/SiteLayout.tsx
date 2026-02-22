import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const SiteLayout = () => {
  return (
    <div className="bg-emerald-900">
      <header className="flex justify-between items-center p-4">
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
