import React, { useEffect, useState } from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../styles/GlobalComponents";
import { BlogCard, GridContainer } from "../components/Projects/ProjectsStyles";
import axios from "axios";
import { setStatusData, getStatusData } from "../repository/datarepository";

const TwitterApi = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await axios.get("/api/twitterData");
        setTweets(response.data.statuses);
        console.log(response.data.statuses);
      } catch (err) {
        console.log(err);
      }
    };

    // Only make the API call once when the component mounts
    getTweets();

    // Cleanup function to ensure the effect is only run when the component unmounts
    return () => setTweets([]);
  }, []);

  setStatusData(tweets);
  const statuses = getStatusData();
  return (
    <>
      <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle>TwitterApi Demo</SectionTitle>

        <GridContainer>
          {statuses.map((status) => (
            <BlogCard key={status}>
              <h2>Created At:{status.created_at}</h2>
              <text>{status.text}</text>
            </BlogCard>
          ))}
        </GridContainer>
      </Section>
    </>
  );
};

export default TwitterApi;
