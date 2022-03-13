export interface CardTypes {
  name: string;
  image: string;
  id: number;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    },
  ];
}
