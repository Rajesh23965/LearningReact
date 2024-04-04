import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { ItemContext } from "../store/item-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(ItemContext);
  return (
    todoItems.length === 0 && (
      <p className={styles.welcomeMsg}>Write some useful things</p>
    )
  );
};

export default WelcomeMessage;
