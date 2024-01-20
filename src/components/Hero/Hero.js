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
          I am a Software Engineer with a passion for learning new technologies and solving problems.
          <br />
          <t/>
          Currently working at Zola Analytics building and continuously improving existing data pipeline and ingestion process. 
        </SectionText>
        <Button onClick={() => window.location = " "}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;