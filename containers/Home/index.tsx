import { useState, useEffect } from "react";

import { PokedexCard } from "../../components/PokedexCard";
import { PokedexLayout } from "../../components/PokedexLayout";
import { SearchInput } from "../../components/SearchInput";
import { useSubmitSearch } from "../../hooks/useSubmitSearch";
import { CardData, fetchCardData } from "../../services/fetchCardData";
import { getPokemonByName } from "../../services/pokeService";
import styles from "../../styles/Home.module.css";

export const HomeContainer = () => {
  const { handleChange, handleSubmit, searchTerm } = useSubmitSearch();
  const [pokemon, setPokemon] = useState<CardData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchTerm) {
      getPokemonByName(searchTerm)
        .then((data) => {
          const fetchedData = fetchCardData(data.data);

          setError(null);
          setPokemon(fetchedData);
        })
        .catch(() => {
          setPokemon(null);
          setError("Pokemon not found");
        });
    }

    return () => {};
  }, [searchTerm]);

  return (
    <main className={styles.main}>
      <SearchInput
        debounce={false}
        errorMessage={error}
        handleSearch={handleChange}
        handleSubmit={handleSubmit}
        placeholder="Search your Pokémon here!"
        submit={true}
      />
      {pokemon && (
        <PokedexLayout>
          <PokedexCard
            id={pokemon.id}
            image={pokemon.front_default}
            name={pokemon.name}
            types={pokemon.types}
          />
        </PokedexLayout>
      )}
    </main>
  );
};
