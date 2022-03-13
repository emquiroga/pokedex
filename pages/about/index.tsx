import type { NextPage } from "next";

import Head from "next/head";

import { Nav } from "../../components/Nav";
import styles from "../../styles/Home.module.css";

const About: NextPage = () => {
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
        <h1 className={styles.title}> About </h1>
      </main>
    </div>
  );
};

export default About;
