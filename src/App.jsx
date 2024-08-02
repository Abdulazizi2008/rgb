import { useReducer, useState } from "react";
import { Context } from "./context";

import "./App.css";
import Container from "./components/Container";

const initialState = {
  r: 0,
  g: 0,
  b: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "r":
      return { ...state, r: action.payload };
    case "g":
      return { ...state, g: action.payload };
    case "b":
      return { ...state, b: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <Container />
      </Context.Provider>
    </>
  );
}

export default App;
