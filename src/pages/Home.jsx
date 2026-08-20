import Card from "../components/Card";
import images from "./HomeImages";
import { Link } from "react-router-dom";

export default function Home() {
  const image = images.map((img) => <Card img={img} />);
  return (
    <div className=" bg-black text-white dark:bg-zinc-100 dark:text-zinc-700 min-h-screen">
      <div className="text-center pt-20 ">
        <h1 className="text-6xl font-bold ">Discover Beautiful Images</h1>
        <h3 className="text-xl m-5 tracking-tighter text-gray-500 dark:text-zinc-800">
          Explore a collection of high-quality photographs from around the
          world.
        </h3>
        <Link className="font-light text-xl" to="/gallery">
          <button
            className="border-none px-5 py-2 font-medium text-lg rounded bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-900 dark:bg-zinc-400 dark:text-zinc-800 dark:hover:bg-zinc-500 duration-300
 mt-8 mb-15"
          >
            Explore<i className="ri-arrow-right-line text-xl"></i>
          </button>
        </Link>
      </div>
      <div className="grid grid-col-1 justify-items-center md:grid-cols-3 p-5 gap-5 rounded">
        {image}
      </div>
    </div>
  );
}
