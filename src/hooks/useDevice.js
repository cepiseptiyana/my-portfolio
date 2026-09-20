import { useEffect, useState } from "react";
import { isDevice } from "../utils/device";

export default function useDevice() {
  const [device, setDevice] = useState(() => isDevice());

  useEffect(() => {
    const handleResize = () => {
      setDevice(isDevice());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
}
