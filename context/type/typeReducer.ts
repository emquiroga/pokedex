import { TypesStateProps } from "./interfaces";

type TypesActionProps = { type: "SET_TYPES"; payload: TypesStateProps };

export const typesReducer = (state: TypesStateProps, action: TypesActionProps) => {
  switch (action.type) {
    case "SET_TYPES":
      return {
        ...state,
        types: action.payload.types,
        pokemon: action.payload.pokemon,
        generation: action.payload.generation,
        id: action.payload.id,
        move_damage_class: action.payload.move_damage_class,
        moves: action.payload.moves,
        damage_relations: action.payload.damage_relations
      };
    default:
      return state;
  }
};
