import {useState,useEffect} from "react";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { BlogCard, GridContainer, HeaderThree, Tag, TitleContent } from "../Projects/ProjectsStyles";
import Profile from "./Profiles";

function GithubApi(){
    const [items,setItems]=useState([])
    const[user]=useState("klokMiraj")

    useEffect(()=>{
        const fetchRepos=async()=>{
            const res=await fetch(
                `https://api.github.com/users/${user}/repos?per_page=6&sort=updated`
            )
            const data=await res.json()
            setItems(data)
            // console.log(data)
        }

        fetchRepos()
    },[user])

    return (
        <>
    <div>
        <Section nopadding id='projects'>
            <SectionDivider/>
       
        <SectionTitle>Active Github Repos</SectionTitle>
    
        <GridContainer>
            {!items ? (
          <Loading />
        ) : (
          <div>
            <HeaderThree>Git Hub Profile</HeaderThree>
            {items.map((item) => (
                <BlogCard key={item}>
                    <Profile key={item.id} {...item} />
                </BlogCard>
            
          ))}
          </div>
        )}


        </GridContainer>
        </Section>
        
        </div>
      </>
    )
}
export default GithubApi