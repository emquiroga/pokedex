import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import { FlexContainer } from "../../components/FlexContainer";
import { TypeIcon } from "../../components/TypeIcon";
import { TypesContext } from "../../context/type/TypeContext";
import { getTypes } from "../../services/pokeService";

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

  console.log(moves);

  return (
    <>
      {type && (
        <>
          <TypeIcon height={150} type={types} width={150} />
          <h1 className="my-4 text-secondary text-xlarge font-bold capitalize text-blue">
            {types}
          </h1>
        </>
      )}
      <p>Moves</p>
      {moves && moves.length > 0 && (
        <ul>
          {moves.map(({ name, url }) => {
            return (
              <Link key={name} passHref href={url}>
                <li className="text-blue">
                  <h1 className="my-4 text-secondary text-small font-bold capitalize text-blue">
                    {name}
                  </h1>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
      <p>Pokemon by type:</p>
      {pokemon && (
        <FlexContainer>
          {pokemon.map(({ pokemon }, slot) => {
            return (
              <div key={slot} className="flex flex-col p-4 bg-darkRed">
                <Link
                  passHref
                  href={`../pokemon/${pokemon.url.substring(
                    "https://pokeapi.co/api/v2/pokemon/".length
                  )}`}
                >
                  <p className="my-4 text-primary text-medium font-semibold capitalize text-white">
                    {pokemon.name}
                  </p>
                </Link>
              </div>
            );
          })}
        </FlexContainer>
      )}
    </>
  );
};
