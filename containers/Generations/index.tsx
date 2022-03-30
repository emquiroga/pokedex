import { useContext, useEffect } from "react";
import { useMemo } from "react";

import { Table } from "../../components/Table";
import { GenerationContext } from "../../context/generation/GenerationContext";
import { generationName } from "../../helpers/generationName";
import { generationRanges } from "../../helpers/generationRanges";
import { getGenerationList } from "../../services/pokeService";

import { IGenerationContainer } from "./interface";

export const GenerationsContainer = ({ genProp }: IGenerationContainer) => {
  const {
    generationState: { generation, pokemonList },
    setGeneration
  } = useContext(GenerationContext);

  useEffect(() => {
    let { start, end } = generationRanges(genProp as string);
    let genName = generationName(genProp as string);

    getGenerationList(start, end).then((data) => {
      setGeneration({
        generation: genName,
        pokemonList: data.data.results
      });
    });

    return () => {};
  }, [genProp, setGeneration]);

  return (
    <>
      {pokemonList && generation && (
        <>
          <h1 className="my-4 text-secondary text-xlarge font-bold uppercase text-lightRed">
            {generation}
          </h1>
          <Table data={pokemonList} titles={["Name", "Actions"]} />
        </>
      )}
    </>
  );
};
