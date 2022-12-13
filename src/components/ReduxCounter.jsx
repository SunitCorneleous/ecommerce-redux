import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store";

const ReduxCounter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(actions.decrement(2))}>decrease</button>
      <button onClick={() => dispatch(actions.increment(4))}>increase</button>
      <button onClick={() => dispatch(actions.addBy(100))}>add by 10</button>
    </div>
  );
};

export default ReduxCounter;
