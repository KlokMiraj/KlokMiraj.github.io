import Head from 'next/head';
import { React } from "react";
import { attributes, react as HomeContent } from '../../../content/_posts/blog/home.md';
import {BlogPost, BlogTitle, BlogDate, BlogExcerpt, ReadMoreButton} from  './BlogStyles';

export default function Blog() {
    let { title, cats } = attributes;
    return (
        <><Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head><BlogPost>
                <BlogTitle>{title}</BlogTitle>
                <BlogDate>{cats}</BlogDate>
                <BlogExcerpt>
                    <HomeContent />
                </BlogExcerpt>
                <ReadMoreButton>Read More</ReadMoreButton>
            </BlogPost></>
    );
}