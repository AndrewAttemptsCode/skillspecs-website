import { NavLink } from "react-router-dom";
import idle from "../assets/images/sprites/idle.png";

const Logo = () => {
  return (
    <NavLink
      to={"/"}
      title="Home"
      className="relative flex flex-col aspect-[21 / 9] h-16 justify-end rounded-md py-1 px-4 outline-none focus-visible:ring-2 focus-visible:ring-[#7FBF3F] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent overflow-hidden"
      style={{ 
        backgroundImage: "linear-gradient(to bottom, rgba(154, 231, 76, 0.8), rgba(30, 46, 13, 0.8))" 
      }}
    >
      <h1 className="relative font-heading text-shadow-md text-green-200/95 text-xl z-5">
        Skill Specs
      </h1>
      <img
        src={idle} alt=""
        className="absolute h-[95%] bottom-0 left-1/2 -translate-x-1/2 drop-shadow-[0_0_4px] drop-shadow-green-100"
      />
    </NavLink>
  );
};

export default Logo;
