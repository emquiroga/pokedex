import { useState } from "react";

export const useSubmitSearch = () => {
  const [search, setSearch] = useState<null | string>(null);
  const [searchTerm, setSearchTerm] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(search);
  };

  return { search, handleChange, handleSubmit, searchTerm };
};
