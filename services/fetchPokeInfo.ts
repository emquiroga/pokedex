export type PokemonInfo = {
    id: number;
    name: string;
    front_default: string;
};

interface PokemonData {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    }
}

export const fetchPokeInfo = (data: PokemonData) => {
    const { id, name, sprites: { front_default } } = data;
    return { id, name, front_default };
}