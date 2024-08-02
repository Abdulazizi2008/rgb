import React, { useContext } from "react";
import { Context } from "../context";

function Container() {
  const { state, dispatch } = useContext(Context);
  const { r, g, b } = state;
  return (
    <div style={{ display: "flex", gap: "5px", border: "solid" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "solid",
          background: `rgb(${r},${g},${b})`,
        }}
      ></div>
      <div
        style={{
          width: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <label htmlFor="R">R</label>
          <input
            id="R"
            type="number"
            min={0}
            max={255}
            value={state.r}
            onChange={(e) => dispatch({ type: "r", payload: e.target.value })}
          />
        </div>
        <div style={{ display: "flex" }}>
          <label htmlFor="G">G</label>
          <input
            id="G"
            type="number"
            min={0}
            max={255}
            value={state.g}
            onChange={(e) => dispatch({ type: "g", payload: e.target.value })}
          />
        </div>
        <div style={{ display: "flex" }}>
          <label htmlFor="B">B</label>
          <input
            id="B"
            type="number"
            min={0}
            max={255}
            value={state.b}
            onChange={(e) => dispatch({ type: "b", payload: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
