import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

import "./styles.scss";
import { classBody } from "@babel/types";

export default function useDarkMode() {
  const [useDarkMode, setUseDarkMode] = useLocalStorage("Dark Mode");

  useEffect(() => {
    if (darkMode === "true") {
      classBody.classList.add("dark-mode");
      console.log("this is true");
    } else classBody.classList.remove("dark-mode");
    console.log("this is false");
  }, [useDarkMode]);

  return [useDarkMode, setUseDarkMode];
}
