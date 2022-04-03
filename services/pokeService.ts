import { get } from "./pokeApi";

const ENDPOINT = "https://pokeapi.co/api/v2/";

export const getPokemonByName = (name: string) => {
  return get(`${ENDPOINT}pokemon/${name}`);
};

export const getPokemonByNumber = (number: string) => {
  return get(`${ENDPOINT}pokemon/${number}`);
};

export const getGenerationList = (start: number, end: number) => {
  return get(`${ENDPOINT}pokemon?limit=${end}&offset=${start}`);
};

export const getTypes = (type: string) => {
  return get(`${ENDPOINT}type/${type}`);
};
