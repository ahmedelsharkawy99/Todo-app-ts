import Todos from "./components/Todos/Todos";
import NewTodo from "./components/NewTodo/NewTodo";
import Provider from "./context/todos-context";

function App() {
  return (
    <Provider>
      <NewTodo />
      <Todos />
    </Provider>
  );
}

export default App;
