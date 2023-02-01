import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setisOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setisOnline(true);
    };

    const handleOffline = () => {
      setisOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    //When we move to other page we need to clear this eventListener
    window.removeEventListener("online", handleOffline);
    window.removeEventListener("offline", handleOnline);
  }, []);

  return isOnline;
};

export default useOnline;
