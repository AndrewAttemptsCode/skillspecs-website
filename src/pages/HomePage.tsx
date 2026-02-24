import NavBar from "../components/NavBar";
import useBackground from "../hooks/useBackground";

const HomePage = () => {
  const bg = useBackground();

  return (
    <div
      className="flex min-h-dvh justify-center lg:justify-end p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          url(${bg}),
          radial-gradient(
            circle at center,
          rgba(180,255,220,0.8) 0%,
          rgba(100,255,180,0.4) 25%,
          rgba(0,255,150,0.15) 40%,
            rgba(0,0,0,0) 55%),
          linear-gradient(to top, #064e3b, #558578)
        `,
      }}
    >
      <NavBar selectedItems={["/videos", "/livestream", "/socials", "/about"]} orientation="horizontal" />
    </div>
  );
};

export default HomePage;
