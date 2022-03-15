import { SearchInputProps } from "./types";
import styles from "./index.module.css";

export const SearchInput = ({ handleChange, placeholder, errorMessage }: SearchInputProps) => {
  return (
    <>
      <input
        aria-label="Search Pokémon"
        className={`focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-2 ring-1 ring-slate-200 shadow-sm ${styles["search-input"]}`}
        placeholder={placeholder}
        type="text"
        onChange={handleChange}
      />
      {errorMessage && <span className={styles["error-message"]}>{errorMessage}</span>}
    </>
  );
};
