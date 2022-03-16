export interface SearchInputProps {
  handleSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  errorMessage: string | null;
  submit: boolean;
  debounce: boolean;
}
