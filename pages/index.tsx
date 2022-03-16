import type { NextPage } from "next";

import Head from "next/head";

import styles from "../styles/Home.module.css";
import { Nav } from "../components/Nav";
import { HomeContainer } from "../containers/Home";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokenext!</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <header>
        <Nav />
        <HomeContainer />
      </header>
    </div>
  );
};

export default Home;
