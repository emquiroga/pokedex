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
          className={`focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm text-blue font-bold placeholder-lightBlue rounded-md py-2 px-2 ring-1 ring-lightBlue shadow-sm ${styles["search-input"]}`}
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
      <form className="w-80 mx-auto" onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <input
            aria-label="Search Pokémon"
            className={`focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm text-blue font-secondary font-semibold placeholder-lightBlue rounded-md ring-1 ring-lightBlue shadow-sm ${styles["search-input"]}`}
            placeholder={placeholder}
            type="text"
            onChange={handleSearch}
          />
          <button className={styles["search-btn"]} type="submit">
            <SearchIcon className="text-blue" />
          </button>
        </div>
        {errorMessage && (
          <span
            className={`w-full max-w-sm block text-center py-2 px-4 my-4 rounded-md font-primary font-semibold text-yellow  bg-lightRed`}
          >
            {errorMessage}
          </span>
        )}
      </form>
    );
  }

  return null;
};
