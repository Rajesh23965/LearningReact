import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonsName = [
    "AC",
    "CE",
    "*",
    "/",
    "9",
    "8",
    "7",
    "-",
    "6",
    "5",
    "4",
    "+",
    "3",
    "2",
    "1",
    "=",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonsName.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
