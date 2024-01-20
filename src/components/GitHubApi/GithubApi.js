import { useState, useEffect } from "react";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { BlogCard, GridContainer } from "../Projects/ProjectsStyles";
import Profile from "./Profiles";
import styled from "styled-components";

const GridRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

function GithubApi() {
  const [items, setItems] = useState([]);
  const [user] = useState("pudasainimiraj");

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=9&sort=updated`
      );
      const data = await res.json();
      setItems(data);
    };

    fetchRepos();
  }, [user]);

  // Create a function to divide the items into rows of 3
  const divideIntoRows = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const itemsInRows = divideIntoRows(items, 3);

  return (
    <>
      <div>
        <Section nopadding id="projects">
          <SectionDivider />
          <SectionTitle>Active Github Repos</SectionTitle>

          <GridContainer>
            {!items ? (
              <Loading />
            ) : (
              <div className="grid-container">
                {itemsInRows.map((row, rowIndex) => (
                  <GridRow key={rowIndex}>
                    {row.map((item) => (
                      <BlogCard key={item.id}>
                        <Profile
                          key={item.id}
                          image={item.image}
                          name={item.name}
                          bio={item.bio}
                          private={item.private}
                          html_url={item.html_url}
                          language={item.language}
                          topics={item.topics}
                        />
                      </BlogCard>
                    ))}
                  </GridRow>
                ))}
              </div>
            )}
          </GridContainer>
        </Section>
      </div>
    </>
  );
}

export default GithubApi;

