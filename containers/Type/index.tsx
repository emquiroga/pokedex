import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import { TypesContext } from "../../context/type/TypeContext";
import { getPokemonByName, getTypes } from "../../services/pokeService";

interface ITypeContainer {
  type: string;
}

export const TypeContainer = ({ type }: ITypeContainer) => {
  const {
    typesState: { types, pokemon, damage_relations, generation, id, move_damage_class, moves },
    setTypes
  } = useContext(TypesContext);

  useEffect(() => {
    if (type) {
      getTypes(type as string).then((data) => {
        setTypes({
          types: type,
          pokemon: data.data.pokemon,
          damage_relations: data.data.damage_relations,
          generation: data.data.generation,
          id: data.data.id,
          move_damage_class: data.data.move_damage_class,
          moves: data.data.moves
        });
      });
    }
  }, [type, setTypes]);

  return (
    <>
      {type && (
        <>
          <h1 className="my-4 text-secondary text-xlarge font-bold uppercase text-lightRed">
            {types}
          </h1>
        </>
      )}
      {pokemon && (
        <div>
          {pokemon.map(({ pokemon }, slot) => {
            return (
              <div key={slot}>
                <Link
                  passHref
                  href={`../pokemon/${pokemon.url.substring(
                    "https://pokeapi.co/api/v2/pokemon/".length
                  )}`}
                >
                  <p className="my-4 text-secondary text-xlarge font-bold uppercase text-lightRed">
                    {pokemon.name}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
