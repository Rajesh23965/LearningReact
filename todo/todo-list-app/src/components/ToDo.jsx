import React, { useRef, useState, todoNameElement } from "react";
// import { HiFolderAdd } from "react-icons/hi";

export default function ToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  // const todoNameElement = useRef();
  // const dueDateElement = useRef();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    if (todoName && dueDate) {
      todoNameElement.current.value = "";
      dueDateElement.current.value = "";
      onNewItem(todoName, dueDate);
      event.preventDefault(); // Prevent default form submission
    }
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
          {/* onChange={handleNameChange} */}
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
          {/* onChange={handleDateChange} */}
        </div>
        <div className="col-2">
          <button
            // type="button"
            type="submit"
            className="btn btn-success kg-button"
          >
            <HiFolderAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
