import idle from "../assets/images/sprites/idle.png";

const Bio = () => {
  return (
    <div className="py-4">
      <section className="w-[90%] max-w-3xl mx-auto">
        <img
          src={idle} alt=""
          className="mx-auto w-1/4"
        />
        <div className="space-y-4 p-4 bg-amber-50/70 text-green-950 rounded-md border-4 border-amber-700">
          <p>
            Hey, I’m Skill Specs, an Old School RuneScape content creator mainly focused on PvP content. Most of my content revolves around the excitement of PvP combat, experimenting with different PK builds, and taking on PK-focused challenges.
          </p>
          <p>
            Alongside PKing, I occasionally mix in PvM, bossing, and community events. I also enjoy competitive game modes like Deadman Mode and have participated in events such as the Gielinor Games and Deadman All Stars.
          </p>
          <p>
            A big part of what I do is streaming my PKing live, sharing the action, challenges, and unpredictable moments from the Wilderness with the community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Bio;