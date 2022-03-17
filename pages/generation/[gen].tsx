import type { NextPage } from "next";

import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";
import { Nav } from "../../components/Nav";
import { GenerationsContainer } from "../../containers/Generations";
import { GenerationProvider } from "../../context/generation/GenerationProvider";

const GenerationList: NextPage = () => {
  const router = useRouter();
  const { gen } = router.query;

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
      <GenerationProvider>
        <main className={styles.main}>{gen && <GenerationsContainer genProp={gen} />}</main>
      </GenerationProvider>
    </div>
  );
};

export default GenerationList;
