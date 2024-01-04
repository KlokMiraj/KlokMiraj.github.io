import Head from 'next/head';
import { React } from "react";
import { attributes, react as HomeContent } from '../../content/home.md';

export default function blog (){
    let { title, cats } = attributes;
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <article>
                <h1>{title}</h1>
                <HomeContent />
            </article>
        </>
    )
}