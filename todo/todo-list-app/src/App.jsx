import React from "react";
import AppName from "./components/AppName";
import ToDo from "./components/ToDo";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setToDoItems] = useState([]); // Initialize as an empty array

  const handleNewItem = (itemName, itemDueDate) => {
    setToDoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    // setToDoItems(`Item Deleted: ${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setToDoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <ToDo onNewItem={handleNewItem}></ToDo>
      {todoItems.length === 0 && <WelcomeMessage />}
      <ToDoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></ToDoItems>
    </center>
  );
}

export default App;
