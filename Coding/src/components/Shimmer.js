const Shimmer = () => {
  return (
    <div className="restaurantList">
      {Array(12)
        .fill(" ")
        .map((e) => (
          <div className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
