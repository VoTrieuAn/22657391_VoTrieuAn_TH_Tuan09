import { useReducer } from "react";
import "./App.css";
import counterReducer from "./reducer/counterReducer";
import { counterInitialState } from "./libs/constants";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "./reducer/actions/counterAction";

function App() {
  const [counter, dispatch] = useReducer(counterReducer, counterInitialState);

  return (
    <>
      <h1>Counter With Reducer</h1>
      <div className="card">
        <div className="mb-3 text-3xl font-medium">{counter.count}</div>
        <button onClick={() => dispatch(incrementAction())}>+</button>
        <button
          onClick={() => (counter.count > 0 ? dispatch(decrementAction()) : 0)}
        >
          -
        </button>
        <button
          onClick={() => (counter.count > 0 ? dispatch(resetAction()) : 0)}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
