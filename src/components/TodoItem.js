import React from "react";
import { useStoreActions } from "easy-peasy";

const TodoItem = ({ todo }) => {
  const { remove, toggle } = useStoreActions(actions => ({
    remove: actions.remove,
    toggle: actions.toggle
  }));

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <span onClick={() => toggle(todo.id)} style={{ cursor: "pointer" }}>
        {todo.title}
      </span>
      <button className="btn btn-danger" onClick={() => remove(todo.id)}>
        <i className="fas fa-trash-alt" />
      </button>
    </li>
  );
};

export default TodoItem;
