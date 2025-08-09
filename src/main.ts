import "./style.css";
import { useState } from "./Hooks/hooks";

// const [state, setState] = useState<number>(0);

// setState((prev: any) => prev + 1);
// setState((prev: any) => prev + 1);
// setState((prev: any) => prev + 1);
// console.log("state", state.value);

const [state, setState] = useState<string>("");

setState("deneme");

console.log("str", state.value);
