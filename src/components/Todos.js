import React, { Fragment, useEffect } from "react";
import TodoItem from "./TodoItem";
import { useStoreState, useStoreActions } from "easy-peasy";

const Todos = () => {
  const todos = useStoreState(state => state.todos);
  const fetchTodos = useStoreActions(actions => actions.fetchTodos);

  useEffect(() => {
    fetchTodos();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h1 className="text-center">Todos</h1>
      <p className="text-center">Click todo item to toggle completed</p>
      <hr />
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Todos;
