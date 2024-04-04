import React from "react";
import AppName from "./components/AppName";
import ToDo from "./components/ToDo";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { ItemContext } from "./store/item-store";

export default function App() {
  const [todoItems, setToDoItems] = useState([]); // Initialize as an empty array

  const addNewItem = (itemName, itemDueDate) => {
    setToDoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    // setToDoItems(`Item Deleted: ${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setToDoItems(newTodoItems);
  };
  // const defaultToDoItems = [{ name: "Milk", dueDate: "Today" }];

  return (
    <ItemContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <div className="todo-container">
        <center>
          <AppName />
          <ToDo />
          <WelcomeMessage />
          <ToDoItems />
        </center>
      </div>
    </ItemContext.Provider>
  );
}
