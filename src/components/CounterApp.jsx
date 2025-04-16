import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "./redux/selector";
import { decrement, increment, reset } from "../reducer/counterSlice";

const CounterApp = () => {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter With Redux Toolkit</h1>
      <div className="card">
        <div className="mb-3 text-3xl font-medium">{count}</div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => (count > 0 ? dispatch(decrement()) : 0)}>
          -
        </button>
        <button onClick={() => (count > 0 ? dispatch(reset()) : 0)}>
          Reset
        </button>
      </div>
    </>
  );
};
export default CounterApp;
