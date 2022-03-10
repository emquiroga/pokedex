import { useEffect, useState } from "react";
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import styles from '../../styles/Home.module.css'
import { getGenerationList } from "../../services/pokeService";
import { generationRanges } from "../../helpers/generationRanges";


const GenerationList: NextPage = () => {
    const router = useRouter()
    const { gen } = router.query;



    useEffect(() => {
        const { start, end } = generationRanges(gen as string);
        getGenerationList(start, end)
            .then(data => console.log(data))
    })


    return (
        <div className={styles.container}>
            <Head>
                <title>Pokenext!</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}> Selected Generation: </h1>
                <p>{gen}</p>
            </main>
        </div>
    )
}

export default GenerationList;