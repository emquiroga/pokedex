import { useCallback, useReducer } from "react";

import { TypesStateProps } from "./interfaces";
import { TypesContext } from "./TypeContext";
import { typesReducer } from "./typeReducer";

const INITIAL_STATE: TypesStateProps = {
  types: "",
  pokemon: [],
  damage_relations: {
    double_damage_from: [],
    double_damage_to: [],
    half_damage_from: [],
    half_damage_to: [],
    no_damage_from: [],
    no_damage_to: []
  },
  generation: {
    name: "",
    url: ""
  },
  id: 0,
  move_damage_class: {
    name: "",
    url: ""
  },
  moves: []
};

type TypeProviderProps = {
  children: JSX.Element | JSX.Element[];
};
export const TypeProvider = ({ children }: TypeProviderProps) => {
  const [typesState, dispatch] = useReducer(typesReducer, INITIAL_STATE);

  const setTypes = useCallback(
    ({
      types,
      pokemon,
      damage_relations,
      generation,
      id,
      move_damage_class,
      moves
    }: TypesStateProps) => {
      dispatch({
        type: "SET_TYPES",
        payload: {
          types,
          pokemon,
          damage_relations,
          generation,
          id,
          move_damage_class,
          moves
        }
      });
    },
    []
  );

  return (
    <TypesContext.Provider
      value={{
        typesState,
        setTypes
      }}
    >
      {children}
    </TypesContext.Provider>
  );
};
