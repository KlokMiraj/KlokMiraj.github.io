import styled, { css} from 'styled-components';

// Blog Post Container
export const BlogPost = styled.article`
  background: ${(props) => props.theme.colors.background2}; 
  color: ${(props) => props.theme.colors.primary1};
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
  padding: 1.5rem; 
`;


// Blog Post Title
export const BlogTitle = styled.h2`
  font-size: 1.75rem; 
  color: ${(props) => props.theme.colors.button}; 
  font-family: ${(props) => props.theme.fonts.title};
  margin-bottom: 0.5rem; 
  font-weight: bold; 
  margin-bottom: 0.5rem;
`;


// Blog Post Date
export const BlogDate = styled.p`

  color: ${(props) => props.theme.colors.accent1}; 
  opacity: 0.8;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;

export const BlogCardFooter = styled.div`
  padding-top: 1rem;
  border-top: 1px solid #ccc; // Subtle border
  display: flex;
  justify-content: space-between;
  align-items: center;
`;




// Blog Post Excerpt with conditional styling for collapsed and expanded states
export const BlogExcerpt = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary1};
  line-height: 1.5; 
  ${(props) => props.isCollapsed ? css`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  ` : css`
    /* Styles for expanded excerpt */
  `}
`;

// Add this to your BlogStyles.js
export const BlogThumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;



export const ReadMoreButton = styled.button`
  background-color: ${(props) => props.theme.colors.accent1};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    width: 100%; 
  margin-top: 1rem; 


  &:hover {
    background-color: ${(props) => props.theme.colors.button};
    transform: translateY(-2px);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3); 
    font-weight: bold; 
  }

  &:active {
    transform: translateY(1px); 
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 
  }
`;



// RenderStars as a React component for better reusability and React best practices
export const RenderStars = (rating) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < rating ? 'gold' : 'gray' }}>
          ★
        </span>
      ))}
    </div>
  );
};

