import { get } from "./pokeApi";

const ENDPOINT = "https://pokeapi.co/api/v2/";

export const getPokemonByName = (name: string) => {
    return get(`${ENDPOINT}pokemon/${name}`);
}

export const getPokemonByNumber = (number: string) => {
    return get(`${ENDPOINT}pokemon/${number}`);
}
