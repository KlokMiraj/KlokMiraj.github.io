import React, { useState } from 'react';
import { BlogPost, BlogTitle, BlogDate, BlogExcerpt,BlogCardFooter, ReadMoreButton, RenderStars, BlogThumbnail } from './BlogStyles';
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { BlogCard, GridRow } from "../Projects/ProjectsStyles";

export default function Blog({ allPostsData }) {
    const postsArray = Array.isArray(allPostsData) ? allPostsData : Object.values(allPostsData);

    return (
        <div>
            <Section nopadding id="Blog">
             
                <SectionTitle>Blog Posts</SectionTitle>
                <div>
                    {postsArray.map(({ id, title, date, thumbnail, rating, excerpt }) => {
                        const [isExpanded, setIsExpanded] = useState(false);

                        const handleReadMoreClick = () => {
                            setIsExpanded(!isExpanded);
                        };

                        return (
                            <GridRow key={id}>
                            <BlogCard key={id}>
                                <BlogPost>
                                     {thumbnail && <BlogThumbnail src={thumbnail} alt={title} />}
                                    <BlogTitle>{title}</BlogTitle>
                                    <BlogDate>{date}</BlogDate>
                                    <BlogExcerpt className={isExpanded ? 'expanded' : 'collapsed'}>
                                        {excerpt}
                                    </BlogExcerpt>
                                    <p>Rating: {RenderStars(rating)}</p>
                                    <ReadMoreButton onClick={handleReadMoreClick}>
                                        {isExpanded ? 'Read Less' : 'Read More'}
                                    </ReadMoreButton>
                                    <BlogCardFooter>
                                        {/* Footer content like share buttons or related links */}
                                     </BlogCardFooter>

                                </BlogPost>
                                </BlogCard>
                            </GridRow>
                        );
                    })}
                </div>
            </Section>
        </div>
    );
}
