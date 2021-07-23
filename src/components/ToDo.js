import React from "react";
import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";

function ToDo({ todo, todos, setTodos }) {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handleComplete = (e) => {
    //console.log(todo);
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const handleCheck = (event) => {
    // console.log(todo.check);
    // console.log(todo);
    const element = event.target;
    element.classList.toggle("crossed-line");
  };

  return (
    <div
      key={todo.id}
      className="todo rounded my-2 px-3 py-2 d-flex align-items-center justify-content-between"
    >
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          onChange={handleComplete}
        />
        <input
          value={todo.text}
          className={`text ${todo.completed ? "line" : ""}`}
        />
        {/* <div className="text">{todo.text}</div> */}
      </div>
      <div className="d-flex">
        {/* <div className="p-2" onClick={handleEdit}>
          <PencilFill size={22} />
        </div> */}
        <div className="p-2 trash" onClick={handleDelete}>
          <TrashFill size={22} />
        </div>
      </div>
    </div>
  );
}

export default ToDo;
