import { useState } from "react";

const initialTodosValues = { name: "" };
function Form({ addtodo, todo }) {
  const [todos, setTodos] = useState(initialTodosValues);
  const onChangeInput = (e) => {
    setTodos({ ...todos, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (todos.name === "") {
      return false;
    }

    addtodo([...todo, todos]);
    setTodos(initialTodosValues);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            name="name"
            value={todos.name}
            onChange={onChangeInput}
            className="new-todo"
            placeholder="What You Wanna Do"
            autoFocus
          />
        </form>
      </header>
    </section>
  );
}

export default Form;
