import type { IconType } from "react-icons";
import { FaDiscord, FaFacebook, FaInstagram, FaTiktok, FaTwitch, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiKick } from "react-icons/si";

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
  {
    id: 1,
    label: "YouTube",
    path: "https://www.youtube.com/skillspecs",
    Icon: FaYoutube,
    description: "Description about YouTube channel",
    styles: ""
  },
  {
    id: 2,
    label: "Discord",
    path: "https://discord.gg/skillspecs",
    Icon: FaDiscord,
    description: "Description about Discord server",
    styles: ""
  },
  {
    id: 3,
    label: "Twitter",
    path: "https://www.twitter.com/skill_specs",
    Icon: FaXTwitter,
    description: "Description about Twitter profile",
    styles: ""
  },
  {
    id: 4,
    label: "TikTok",
    path: "https://www.tiktok.com/@skillspecs",
    Icon: FaTiktok,
    description: "Description about TikTok channel",
    styles: ""
  },
  {
    id: 5,
    label: "Instagram",
    path: "https://www.instagram.com/skill_specs",
    Icon: FaInstagram,
    description: "Description about Instagram profile",
    styles: ""
  },
  {
    id: 6,
    label: "Facebook",
    path: "https://www.facebook.com/skillspecs",
    Icon: FaFacebook,
    description: "Description about Facebook profile",
    styles: ""
  },
  {
    id: 7,
    label: "Kick",
    path: "https://www.kick.com/skillspecs",
    Icon: SiKick,
    description: "Description about Kick channel",
    styles: ""
  }
];

export default socials;
