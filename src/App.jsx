import "./App.css";
import CounterApp from "./components/CounterApp";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <CounterApp />
      <TodoList />
      <ThemeToggle />
    </>
  );
}

export default App;
