export const generationRanges = (generation: string) => {
  switch (generation) {
    //Start is the number of the first pokemon by generations less one
    //End is the total of pokemons by each geneation less one
    case "1":
      return {
        start: 0,
        end: 151,
      };
    case "2":
      return {
        start: 151,
        end: 99,
      };
    case "3":
      return {
        start: 251,
        end: 134,
      };
    case "4":
      return {
        start: 386,
        end: 106,
      };
    case "5":
      return {
        start: 493,
        end: 155,
      };
    case "6":
      return {
        start: 694,
        end: 71,
      };
    case "7":
      return {
        start: 721,
        end: 87,
      };
    case "8":
      return {
        start: 809,
        end: 95,
      };
    default:
      return {
        start: 0,
        end: 0,
      };
  }
};
