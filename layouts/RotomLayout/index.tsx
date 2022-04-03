import styles from "./index.module.css";

export const RotomLayout = () => {
  return (
    <div className={`rounded-xl w-full bg-rotomRed ${styles["rotom-container"]}`}>
      <span className={`bg-gray ${styles["camara-circle"]}`} />
      <div className={`flex flex-row ${styles["face-eyes-container"]}`}>
        <span className={`bg-gray z-20  ${styles["face-eyes"]}`}>
          <span className={` bg-white block ${styles["face-eyes-inner"]}`} />
        </span>
        <span className={`bg-gray z-20  ${styles["face-eyes"]}`}>
          <span className={` bg-white block ${styles["face-eyes-inner"]}`} />
        </span>
      </div>
      <div className={`flex bg-white flex-row ${styles["face-smile-container"]}`} />
      <span className={`block rounded-r-full ${styles["face-circle"]}`} />
    </div>
  );
};
