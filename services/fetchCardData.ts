export type CardData = {
    id: number;
    name: string;
    front_default: string;
    types: [{
        slot: number
        type: {
            name: string
            url: string
        }
    }]
};

interface PokemonData {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    }
    types: [{
        slot: number
        type: {
            name: string
            url: string
        }
    }]
}

export const fetchCardData = (data: PokemonData) => {
    const { id, name, sprites: { front_default }, types } = data;
    return { id, name, front_default, types };
}