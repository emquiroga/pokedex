import styles from "./index.module.css";

interface FlexContainerProps {
  children: JSX.Element | JSX.Element[];
}
export const FlexContainer = ({ children }: FlexContainerProps) => {
  return <div className={`${styles["flex-container"]}`}>{children}</div>;
};
