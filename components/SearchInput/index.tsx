import { SearchIcon } from "@heroicons/react/solid";

import { SearchInputProps } from "./types";
import styles from "./index.module.css";

export const SearchInput = ({
  handleSearch,
  handleSubmit,
  placeholder,
  errorMessage,
  debounce,
  submit
}: SearchInputProps) => {
  if (debounce) {
    return (
      <>
        <input
          aria-label="Search Pokémon"
          className={`focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-2 ring-1 ring-slate-200 shadow-sm ${styles["search-input"]}`}
          placeholder={placeholder}
          type="text"
          onChange={handleSearch}
        />
        {errorMessage && <span className={styles["error-message"]}>{errorMessage}</span>}
      </>
    );
  }
  if (submit) {
    return (
      <form className="w-full" onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <input
            aria-label="Search Pokémon"
            className={`focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-2 ring-1 ring-slate-200 shadow-sm ${styles["search-input"]}`}
            placeholder={placeholder}
            type="text"
            onChange={handleSearch}
          />
          <button className={styles["search-btn"]} type="submit">
            <SearchIcon />
          </button>
        </div>
        {errorMessage && (
          <span className={`w-full ${styles["error-message"]}`}>{errorMessage}</span>
        )}
      </form>
    );
  }

  return null;
};
