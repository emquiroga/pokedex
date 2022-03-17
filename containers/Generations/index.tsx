import { useContext, useEffect } from "react";

import { Table } from "../../components/Table";
import { GenerationContext } from "../../context/generation/GenerationContext";
import { generationName } from "../../helpers/generationName";
import { generationRanges } from "../../helpers/generationRanges";
import { getGenerationList } from "../../services/pokeService";

import styles from "./index.module.css";
import { IGenerationContainer } from "./interface";

export const GenerationsContainer = ({ genProp }: IGenerationContainer) => {
  const {
    generationState: { generation, pokemonList },
    setGeneration
  } = useContext(GenerationContext);

  useEffect(() => {
    const { start, end } = generationRanges(genProp as string);

    if (genProp) {
      let genName = generationName(genProp as string);

      getGenerationList(start, end).then((data) => {
        setGeneration({
          generation: genName,
          pokemonList: data.data.results
        });
      });
    }

    return () => {};
  }, [genProp, setGeneration]);

  return (
    <>
      {pokemonList && (
        <>
          <h1 className={styles["generation-name"]}>{generation}</h1>
          <Table data={pokemonList} titles={["Name", "Actions"]} />
        </>
      )}
    </>
  );
};
