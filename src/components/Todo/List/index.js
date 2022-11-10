import React from "react";

function List({ todo, removeTodo }) {
  return (
    <section className="todoapp2">
      <ul className="todo-list">
        {todo.map((x, i) => (
          <li key={i}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{x.name}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
