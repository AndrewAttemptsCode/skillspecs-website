import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Logo from "./Logo";
import useBackground from "../hooks/useBackground";

const SiteLayout = () => {
  const bg = useBackground();

  return (
    <div
      className="flex min-h-dvh flex-col bg-emerald-900 bg-cover bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${bg})`,
      }}
    >
      <header className="relative flex p-4 justify-between items-center">
        <Logo />
        <NavBar
          selectedItems={["/", "/videos", "/livestream", "/socials", "/about"]}
        />
      </header>
      <main className="flex flex-1">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default SiteLayout;
