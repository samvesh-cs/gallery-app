import cardData from "../components/AboutCardData";
import AboutCards from "../components/AboutCards";

export default function About() {
  const aboutCards = cardData.map((card) => {
    return (
      <AboutCards
        key={card.id}
        title={card.title}
        description={card.description}
        icon={card.icon}
      />
    );
  });

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="text-center pt-20 pb-22">
        <h1 className="text-5xl font-bold  ">About Gallery</h1>
        <h3 className="text-xl tracking-tighter text-gray-500 mt-2">
          Discover. Explore. Experience.
        </h3>
        <h3 className="text-lg  tracking-tighter text-gray-500 mt-4 ">
          A place to discover, explore, and appreciate beautiful photography
          from around the world.
        </h3>
      </section>
      <section className="px-6 pb-24">
        <div className="grid grid-col-1 md:grid-cols-3 gap-6 p-5">
          {aboutCards}
        </div>
      </section>
    </div>
  );
}
