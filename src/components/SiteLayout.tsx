import { Outlet } from "react-router-dom";
import useBackground from "../hooks/useBackground";
import Header from "./Header";

const SiteLayout = () => {
  const bg = useBackground();

  return (
    <div
      className="flex min-h-dvh flex-col bg-emerald-900 bg-cover bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${bg})`,
      }}
    >
      <Header />
      <main className="flex flex-1">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default SiteLayout;
