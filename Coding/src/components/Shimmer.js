const Shimmer = () => {
  return (
    <div className="flex-wrap flex text-center justify-center">
      {Array(12)
        .fill(" ")
        .map((e, index) => (
          <div key={index} className="bg-slate-300 w-52 h-72 p-2 m-2 shadow-2xl "></div>
        ))}
    </div>
  );
};

export default Shimmer;
