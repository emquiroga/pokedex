export type InfoData = {
    height: number;
    weight: number;
    abilities: [{
        ability: {
            name: string;
        }
    }];
    stats: [{
        base_stat: number;
        stat: {
            name: string;
        }
    }];
    base_experience: number;
    types: [{
        type: {
            name: string
            url: string
        }
    }]
}

export const fetchInfoData = (data: InfoData) => {
    const { height, weight, abilities, stats, base_experience, types } = data;
    return { height, weight, abilities, stats, base_experience, types };
}