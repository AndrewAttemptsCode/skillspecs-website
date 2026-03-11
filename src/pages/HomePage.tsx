import Header from "../components/Header";
import ThroneSprite from "../components/ThroneSprite";
import VengeanceSprite from "../components/VengeanceSprite";
import useBackground from "../hooks/useBackground";
import repeatBg from "../assets/images/backgrounds/bg_repeat.png";

const HomePage = () => {
  const bg = useBackground();

  return (
    <div className="relative min-h-dvh">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at center,
              rgba(180,255,220,0.8) 0%,
              rgba(100,255,180,0.4) 25%,
              rgba(0,255,150,0.15) 40%,
              rgba(0,0,0,0) 55%
            ),
            linear-gradient(to top, #064e3b, #558578)
          `,
        }}
      />

      <div
        className="absolute inset-0 bg-repeat bg-top-left opacity-[0.05] grayscale-100 brightness-0"
        style={{ backgroundImage: `url(${repeatBg})` }}
      />

      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bg}` }}
      />

      <div className="absolute inset-0">
        <Header />
        <ThroneSprite />
        <VengeanceSprite />
      </div>
    </div>
  );
};

export default HomePage;