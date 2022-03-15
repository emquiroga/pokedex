import { ReactChildren } from "react";

import styles from "./index.module.css";

interface PokedexLayoutProps {
  children: JSX.Element | ReactChildren;
}

export const PokedexLayout = ({ children }: PokedexLayoutProps) => {
  return (
    <div className={styles["pokedex_outer_shape"]}>
      <span className={styles["top-shape"]} />
      {children}
      <span className={styles["bottom-shape"]} />
    </div>
  );
};
