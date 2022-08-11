import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";
import { useState } from "react";

const counterReducer = (state, action) => {
  if (action.type === "PLUS") {
    return { value: state.value + 1 };
  }
  if (action.type === "MINUS") {
    return { value: state.value - 1 };
  }
  if (action.type === "ADD_INPUT_VALUE") {
    console.log(action.payload);
    return { value: state.value + action.payload };
  }
  return state;
};

function App() {
  const [counterState, counterDispatch] = useReducer(counterReducer, {
    value: 0,
  });
  const [inputValue, setInputValue] = useState("");

  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="counter">{counterState.value}</div>
      <div>
        <button
          onClick={() => {
            counterDispatch({ type: "PLUS" });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            counterDispatch({ type: "MINUS" });
          }}
        >
          -
        </button>
        <input value={inputValue} onChange={getInputValue} type="number" />
        <button
          onClick={() => {
            counterDispatch({
              type: "ADD_INPUT_VALUE",
              payload: +inputValue,
            });
          }}
        >
          add input value
        </button>
      </div>
    </div>
  );
}

export default App;
