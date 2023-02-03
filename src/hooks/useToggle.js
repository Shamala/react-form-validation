import useLocalStorage from "./useLocalStorage";
import React from "react";

const useToggle = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const toggle = (value) => {
    setValue((prev) => {
      return typeof value === "boolean" ? value : !prev;
    });
  };
  return [value, toggle];
};

export default useToggle;
