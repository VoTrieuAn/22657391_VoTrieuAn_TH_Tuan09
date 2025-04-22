import "./App.css";
import AuthManager from "./components/AuthManager";
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
      <AuthManager />
    </>
  );
}

export default App;
