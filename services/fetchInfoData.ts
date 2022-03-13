export type InfoData = {
  name: string;
  front_default: string;
  height: number;
  weight: number;
  abilities: [
    {
      ability: {
        name: string;
      };
    },
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
  base_experience: number;
  types: [
    {
      type: {
        name: string;
        url: string;
      };
    },
  ];
};

interface InfoDataProps {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  abilities: [
    {
      ability: {
        name: string;
      };
    },
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
  base_experience: number;
  types: [
    {
      type: {
        name: string;
        url: string;
      };
    },
  ];
}

export const fetchInfoData = (data: InfoDataProps) => {
  const {
    name,
    sprites: { front_default },
    height,
    weight,
    abilities,
    stats,
    base_experience,
    types,
  } = data;

  return { name, front_default, height, weight, abilities, stats, base_experience, types };
};
