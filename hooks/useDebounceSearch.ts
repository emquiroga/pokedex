import { useState, useEffect } from "react";

export const useDebounceSearch = (searchTerm: string, delay: number) => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    if (searchTerm.length > 3) {
      const timerId = setTimeout(() => {
        setDebouncedSearchTerm(searchTerm);
      }, delay);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [searchTerm, delay]);

  return debouncedSearchTerm;
};
