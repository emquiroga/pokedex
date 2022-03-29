import { POKEMON_TYPES } from "../constants/constants";

export const iconSelector = (type: string | StaticImageData) => {
  switch (type) {
    case "normal":
      return POKEMON_TYPES.normal;
    case "fire":
      return POKEMON_TYPES.fire;
    case "water":
      return POKEMON_TYPES.water;
    case "electric":
      return POKEMON_TYPES.electric;
    case "grass":
      return POKEMON_TYPES.grass;
    case "ice":
      return POKEMON_TYPES.ice;
    case "fighting":
      return POKEMON_TYPES.fighting;
    case "poison":
      return POKEMON_TYPES.poison;
    case "ground":
      return POKEMON_TYPES.ground;
    case "flying":
      return POKEMON_TYPES.flying;
    case "psychic":
      return POKEMON_TYPES.psychic;
    case "bug":
      return POKEMON_TYPES.bug;
    case "rock":
      return POKEMON_TYPES.rock;
    case "ghost":
      return POKEMON_TYPES.ghost;
    case "dragon":
      return POKEMON_TYPES.dragon;
    case "dark":
      return POKEMON_TYPES.dark;
    case "steel":
      return POKEMON_TYPES.steel;
    case "fairy":
      return POKEMON_TYPES.fairy;
    default:
      return type;
  }
};
