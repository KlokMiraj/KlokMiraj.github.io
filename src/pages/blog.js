import React from "react";
import Blog from "../components/Blogs/Blog";
import styled from 'styled-components';
import  getSortedPostsData  from '../components/Blogs/BlogEngine/file_loader';
import PopularBlogs from "../components/Blogs/PopularBlogs";
import { Element } from 'react-scroll';

const BlogPageContainer = styled.div`
  padding: 2rem; // Adjust padding as needed
`;


export default function blog_page({allPostsData}) {
    console.log(allPostsData);
    const popularBlogs = allPostsData.filter((post) => post.rating && post.rating >= 4);


    // console.log(popularBlogs);


      return (
    <BlogPageContainer>
      <Element name="popularBlogs">
        <Blog allPostsData={allPostsData} />
        <PopularBlogs popularBlogs={popularBlogs} />
      </Element>
    </BlogPageContainer>
  );

}

export async function getServerSideProps() {
  try {
    const allPostsData = getSortedPostsData() || {};
    return { props: { allPostsData } };
  } catch (error) {
    return { props: { allPostsData: {} } };
  }
}