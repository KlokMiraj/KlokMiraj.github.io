import styled from 'styled-components';

// Blog Post Container
export const BlogPost = styled.article`
  background: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.primary1};
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
`;

// Blog Post Title
export const BlogTitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fonts.title};
`;

// Blog Post Date
export const BlogDate = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.primary1};
  opacity: 0.7;
`;

// Blog Post Excerpt
export const BlogExcerpt = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary1};
`;

// Read More Button
export const ReadMoreButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary}; /* Custom color */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken(${(props) => props.theme.colors.secondary}, 20%); /* Darken the secondary color */
  }
`;
