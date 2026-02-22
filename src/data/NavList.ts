import { FaTwitch, FaYoutube } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import type { IconType } from "react-icons";
import { FaHome, FaInfoCircle } from "react-icons/fa";

export type NavListData = {
  id: number;
  path: "/" | "/videos" | "/livestream" | "/socials" | "/about";
  label: string;
  Icon: IconType;
  styles: string;
  active: string;
};

const navList: NavListData[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
    styles: "group-hover:fill-[#7FBF3F] group-focus-visible:fill-[#7FBF3F]",
    active: "fill-[#7FBF3F]",
    Icon: FaHome,
  },
  {
    id: 1,
    path: "/videos",
    label: "Videos",
    styles: "group-hover:fill-[#FF0000] group-focus-visible:fill-[#FF0000]",
    active: "fill-[#FF0000]",
    Icon: FaYoutube,
  },
  {
    id: 2,
    path: "/livestream",
    label: "Livestream",
    styles: "group-hover:fill-[#9146FF] group-focus-visible:fill-[#9146FF]",
    active: "fill-[#9146FF]",
    Icon: FaTwitch,
  },
  {
    id: 3,
    path: "/socials",
    label: "Socials",
    styles: "group-hover:fill-blue-400 group-focus-visible:fill-blue-400",
    active: "fill-blue-400",
    Icon: IoMdShare,
  },
  {
    id: 4,
    path: "/about",
    label: "About Skill Specs",
    styles: "group-hover:fill-gray-400 group-focus-visible:fill-gray-400",
    active: "fill-gray-400",
    Icon: FaInfoCircle,
  },
];

export default navList;
