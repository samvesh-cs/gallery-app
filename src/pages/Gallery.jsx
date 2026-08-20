import { useState, useEffect } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";

export default function Gallery() {
  const [imgData, setData] = useState([]);
  const [index, setIndex] = useState(3);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${index}&limit=8`,
    );
    const data = await response.json();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [index]);

  const nextIndex = () => {
    setIndex(index + 1);
  };

  const previousIndex = () => {
    if (index === 3) {
      return;
    }
    setIndex(index - 1);
  };

  return (
    <div className="h-screen w-full text-white bg-black dark:bg-zinc-100 dark:text-zinc-600 overflow-auto">
      <section className="text-white font-bold text-5xl flex flex-wrap gap-8 justify-center ">
        {loading ? <Loading /> : imgData.map((img) => <Card img={img} />)}
      </section>

      <section
        className={`flex justify-center align-center p-4 gap-5 ${loading ? "hidden" : "block "} `}
      >
        <button
          style={{ opacity: index === 3 ? 0.5 : 1 }}
          className=" bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-900 dark:bg-zinc-400 dark:text-zinc-800 dark:hover:bg-zinc-500 duration-300
 text-xl font-medium px-3 py-1.5 rounded active:scale-97"
          onClick={previousIndex}
        >
          Previous
        </button>
        <h3 className="font-bold text-2xl tracking-tighter">
          Page {index - 2}
        </h3>
        <button
          className="bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-900 dark:bg-zinc-400 dark:text-zinc-800 dark:hover:bg-zinc-500 duration-300
  text-xl font-medium px-3 py-1.5  rounded active:scale-97"
          onClick={nextIndex}
        >
          Next
        </button>
      </section>
    </div>
  );
}
