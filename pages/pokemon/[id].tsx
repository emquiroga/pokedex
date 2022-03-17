import type { NextPage } from "next";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { getPokemonByNumber } from "../../services/pokeService";
import styles from "../../styles/Home.module.css";
import { fetchInfoData, InfoData } from "../../services/fetchInfoData";
import { Nav } from "../../components/Nav";
import { InfoCard } from "../../components/InfoCard";

const PokemonInfo: NextPage = () => {
  const [pokemon, setPokemon] = useState<InfoData | null>(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getPokemonByNumber(id as string).then((data) => {
        const fetchedData = fetchInfoData(data.data);

        setPokemon(fetchedData);
      });
    }

    return () => {};
  }, [id]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokenext!</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <header>
        <Nav />
      </header>
      <main className={styles.main}>
        {pokemon && (
          <InfoCard
            abilities={pokemon.abilities}
            base_experience={pokemon.base_experience}
            front_default={pokemon.front_default}
            height={pokemon.height}
            id={pokemon.id}
            name={pokemon.name}
            stats={pokemon.stats}
            types={pokemon.types}
            weight={pokemon.weight}
          />
        )}
      </main>
    </div>
  );
};

export default PokemonInfo;
