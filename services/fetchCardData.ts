export type CardData = {
  id: number;
  name: string;
  front_default: string;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
};

export interface CardDataProps {
  id: number;
  name: string;
  sprites: {
    other: {
      ["official-artwork"]: {
        front_default: string;
      };
    };
  };
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
}

export const fetchCardData = (data: CardDataProps) => {
  const {
    id,
    name,
    sprites: {
      other: {
        ["official-artwork"]: { front_default }
      }
    },
    types
  } = data;

  return { id, name, front_default, types };
};
