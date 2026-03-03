import sprite from "../assets/images/sprites/throne_sprite.png";

const ThroneSprite = () => {
  return (
    <div
      className="absolute bottom-1/4 left-1/2 -translate-x-1/2 bg-no-repeat"
      style={{
        backgroundImage: `url(${sprite})`,
        height: "45%",
        width: "auto",
        aspectRatio: "426 / 790",
        backgroundSize: "900% 100%",
        backgroundPosition: "0 0",
      }}
    >

    </div>
  );
};

export default ThroneSprite;