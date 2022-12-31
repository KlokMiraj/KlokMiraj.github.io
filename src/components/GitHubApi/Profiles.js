import React from "react"
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents"
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Img, Tag, TagList, TitleContent, UtilityList } from "../Projects/ProjectsStyles"


export default function Profile(props) {
  return (
    <>
            <BlogCard>
                
                <TitleContent>
                    <HeaderThree>{props.owner.login}</HeaderThree>
                </TitleContent>
                <CardInfo className="card-info">{props.name}</CardInfo>
                {props.private?(
                    <TitleContent>Private</TitleContent>
                ):(
                    <TitleContent>Public</TitleContent>
                )}
                <UtilityList>
                    <ExternalLinks href={props.html_url}>Visit Repo</ExternalLinks>
                </UtilityList>
                <TagList>
                    {props.language}
                </TagList>
                {
                    props.topics && 
                    props.topics.map((topic,i)=>{return <Tag key={i}>{topic}</Tag>;})
                    
                }
                
            </BlogCard>
    </>
  )
}