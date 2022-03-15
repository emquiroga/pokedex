import { typeToColor } from "../../helpers/typeToColor";

import styles from "./index.module.css";

export const TypeIcon = ({ type }: { type: string }) => {
  return <span className={styles["type-shape"]} style={{ backgroundColor: typeToColor(type) }} />;
};
