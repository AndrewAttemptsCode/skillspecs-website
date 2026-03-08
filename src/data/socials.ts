import type { IconType } from "react-icons";
import { FaDiscord, FaFacebook, FaInstagram, FaTiktok, FaTwitch, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiKick } from "react-icons/si";

export type SocialData = {
  id: number;
  label: string;
  path: string;
  Icon: IconType;
  description: string;
  styles: {
    icon?: string;
    iconBg?: string;
    cardBg?: string;
    cardBgIcon?: string;
    text?: string;
  }
}

const socials: SocialData[] = [
  {
    id: 0,
    label: "Twitch",
    path: "https://www.twitch.tv/skillspecs",
    Icon: FaTwitch,
    description: "Live almost daily - you never know what Skill Specs will get up to. From rags-to-riches challenges and deep wilderness PKing to high-risk one-on-one fights and other wild challenges, there’s always something happening. You might even win a giveaway - MINE!",
    styles: {
      icon: "fill-[#9146FF]",
      iconBg: "bg-white",
      cardBg: "bg-[#9146FF]",
      cardBgIcon: "fill-black/8",
      text: "text-[#3B1F80]"
    }
  },
  {
    id: 1,
    label: "YouTube",
    path: "https://www.youtube.com/skillspecs",
    Icon: FaYoutube,
    description: "The home of the best Skill Specs moments. From insane PK combos and deep wilderness fights to risky plays, funny moments, and unforgettable highlights, every video captures the chaos - the way only Skill Specs can deliver.",
    styles: {
      icon: "fill-[#FF0000]",
      iconBg: "bg-white",
      cardBg: "bg-[#FF0000]",
      cardBgIcon: "fill-black/8",
      text: "text-[#550000]"
    }
  },
  {
    id: 2,
    label: "Discord",
    path: "https://discord.gg/skillspecs",
    Icon: FaDiscord,
    description: "Join the official the Skill Specs Discord! Get notified when streams go live, join a welcoming community to chat about pets, PvP, bossing, and raids, and form teams with others. Whether you’re here for epic fights or just hanging out, this is the place to be.",
    styles: {
      icon: "fill-white",
      iconBg: "bg-[#7289DA]",
      cardBg: "bg-[#5865F2]",
      cardBgIcon: "fill-black/8",
      text: "text-[#2B2D5B]"
    }
  },
  {
    id: 3,
    label: "Twitter",
    path: "https://www.twitter.com/skill_specs",
    Icon: FaXTwitter,
    description: "Follow Skill Specs on Twitter for all the big moments - from event announcements and live stream updates to real-world happenings and behind-the-scenes insights. Stay in the loop and never miss a highlight!",
    styles: {
      icon: "fill-[#1DA1F2]",
      iconBg: "bg-white",
      cardBg: "bg-[#1DA1F2]",
      cardBgIcon: "fill-black/8",
      text: "text-[#0A3D66]"
    }
  },
  {
    id: 4,
    label: "TikTok",
    path: "https://www.tiktok.com/@skillspecs",
    Icon: FaTiktok,
    description: "Catch the wildest Skill Specs moments in short-form! From insane PK combos and deep wilderness fights to risky plays and unforgettable highlights, every clip delivers the chaos in bite-sized doses.",
    styles: {
      icon: "fill-black",
      iconBg: "bg-white",
      cardBg: "bg-gray-900",
      cardBgIcon: "fill-white/8",
      text: "text-white/80"
    }
  },
  {
    id: 5,
    label: "Instagram",
    path: "https://www.instagram.com/skill_specs",
    Icon: FaInstagram,
    description: "Follow Skill Specs on Instagram for quick highlights, epic PK moments, and unforgettable clips from the streams. From chaotic wilderness fights to rags-to-riches adventures, every post brings the action straight to your feed.",
    styles: {
      icon: "fill-white",
      iconBg: "bg-gradient-to-r from-[#F58529] via-[#C13584] to-[#405DE6]",
      cardBg: "bg-[#2C1B2C]",
      cardBgIcon: "fill-white/8",
      text: "text-[#F8F8F8]"
    }
  },
  {
    id: 6,
    label: "Facebook",
    path: "https://www.facebook.com/skillspecs",
    Icon: FaFacebook,
    description: "Connect with Skill Specs and the community on Facebook! Get updates, chat with fans, and enjoy a variety of video content - from quick clips to in-depth stories and special moments.",
    styles: {
      icon: "fill-[#1877F2] bg-white",
      iconBg: "bg-white",
      cardBg: "bg-[#1877F2]",
      cardBgIcon: "fill-black/8",
      text: "text-[#032D75]"
    }
  },
  {
    id: 7,
    label: "Kick",
    path: "https://www.kick.com/skillspecs",
    Icon: SiKick,
    description: "The same Skill Specs stream you love on Twitch - now on Kick. A little spicier, a little wilder, and your go-to if Twitch isn’t an option. Don’t miss the chaos!",
    styles: {
      icon: "fill-[#00F100]",
      iconBg: "bg-[#121212]",
      cardBg: "bg-[#00F100]",
      cardBgIcon: "fill-black/8",
      text: "text-[#121212]"
    }
  }
];

export default socials;
