import {useState,useEffect} from "react";
import { GridContainer, Tag, TitleContent } from "../Projects/ProjectsStyles";
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
        <GridContainer>
            <TitleContent>
            Viewing {user}'s repositories
            </TitleContent>
        </GridContainer>
  
        {!items ? (
          <Loading />
        ) : (
          <div>
            <TitleContent>Git Hub Profile</TitleContent>
            {items.map((item) => (
            <Profile key={item.id} {...item} />
          ))}
          </div>
        )}
      </>
    )
}
export default GithubApi