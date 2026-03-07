import { useLocation } from "react-router-dom";
import bgHome from "../assets/images/backgrounds/bg_arch_bounty_hunter.webp";
import bgVideos from "../assets/images/backgrounds/bg_bounty_hunter.webp";
import bgSocials from "../assets/images/backgrounds/bg_ge.webp";
import bgAbout from "../assets/images/backgrounds/bg_valley.webp";

type Routes = "/" | "/videos" | "/livestream" | "/socials" | "/about";

const useBackground = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const backgrounds: Record<Routes, string> = {
    "/": bgHome,
    "/videos": bgVideos,
    "/livestream": bgVideos,
    "/socials": bgSocials,
    "/about": bgAbout,
  };

  return backgrounds[pathname as Routes] || "";
};

export default useBackground;
