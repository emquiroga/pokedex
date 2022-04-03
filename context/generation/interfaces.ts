export interface GenerationStateProps {
  generation: string;
  pokemonList:
    | []
    | [
        {
          name: string;
          url: string;
        }
      ];
}
