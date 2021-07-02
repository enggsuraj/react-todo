import React from "react";

function InputText({ inputText, setInputText, todos, setTodos }) {
  // EVENT HANDLER
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (e) => {
    let newValue = {
      id: Math.random() * 10,
      text: inputText,
      completed: "",
      textDecor: null,
    };
    if (inputText.trim() !== "") {
      setTodos((prevArray) => [...prevArray, newValue]);
    }
    setInputText("");
  };
  return (
    <div className="d-flex align-items-center">
      <div className="input-group mb-3">
        <input
          value={inputText}
          onChange={handleInputText}
          type="text"
          className="form-control"
          placeholder="Enter Task ... "
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
  );
}

export default InputText;
