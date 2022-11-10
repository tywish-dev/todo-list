import { useState } from "react";
import Form from "./Form";
import List from "./List";

function Todo() {
  const [todo, setTodo] = useState([
    {
      name: "Learn JavaScript",
    },
    {
      name: "Learn React!",
    },
    {
      name: "Have a Life!",
    },
  ]);
  return (
    <div>
      <Form addtodo={setTodo} todo={todo} />
      <List todo={todo} removeTodo={setTodo} />
    </div>
  );
}

export default Todo;
