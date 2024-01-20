// import Slider from 'react-slick';
// import styled from 'styled-components';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { BlogExcerpt, BlogTitle } from './BlogStyles';
// import { TitleContent } from '../Projects/ProjectsStyles';

// const PopularBlogContainer = styled.div`
//   margin: 3.2rem 0;
// `;
// const BlogCard = styled.div`
//   background: linear-gradient(145deg, ${(props) => props.theme.colors.background2}, ${(props) => props.theme.colors.primary1});
//   color: ${(props) => props.theme.colors.background1};
//   box-shadow: 0 4px 8px rgba(0,0,0,0.5);
//   border-radius: 10px;
//   overflow: hidden;
//   transition: box-shadow 0.3s ease-in-out, transform 0.3s ease;
//   margin: 1rem;
//   padding: 1rem;

//   &:hover {
//      background: linear-gradient(145deg, ${(props) => props.theme.colors.accent1}, ${(props) => props.theme.colors.button});
//     box-shadow: 0 6px 12px rgba(0,0,0,0.8);
//     transform: translateY(-3px); // Slightly less lift
//     ${'' /* background: linear-gradient(145deg, ${(props) => props.theme.colors.background2}, ${(props) => props.theme.colors.primary1}); // More subtle gradient */}
//   }

//   @media ${(props) => props.theme.breakpoints.sm} {
//     margin: 1rem 0;
//   }
// `;


// const settings = {
//   theme: 'dark', // Theme of the application ('dark' or 'light')
//   notifications: true, // Whether notifications are enabled
//   language: 'en', // Language setting
//   fontSize: 'medium', // Font size ('small', 'medium', 'large')
//   layout: 'grid', // Layout of elements ('grid' or 'list')
//   privacy: 'public', // Privacy setting ('public', 'private')
//   autoSave: true, // Auto-save feature enabled or not
//   sound: false, // Sound effects on or off

// };


// const PopularBlogs = ({ popularBlogs }) => {
//   return (
//     <PopularBlogContainer>
//       <TitleContent>Popular Blogs</TitleContent>
//       <Slider {...settings}>
//         {popularBlogs.map(blog => (
//           <BlogCard key={blog.id}>
//             <BlogTitle>{blog.title}</BlogTitle>
//             <BlogExcerpt>{blog.excerpt.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200) + '...'}</BlogExcerpt>
//           </BlogCard>
//         ))}
//       </Slider>
//     </PopularBlogContainer>
//   );
// };

// export default PopularBlogs;




