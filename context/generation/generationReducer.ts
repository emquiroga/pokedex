import { GenerationStateProps } from "./interfaces";

type GenerationActionProps = { type: "SET_GENERATION"; payload: GenerationStateProps };

export const generationReducer = (state: GenerationStateProps, action: GenerationActionProps) => {
  switch (action.type) {
    case "SET_GENERATION":
      return {
        ...state,
        generation: action.payload.generation,
        pokemonList: action.payload.pokemonList
      };
    default:
      return state;
  }
};
