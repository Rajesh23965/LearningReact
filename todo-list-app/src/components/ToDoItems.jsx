import { ItemContext } from "../store/item-store";
import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ onDeleteClick }) => {
  const { todoItems } = useContext(ItemContext);

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
