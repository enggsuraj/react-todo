import React from "react";
import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";

function ToDo({ todo, todos, setTodos }) {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handleCheck = () => {
    // console.log(todo.check);
    // console.log(todo);
  };

  return (
    <div
      key={todo.id}
      className="eachContent rounded my-2 px-3 py-2 d-flex align-items-center justify-content-between"
    >
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          onClick={handleCheck}
        />
        <div className="taskName">{todo.text}</div>
      </div>
      <div className="d-flex">
        {/* <div className="p-2" onClick={handleEdit}>
          <PencilFill size={22} />
        </div> */}
        <div className="p-2" onClick={handleDelete}>
          <TrashFill size={22} />
        </div>
      </div>
    </div>
  );
}

export default ToDo;
