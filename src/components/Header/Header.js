import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <div>
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" , marginBottom:"20px"}}>
          <DiCssdeck size="3rem" /> <span>MIRAJ.DEV.IO</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
      <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li> 
      {/* <li>
        <Link href="/blog">
          <NavLink>Blogs</NavLink>
        </Link>
      </li>        */}
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/KlokMiraj">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/miraj-pudasaini-77aa65153/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/">
          <AiFillTwitterCircle size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
    </div>
);

export default Header;
