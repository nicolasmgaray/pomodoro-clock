import { useEffect } from "react";

const useColorChange = (stage) => {
  useEffect(() => {
    let color = stage === "Session" ? "#f66" : "#5a5";
    document.documentElement.style.setProperty("--color-main", color);
  }, [stage]);
};

export default useColorChange;
