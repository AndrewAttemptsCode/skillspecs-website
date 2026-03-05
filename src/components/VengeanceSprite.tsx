import { useEffect, useState } from "react";
import vengeance from "../assets/images/sprites/vengeance_sprite_sheet.webp";

const VengeanceSprite = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMounted(true);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timeout = setTimeout(() => {
      setMounted(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [mounted])

  if (!mounted) return null;

  return (
    <div
      className="absolute left-1/2 bottom-[55%] -translate-x-1/2 bg-no-repeat animate-skull"
      style={{
        backgroundImage: `url(${vengeance})`,
        height: "30%",
        width: "auto",
        aspectRatio: "300 / 670",
        backgroundSize: "2100% 100%"
      }}
    >

    </div>
  );
};

export default VengeanceSprite;
// 10% full