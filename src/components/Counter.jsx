import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "decrease") {
      return state - action.payload;
    } else if (action.type === "increase") {
      return state + action.payload;
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "decrease", payload: 2 })}>
        decrease
      </button>
      <button onClick={() => dispatch({ type: "increase", payload: 4 })}>
        increase
      </button>
    </div>
  );
};

export default Counter;
