import { useEffect, useState } from "react";
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getPokemonByNumber } from "../../services/pokeService";

import styles from '../../styles/Home.module.css'
import { fetchInfoData } from "../../services/fetchInfoData";


const PokemonInfo: NextPage = () => {
    const router = useRouter()
    const { id } = router.query;

    useEffect(() => {
        getPokemonByNumber(id as string)
            .then(data => {
                const fetchedData = fetchInfoData(data.data);
                console.log(fetchedData);
            })
    })

    return (
        <div className={styles.container}>
            <Head>
                <title>Pokenext!</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}> Pokemon info: </h1>
                <p>{id}</p>
            </main>
        </div>
    )
}

export default PokemonInfo;