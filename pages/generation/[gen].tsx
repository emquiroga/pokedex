import type { NextPage } from "next";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import styles from "../../styles/Home.module.css";
import { getGenerationList } from "../../services/pokeService";
import { generationRanges } from "../../helpers/generationRanges";
import { Nav } from "../../components/Nav";
import { Table } from "../../components/Table";

type TableData = [
  {
    name: string;
    url: string;
  },
];

const GenerationList: NextPage = () => {
  const router = useRouter();
  const { gen } = router.query;

  const [generation, setGeneration] = useState<TableData | null>(null);

  useEffect(() => {
    const { start, end } = generationRanges(gen as string);

    if (gen) {
      getGenerationList(start, end).then((data) => {
        setGeneration(data.data.results);
      });
    }
  }, [gen]);

  const TITLES = ["Name", "See more"];

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
        <h1 className={styles.title}> Selected Generation: </h1>
        <p>{gen}</p>
        <hr />
        {generation && <Table data={generation} titles={TITLES} />}
      </main>
    </div>
  );
};

export default GenerationList;
