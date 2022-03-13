export interface SearchInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  errorMessage: string | null;
}
