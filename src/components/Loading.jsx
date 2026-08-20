export default function Loading() {
  return (
    // <div className="text-white font-bold text-5xl flex flex-wrap gap-8 justify-center">
    //   {Array.from({ length: 8 }).map((_, index) => {
    //     return (
    //       <div
    //         key={index}
    //         className="h-64 w-85 rounded-xl bg-zinc-900 animate-pulse"
    //       ></div>
    //     );
    //   })}
    // </div>

    <div className="flex items-center justify-center pt-50">
      <div className="h-20 w-20 animate-spin rounded-full border-6 border-gray-400 border-t-zinc-800"></div>
    </div>
  );
}
