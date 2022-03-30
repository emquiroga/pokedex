import styles from "./index.module.css";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <main className={styles["main"]}>{children}</main>;
};
