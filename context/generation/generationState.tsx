import { useReducer } from "react";

import GenerationContext from "./generationContext";
import { generationReducer } from "./GenerationReducer";

interface IGenerationState {
  generationList:
    | [
        {
          name: string;
          url: string;
        },
      ]
    | [];
  filteredPokemon: {
    name: string;
    url: string;
  } | null;
}

const GenerationState = (props) => {
  const initialState = {
    generationList: [],
    filteredPokemon: null,
  };

  const [state, dispatch] = useReducer(generationReducer, initialState);

  return <GenerationContext.Provider value={state}>{props.children}</GenerationContext.Provider>;
};

export default GenerationState;
