import { useCallback, useReducer } from "react";

import { generationReducer } from "./generationReducer";
import { GenerationContext } from "./GenerationContext";
import { GenerationStateProps } from "./interfaces";

const INITIAL_STATE: GenerationStateProps = {
  generation: "",
  pokemonList: []
};

type GenerationProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const GenerationProvider = ({ children }: GenerationProviderProps) => {
  const [generationState, dispatch] = useReducer(generationReducer, INITIAL_STATE);

  const setGeneration = useCallback(({ generation, pokemonList }: GenerationStateProps) => {
    dispatch({
      type: "SET_GENERATION",
      payload: {
        generation,
        pokemonList
      }
    });
  }, []);

  return (
    <GenerationContext.Provider
      value={{
        generationState,
        setGeneration
      }}
    >
      {children}
    </GenerationContext.Provider>
  );
};
