interface SearchInputProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export const SearchInput = ({ handleChange, placeholder }: SearchInputProps) => {
    return <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" aria-label="Search Pokémon" type="text" placeholder={placeholder} onChange={handleChange} />
}
