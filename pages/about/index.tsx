import type { NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Nav } from "../../components/Nav";
import styles from "../../styles/Home.module.css";

import aboutStyles from "./index.module.css";

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
        <h1 className={styles.title}> PokeDex Project: </h1>
        <section className={aboutStyles["about-section"]}>
          <div className={aboutStyles["about-wrapper"]}>
            <p>
              This page is an open-source project. It means you can collaborate with it in our{" "}
              <a href="https://github.com/emquiroga/pokedex/" rel="noreferrer" target="_blank">
                source repo
              </a>{" "}
              making a pull request over there. Even you can clone it, fork it, and make your own
              use of the code!
            </p>
            <p>
              Project is coded with{" "}
              <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
                Next.js
              </a>{" "}
              and{" "}
              <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
                TailwindCSS
              </a>{" "}
              frameworks, and uses the{" "}
              <a href="https://pokeapi.co/" rel="noreferrer" target="_blank">
                PokeAPI
              </a>{" "}
              project.
            </p>
            <p>Here are some ideas of implementations that I would like to make over time:</p>
            <ul className={aboutStyles["about-list"]}>
              <li>
                Objects info: there is a list of{" "}
                <a href="https://pokeapi.co/docs/v2" rel="noreferrer" target="_blank">
                  objects
                </a>{" "}
                available on the API that I would like to display in a page
              </li>
              <li>
                Moves, locations, games: as objects, there is a list of those available in the same
                API
              </li>
              <li>
                PokeDex style: for a good challenge, I would love to have available a list of
                PokeDex styles made with purely CSS. This is an ultimatum challene (at least for
                me), but I would really love to have them in the website.
              </li>
            </ul>
            <p>For any commentary, collaboration or doubt, feel free to contact me.</p>
            <Link href="https://github.com/emquiroga" passHref={true}>
              <FontAwesomeIcon className="w-12" icon={faGithub} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
