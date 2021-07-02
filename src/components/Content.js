import React, { useState } from "react";
import InputText from "./InputText";
import ToDo from "./ToDo";

function Content() {
  // HOOKS
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="content p-4 rounded">
      {/* INPUTTEXT */}
      <InputText
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      {/* TODO LIST */}
      <div>
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}

export default Content;
