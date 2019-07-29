import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

import { classBody } from "@babel/types";

export default function useDarkMode() {
  const [useDarkMode, setUseDarkMode] = useLocalStorage("Dark Mode");

  // const body = document.querySelector("body");

  useEffect(() => {
    if (localStorage.getItem("Dark Mode") === "true") {
      document.body.classList.add("dark-mode");
      console.log("this is true");
    } else document.body.classList.remove("dark-mode");
    console.log("this is false");
  }, [useDarkMode]);

  return [useDarkMode, setUseDarkMode];
}
