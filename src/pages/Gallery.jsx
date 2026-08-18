import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Gallery() {
  const [imgData, setData] = useState([]);
  const [index, setIndex] = useState(3);

  async function fetchData() {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${index}&limit=8`,
    );
    const data = await response.json();
  
    setData(data);
  }

  useEffect(() => {
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

  let userData = (
    <h1 className="text-gray-500 flex text-center font-medium text-5xl py-5 absolute left-1/2 top-1/2 -translate-1/2">
      LOADING...
    </h1>
  );

  if (imgData.length > 0) {
    userData = imgData.map((img) => <Card img={img} />);
  }

  return (
    <div className="h-screen w-full text-white bg-black overflow-auto">
      <div className="text-white font-bold text-5xl flex flex-wrap gap-8 justify-center ">
        {userData}
      </div>
      <div className="flex justify-center align-center p-4 gap-5 ">
        <button
          style={{ opacity: index === 3 ? 0.5 : 1 }}
          className="bg-amber-400 text-2xl font-medium px-3 py-1.5 text-black rounded active:scale-97"
          onClick={previousIndex}
        >
          Previous
        </button>
        <h3 className="font-bold text-3xl tracking-tighter">Page {index - 2}</h3>
        <button
          className="bg-amber-400 text-2xl font-medium px-3 py-1.5 text-black rounded active:scale-97"
          onClick={nextIndex}
        >
          Next
        </button>
      </div>
    </div>
  );
}
