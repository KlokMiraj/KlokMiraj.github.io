import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <div>
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {
          [{title:'Password Cracking',
            description:'Password Cracking usig brute force in C using parallel programming'},
            {title:'Password Cracking',
            description:'Password Cracking usig brute force in C using parallel programming'},
            {title:'Password Cracking',
            description:'Password Cracking usig brute force in C using parallel programming'},
            {title:'Password Cracking',
            description:'Password Cracking usig brute force in C using parallel programming'}].map(
            (project=>(
              <div>
                {project.title}
                <br/>
                {project.description}
              </div>
            ))
          )
        }
      </GridContainer>
    </Section>
  </div>
);

export default Projects;