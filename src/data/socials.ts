import type { IconType } from "react-icons";
import { FaTwitch } from "react-icons/fa6";

type SocialData = {
  id: number;
  label: string;
  path: string;
  Icon: IconType;
  description: string;
  styles: string;
}

const socials: SocialData[] = [
  {
    id: 0,
    label: "Twitch",
    path: "https://www.twitch.tv/skillspecs",
    Icon: FaTwitch,
    description: "Description about Twitch channel",
    styles: ""
  },
];

export default socials;