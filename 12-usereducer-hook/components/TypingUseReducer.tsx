// Problem - Typing useReducer Hook

import { useReducer } from "react";
const initialState = {
  counterValue: 0
};
type CounterStateType = {
  counterValue: number;
};
type CounterActionType = {
  type: string;
  value?: number;
};
function reducer(currentState: CounterStateType, action: CounterActionType) {
  switch (action.type) {
    case "increment":
      return {
        counterValue: currentState.counterValue + (action.value || 0)
      };
    case "decrement":
      return { counterValue: currentState.counterValue - (action.value || 0) };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
}
export default function TypingUseReducer() {
  // Ts now knows its types from reducer func
  // tip:
  // if [newState, dispatch], needs to be sent as prop
  // hover and copy its type, and use as prop type
  const [newState, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      count: {newState.counterValue}
      <br />
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}
