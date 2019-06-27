import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const add = useStoreActions(actions => actions.add);

  return (
    <div>
      <form
        className="form-inline col-12"
        onSubmit={e => {
          e.preventDefault();
          add({ title, completed: false });
        }}
      >
        <input
          className="form-control col-sm-10"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add Todo Title..."
        />
        <input
          className="btn btn-primary my-2 col-sm-2"
          type="submit"
          value="Add Todo"
        />
      </form>
    </div>
  );
};

export default AddTodo;
