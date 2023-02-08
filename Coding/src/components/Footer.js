import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

  const { user } = useContext(UserContext);
  return (
    <div className="">
      <h1 className="bg-slate-300 flex mob:flex-col justify-around w-full shadow h-14 bg-yellow text-blue-dark text-center leading-[3.5rem] bottom-0 fixed z-40 ">Hello {user.name}</h1>
    </div>
  );
};

export default Footer;
