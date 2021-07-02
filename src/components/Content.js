import React, { useState } from "react";
import ToDo from "./ToDo";

function Content() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (e) => {
    let newValue = {
      id: Math.random() * 10,
      text: inputText,
      check: "true",
    };
    if (inputText.trim() !== "") {
      setTodos((prevArray) => [...prevArray, newValue]);
    }
    setInputText("");
  };

  return (
    <div className="content p-4 rounded">
      <div className="d-flex align-items-center">
        <div className="input-group mb-3">
          <input
            value={inputText}
            onChange={handleInputText}
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            onClick={handleClick}
            className="btn btn-warning"
            type="button"
            id="button-addon2"
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="task_container">
        {todos.map((todo) => (
          <ToDo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default Content;
