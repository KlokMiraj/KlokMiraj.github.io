import React from 'react';


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <div>
    <Section row nopadding >
      <LeftSection>
        <SectionTitle main center>
            Welcome to my Portfolio <br/>
        </SectionTitle>
        <SectionText>
          I am a Software Engineer with a passion for learning new technologies and building projects that can help solve real world problems.
          Currently working at Zola Analytics to build and continuously improve the data pipeline and data warehouse and ingestion process. 
        </SectionText>
        <Button onClick={() => window.location = " "}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;