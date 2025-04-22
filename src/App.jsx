import "./App.css";
import CounterApp from "./components/CounterApp";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="">
        <CounterApp />
      </div>
      <div className="">
        <TodoList />
      </div>
    </>
  );
}

export default App;
