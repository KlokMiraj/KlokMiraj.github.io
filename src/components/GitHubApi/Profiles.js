import React from "react"
import {
  BlogCard,
  Img,
  HeaderThree,
  CardInfo,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  ExternalLinks,
} from "../Projects/ProjectsStyles";


export default function Profile(props) {
  return (
    <BlogCard>
      <Img src={props.image} /> {/* Adjust the image source as needed */}
      <TitleContent>
        <HeaderThree>{props.name}</HeaderThree>
        <CardInfo className="card-info">{props.bio}</CardInfo>
        {props.private ? (
          <TitleContent>Private</TitleContent>
        ) : (
          <TitleContent>Public</TitleContent>
        )}
        <UtilityList>
          <ExternalLinks href={props.html_url}>Visit Repo</ExternalLinks>
        </UtilityList>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>
            <Tag>{props.language}</Tag>
          </TagList>
        </div>
        {props.topics &&
          props.topics.map((topic, i) => {
            return <Tag key={i}>{topic}</Tag>;
          })}
      </TitleContent>
    </BlogCard>
  );
}
