import styles from "./index.module.css";

interface PokedexLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const PokedexLayout = ({ children }: PokedexLayoutProps) => {
  return (
    <div className={`rounded-xl ${styles["pokedex_outer_shape"]}`}>
      <span className={styles["top-shape"]} />
      {children}
      <span className={styles["bottom-shape"]} />
    </div>
  );
};
