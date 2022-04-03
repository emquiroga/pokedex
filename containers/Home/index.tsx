import { useState, useEffect } from "react";

import { PokedexCard } from "../../components/PokedexCard";
import { PokedexLayout } from "../../layouts/PokedexLayout";
import { SearchInput } from "../../components/SearchInput";
import { useSubmitSearch } from "../../hooks/useSubmitSearch";
import { CardData, fetchCardData } from "../../services/fetchCardData";
import { getPokemonByName } from "../../services/pokeService";
import { RotomLayout } from "../../layouts/RotomLayout";

export const HomeContainer = () => {
  const { handleChange, handleSubmit, searchTerm } = useSubmitSearch();
  const [pokemon, setPokemon] = useState<CardData | null>();
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
    <>
      <SearchInput
        debounce={false}
        errorMessage={error}
        handleSearch={handleChange}
        handleSubmit={handleSubmit}
        placeholder="Search your Pokémon here!"
        submit={true}
      />
      {pokemon ? (
        <PokedexLayout>
          <PokedexCard
            id={pokemon.id}
            image={pokemon.front_default}
            name={pokemon.name}
            types={pokemon.types}
          />
        </PokedexLayout>
      ) : (
        <PokedexLayout>
          <RotomLayout />
        </PokedexLayout>
      )}
    </>
  );
};
