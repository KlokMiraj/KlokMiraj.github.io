import styled from 'styled-components';

// Assuming these are your existing styles
const existingStyles = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#F46737',
    background: '#0f1624'
  },
  breakpoints: {
    md: '768px',
    sm: '640px'
  }
};

// Blog Post Container
export const BlogPost = styled.article`
  background: ${existingStyles.colors.background};
  color: ${existingStyles.colors.primary};
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
`;

// Blog Post Title
export const BlogTitle = styled.h2`
  font-size: 1.5rem;
  color: ${existingStyles.colors.secondary};
`;

// Blog Post Date
export const BlogDate = styled.p`
  font-size: 0.875rem;
  color: ${existingStyles.colors.primary};
  opacity: 0.7;
`;

// Blog Post Excerpt
export const BlogExcerpt = styled.p`
  font-size: 1rem;
  color: ${existingStyles.colors.primary};
`;

export const ReadMoreButton = styled.button`
  background-color: #3b82f6; /* Equivalent to Tailwind's bg-blue-500 */
  color: white;
  padding: 0.5rem 1rem; /* Equivalent to Tailwind's py-2 px-4 */
  border-radius: 0.25rem; /* Equivalent to Tailwind's rounded */
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d4ed8; /* Equivalent to Tailwind's bg-blue-700 */
  }
`;

