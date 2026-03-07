import type { SocialData } from "../data/socials";

type CardProps = {
  item: SocialData;
}

const SocialCard = ({ item }: CardProps) => {
  return (
    <div>
      {item.label}
    </div>
  );
};

export default SocialCard;