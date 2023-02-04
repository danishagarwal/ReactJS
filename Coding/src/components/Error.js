import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err.data);
  return (
    <>
      <h1>Something went wrong!</h1>{" "}
      <h2>{err.status + " " + err.statusText}</h2>
      <h3>{err.data}</h3>
    </>
  );
};

export default Error;
