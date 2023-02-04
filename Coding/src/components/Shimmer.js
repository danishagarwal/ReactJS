const Shimmer = () => {
  return (
    <div className="restaurantList">
      {Array(12)
        .fill(" ")
        .map((e, index) => (
          <div key={index} className="bg-slate-200 flex "></div>
        ))}
    </div>
  );
};

export default Shimmer;
