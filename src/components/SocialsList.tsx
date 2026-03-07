import socials from "../data/socials";
import SocialCard from "./SocialCard";

const SocialsList = () => {
  return (
    <section>
      {socials.map((item) => (
        <SocialCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default SocialsList;
