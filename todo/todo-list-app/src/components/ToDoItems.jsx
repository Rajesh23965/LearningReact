// ToDoItems.js
import React from "react";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <ToDoItem
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default ToDoItems;
