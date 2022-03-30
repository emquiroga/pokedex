import type { NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Nav } from "../../components/Nav";
import { MainLayout } from "../../layouts/MainLayout";

const About: NextPage = () => {
  return (
    <div className="app-container">
      <Head>
        <title>Pokenext!</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <header>
        <Nav />
      </header>
      <MainLayout>
        <section className="w-5/6 max-w-xl">
          <div className="w-full px-4 py-2 flex flex-col justify-center content-center gap-4 bg-blue rounded-md">
            <h1 className="text-large font-secondary font-bold text-center uppercase text-lightRed ">
              pokedex project
            </h1>
            <p className="text-small font-primary text-white">
              This page is an open-source project. It means you can collaborate with it in our{" "}
              <a
                className="text-lightBlue underline transition-all cursor-pointer hover:text-gray"
                href="https://github.com/emquiroga/pokedex/"
                rel="noreferrer"
                target="_blank"
              >
                source repo
              </a>{" "}
              making a pull request over there. Even you can clone it, fork it, and make your own
              use of the code!
            </p>
            <p className="text-small font-primary text-white">
              Project is coded with{" "}
              <a
                className="text-lightBlue underline transition-all cursor-pointer hover:text-gray"
                href="https://nextjs.org/"
                rel="noreferrer"
                target="_blank"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                className="text-lightBlue underline transition-all cursor-pointer hover:text-gray"
                href="https://tailwindcss.com/"
                rel="noreferrer"
                target="_blank"
              >
                TailwindCSS
              </a>{" "}
              frameworks, and uses the{" "}
              <a
                className="text-lightBlue underline transition-all cursor-pointer hover:text-gray"
                href="https://pokeapi.co/"
                rel="noreferrer"
                target="_blank"
              >
                PokeAPI
              </a>{" "}
              project.
            </p>
            <p className="text-small font-primary text-white">
              Here are some ideas of implementations that I would like to make over time:
            </p>
            <ul className="text-small font-primary text-white">
              <li>
                Objects info: there is a list of{" "}
                <a
                  className="text-lightBlue underline transition-all cursor-pointer hover:text-gray"
                  href="https://pokeapi.co/docs/v2"
                  rel="noreferrer"
                  target="_blank"
                >
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
            <p className="text-small font-primary text-white">
              For any commentary, collaboration or doubt, feel free to contact me.
            </p>
            <Link href="https://github.com/emquiroga" passHref={true}>
              <FontAwesomeIcon
                className="w-12 m-auto text-gray transition-all cursor-pointer hover:text-lightRed"
                icon={faGithub}
              />
            </Link>
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default About;
