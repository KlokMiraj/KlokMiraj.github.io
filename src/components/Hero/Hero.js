import React , {useState} from 'react';
import Collapsible from 'react-Collapsible'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const [learnMore,setlearnMore]=useState(false);

const Hero = (props) => (
  <div>
    <Section row nopadding >
      <LeftSection>
        <SectionTitle main center>
            Welcome to my Portfolio <br/>
        </SectionTitle>
        <SectionText>
          Data Engineer with a passion for tech and all things tech. I recently graduated my masters 
          with first class. My major was big data and artificial intellegence following that I am on a lookout 
          for positions in data engineering. 
          
        </SectionText>
        <Button onClick={() => window.location = " "}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;