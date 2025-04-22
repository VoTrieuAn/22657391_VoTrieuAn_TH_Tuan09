import "./App.css";
import CounterApp from "./components/CounterApp";
import ShoppingCart from "./components/ShoppingCart";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <CounterApp />
      <TodoList />
      <ThemeToggle />
      <ShoppingCart />
    </>
  );
}

export default App;
