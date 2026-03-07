import socials from "../data/socials";
import SocialCard from "./SocialCard";

const SocialsList = () => {
  return (
    <section className="py-4">
      <div className="w-[90%] max-w-5xl mx-auto">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {socials.map((item) => (
            <SocialCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialsList;
