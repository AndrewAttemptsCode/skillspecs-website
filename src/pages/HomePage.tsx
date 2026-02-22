import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="flex min-h-dvh items-center justify-end bg-emerald-900 p-2">
      <NavBar selectedItems={["videos", "livestream", "socials", "about"]} orientation="vertical" />
    </div>
  );
};

export default HomePage;
