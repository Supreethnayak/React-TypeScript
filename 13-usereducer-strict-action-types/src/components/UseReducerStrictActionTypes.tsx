// Problem - Typing useReducer Hook - with strict action types
// using descriminated Unions

import { useReducer } from "react";
const initialState = {
  counterValue: 0
};
type CounterStateType = {
  counterValue: number;
};
// template literals (hardcode) instead of strings - Union
// type: "increment" | "decrement" | "reset" instead of type: string;
type UpdateActionType = {
  type: "increment" | "decrement";
  value: number;
};
type ResetActionType = {
  type: "reset";
};
type AllType = UpdateActionType | ResetActionType;
function reducer(currentState: CounterStateType, action: AllType) {
  switch (action.type) {
    case "increment":
      return {
        counterValue: currentState.counterValue + action.value
      };
    case "decrement":
      return { counterValue: currentState.counterValue - action.value };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
}
export default function UseReducerStrictActionTypes() {
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
