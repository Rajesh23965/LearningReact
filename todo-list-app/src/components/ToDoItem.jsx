import styles from "./ToDoItems.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
function ToDoItem({ todoName, todoDate, onDeleteClick, index }) {
  // const backgroundColor = index % 2 === 0 ? "green" : "yellow";style={{ backgroundColor }

  return (
    <div className={`${styles.todoItem} container`}>
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <RiDeleteBin5Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
