import { useState } from "react";

// initState = true: default param in js, if no argument is giving
// initState will default to true
export const useToggle = (initState = true) => {
  const [state, setState] = useState(initState);
  const toggle = () => {
    setState((state) => !state);
  };
  return [state, toggle];
};