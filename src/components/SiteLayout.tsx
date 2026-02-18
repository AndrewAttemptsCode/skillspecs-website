import { Outlet } from "react-router-dom";

const SiteLayout = () => {
  return (
    <div>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default SiteLayout;
