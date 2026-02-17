import { FaInfo, FaTwitch, FaYoutube } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import type { IconType } from "react-icons";

export type NavListData = {
  id: number;
  label: string;
  Icon: IconType;
  styles: string;
};

const navList: NavListData[] = [
  {
    id: 1,
    label: "videos",
    styles: "group-hover:fill-[#FF0000] group-focus:fill-[#FF0000]",
    Icon: FaYoutube,
  },
  {
    id: 2,
    label: "livestream",
    styles: "group-hover:fill-[#9146FF] group-focus:fill-[#9146FF]",
    Icon: FaTwitch,
  },
  {
    id: 3,
    label: "socials",
    styles: "group-hover:fill-blue-400 group-focus:fill-blue-400",
    Icon: IoMdShare,
  },
  {
    id: 4,
    label: "about",
    styles: "group-hover:fill-gray-400 group-focus:fill-gray-400",
    Icon: FaInfo,
  },
];

export default navList;
