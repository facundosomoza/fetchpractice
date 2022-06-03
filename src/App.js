import NavigationBar from "./Components/NavigationBar";
import ClientsList from "./Components/ClientsList";
import { useEffect, useState } from "react";
import TodoList from "./Components/TodoList";
import Container from "react-bootstrap/Container";

function App() {
  const [users, setUsers] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [activeModule, setActiveModule] = useState(null);

  useEffect(getUsers, []);
  useEffect(getTodoList, []);

  function handleActiveModule(moduleName) {
    console.log(moduleName);
    setActiveModule(moduleName);
  }

  function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }

  function getTodoList() {
    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  }

  function showInfo() {
    if (activeModule === "clients") {
      return <ClientsList users={users}></ClientsList>;
    } else if (activeModule === "todolist") {
      return <TodoList todoList={todoList}></TodoList>;
    } else {
      return <div></div>;
    }
  }
  return (
    <Container fluid>
      <NavigationBar handleActiveModule={handleActiveModule} />
      {showInfo()}
    </Container>
  );
}

export default App;
