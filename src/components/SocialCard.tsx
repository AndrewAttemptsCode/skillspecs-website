import type { SocialData } from "../data/socials";

type CardProps = {
  item: SocialData;
}

const SocialCard = ({ item }: CardProps) => {
  const { label, path, Icon, description, styles } = item;

  const transition = "transition-all 0.3s ease-in";

  return (
    <li className="group relative bg-amber-50 p-4 mt-8 rounded-md cursor-pointer">
    
      <div className="absolute inset-0 flex justify-center flex-wrap gap-0.5 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Icon key={i} className="size-16 fill-black/5" />
        ))}
      </div>

      <a href={path} rel="noopener noreferrer" target="_blank">
        <div className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 size-16 bg-amber-400 p-3 rounded-md group-hover:-translate-y-[60%] ${transition}`}>
          <Icon 
            className="size-full"
          />
        </div>
        <div>
          <h2 className={`group-hover:underline ${transition} font-semibold`}>
            {label}
          </h2>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
};

export default SocialCard;