export interface PokemonProps {
  name: string;
  url: string;
}

export interface GenerationStateProps {
  generation: string;
  pokemonList: [] | PokemonProps[];
}
